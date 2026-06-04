import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { getOwnerNotificationHTML } from "@/lib/email-templates/ownerNotification";
import { getCustomerConfirmationHTML } from "@/lib/email-templates/customerConfirmation";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    if (!process.env.DATABASE_URL?.trim()) {
      console.error("DATABASE_URL is not configured.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Базата данни не е конфигурирана. Проверете .env файла (DATABASE_URL).",
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, phone, carInfo, message } = body;

    // Validate that all required fields are present
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !carInfo?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "Моля, попълнете всички задължителни полета." },
        { status: 400 }
      );
    }

    // Save the submission to the database
    const newContact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        carInfo: carInfo.trim(),
        message: message.trim(),
      },
    });

    // Send emails in parallel via Resend
    try {
      const apiKey = process.env.RESEND_API_KEY;
      const ownerEmail = process.env.OWNER_EMAIL;

      if (apiKey && ownerEmail) {
        const resend = new Resend(apiKey);
        
        await Promise.all([
          // Email #1: Owner Notification
          resend.emails.send({
            from: "onboarding@resend.dev",
            to: ownerEmail,
            subject: `Ново запитване от ${name} — Tupalki Performance`,
            html: getOwnerNotificationHTML(newContact),
          }),
          // Email #2: Customer Confirmation
          resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: `Благодарим Ви! Получихме Вашето запитване — Tupalki Performance`,
            html: getCustomerConfirmationHTML(newContact),
          })
        ]);
      } else {
        console.error("Resend environment variables (RESEND_API_KEY or OWNER_EMAIL) are not set.");
      }
    } catch (emailError) {
      // Gracefully catch Resend errors so database save remains successful for the user
      console.error("Failed to send emails via Resend:", emailError);
    }

    return NextResponse.json({ success: true, contact: newContact });
  } catch (error) {
    console.error("Error in contact API route:", error);

    const message = error?.message || "";
    let userMessage = "Възникна грешка при записването на данните.";

    if (message.includes("Can't reach database server")) {
      userMessage =
        "Няма връзка с базата данни. Проверете Supabase дали е активна и DATABASE_URL в .env.";
    } else if (message.includes("Environment variable not found: DATABASE_URL")) {
      userMessage =
        "Липсва DATABASE_URL. Копирайте .env.example към .env и попълнете стойностите.";
    }

    return NextResponse.json(
      { success: false, error: userMessage },
      { status: 500 }
    );
  }
}

