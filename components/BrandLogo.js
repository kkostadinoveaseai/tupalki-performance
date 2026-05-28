import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({
  priority = false,
  className = "",
  width = 140,
  height = 48,
  imageClassName = "h-10 sm:h-11 w-auto max-w-[140px] sm:max-w-[160px] object-contain",
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center shrink-0 transition-opacity duration-300 ease-in-out hover:opacity-85 ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt="Tupalki Performance"
        width={width}
        height={height}
        priority={priority}
        className={`${imageClassName} transition-transform duration-300 ease-in-out group-hover:scale-[1.02]`}
      />
    </Link>
  );
}
