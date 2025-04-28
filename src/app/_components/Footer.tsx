import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { inst, linkedin, tiktok } from "~/static/icons";

export default function Footer() {
  const year = new Date();

  return (
    <footer className="w-full space-y-4 bg-main-500 px-4 py-2.5 md:px-10 md:py-6">
      <div className="flex items-center justify-center gap-4">
        <Link
          target="_blank"
          href="https://www.instagram.com/kobzar.it?igsh=MXAwdmhrbzJ2YXFrYw=="
        >
          <Image
            className="social-filter"
            width={20}
            height={20}
            src={inst as StaticImageData}
            alt="inst icon"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.tiktok.com/@kobzar.it?_t=ZN-8uDqJ4fyjYs&_r=1"
        >
          <Image
            className="social-filter"
            width={16}
            height={16}
            src={tiktok as StaticImageData}
            alt="tiktok icon"
          />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/company/kobzarit/">
          <Image
            className="social-filter"
            width={20}
            height={20}
            src={linkedin as StaticImageData}
            alt="linkedin icon"
          />
        </Link>
      </div>
      <p className="text-center text-xs text-main-100 md:text-sm">
        © {year.getFullYear()} KOBZAR.IT. All rights reserved
      </p>
    </footer>
  );
}
