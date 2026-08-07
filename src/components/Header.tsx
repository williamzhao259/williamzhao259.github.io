import Link from "next/link";
import Image from "next/image";
import { site, socials } from "@/content/site";

export default function Header() {
  return (
    <header className="flex justify-center items-center gap-6 px-6 py-5 border-b border-foreground/10 bg-background lg:h-16">
      <div className="w-full max-w-[1800px] flex items-center gap-6">
        <Link href="/" className="flex items-center w-full" aria-label={site.name}>
          <Image
            src="/avatar.png"
            alt={site.name}
            width={1254}
            height={1254}
            priority
            className="w-12 h-12 rounded-full object-cover"
          />
        </Link>

        <nav className="flex gap-6 items-center justify-end text-[15px] shrink-0">
          <a
            href={`mailto:${site.email}`}
            data-cursor="email"
            className="opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            {site.email}
          </a>
          <a
            href="/william-zhao-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Resume
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 hover:text-primary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
