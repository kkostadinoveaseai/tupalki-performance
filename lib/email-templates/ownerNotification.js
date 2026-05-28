export function getOwnerNotificationHTML(contact) {
  const formattedDate = new Date(contact.createdAt || Date.now()).toLocaleString("bg-BG", {
    timeZone: "Europe/Sofia",
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ново запитване</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f7f9fa; font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td align="center" style="padding: 20px 0; background-color: #f7f9fa;">
              <!-- Container Table -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e1e8ed; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                
                <!-- Red Header Bar -->
                <tr>
                  <td align="center" style="background-color: #E53935; padding: 25px 20px;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase;">
                      Ново запитване за чип тунинг
                    </h1>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 30px 25px;">
                    
                    <!-- Table Grid for Customer Details -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 25px;">
                      <tr>
                        <td width="30%" style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #7f8c8d; text-transform: uppercase; border-bottom: 1px solid #f0f3f4; vertical-align: top;">
                          Име:
                        </td>
                        <td width="70%" style="padding: 8px 0 8px 10px; font-size: 15px; color: #2c3e50; border-bottom: 1px solid #f0f3f4; font-weight: 500;">
                          ${contact.name}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #7f8c8d; text-transform: uppercase; border-bottom: 1px solid #f0f3f4; vertical-align: top;">
                          Имейл:
                        </td>
                        <td style="padding: 8px 0 8px 10px; font-size: 15px; border-bottom: 1px solid #f0f3f4;">
                          <a href="mailto:${contact.email}" style="color: #E53935; text-decoration: none; font-weight: bold;">
                            ${contact.email}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #7f8c8d; text-transform: uppercase; border-bottom: 1px solid #f0f3f4; vertical-align: top;">
                          Телефон:
                        </td>
                        <td style="padding: 8px 0 8px 10px; font-size: 15px; border-bottom: 1px solid #f0f3f4;">
                          <a href="tel:${contact.phone}" style="color: #E53935; text-decoration: none; font-weight: bold;">
                            ${contact.phone}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #7f8c8d; text-transform: uppercase; border-bottom: 1px solid #f0f3f4; vertical-align: top;">
                          Автомобил:
                        </td>
                        <td style="padding: 8px 0 8px 10px; font-size: 15px; color: #2c3e50; border-bottom: 1px solid #f0f3f4; font-weight: 500;">
                          ${contact.carInfo}
                        </td>
                      </tr>
                    </table>

                    <!-- Message Block -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="font-size: 13px; font-weight: bold; color: #7f8c8d; text-transform: uppercase; padding-bottom: 8px;">
                          Вашето съобщение:
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #f8f9fa; border-left: 4px solid #E53935; padding: 15px; border-radius: 4px; font-size: 14px; color: #34495e; line-height: 1.6; font-style: italic;">
                          ${contact.message.replace(/\n/g, "<br>")}
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer and Timestamp -->
                <tr>
                  <td style="padding: 0 25px 25px 25px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #ecf0f1; padding-top: 15px;">
                      <tr>
                        <td style="font-size: 11px; color: #95a5a6; padding-bottom: 5px;">
                          Получено на: ${formattedDate}
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 11px; color: #bdc3c7; font-weight: bold;">
                          Tupalki Performance — Система за управление на запитвания
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
