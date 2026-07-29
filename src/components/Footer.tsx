import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center px-6 py-5 border-t border-foreground/10">
      <div className="w-full max-w-[1800px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[15px]">
        <span className="opacity-60">
          © {new Date().getFullYear()} {site.name}
        </span>

      </div>
    </footer>
  );
}
