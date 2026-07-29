import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="flex flex-col items-center w-full p-6">
      <article className="w-full max-w-[720px] py-12 lg:py-24 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-[15px] opacity-60">
            {project.status
              ? `${project.subtitle} • ${project.status}`
              : project.subtitle}
          </span>
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-tight font-normal">
            {project.title}
          </h1>
        </div>

        <div
          className={`relative w-full ${project.aspect} border border-foreground/10 overflow-hidden`}
          style={{ backgroundColor: project.accent }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.subtitle} — ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
              priority
            />
          )}
        </div>

        {project.metrics && (
          <div className="flex flex-wrap gap-x-10 gap-y-6 py-2">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span className="text-[28px] leading-none tracking-tight">
                  {m.value}
                </span>
                <span className="text-[13px] opacity-60">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-6 text-[15px] leading-relaxed">
          {(project.sections ?? []).map((section) => (
            <section key={section.heading} className="flex flex-col gap-2">
              <h2 className="text-[17px]">{section.heading}</h2>
              <p className="opacity-60">{section.body}</p>
              {section.image && (
                <figure className="flex flex-col gap-2 mt-2">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={section.image.width}
                    height={section.image.height}
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="w-full h-auto border border-foreground/10"
                  />
                  {section.image.caption && (
                    <figcaption className="text-[13px] opacity-60">
                      {section.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}
        </div>

        {project.press && (
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-[15px]">
            <span className="opacity-60">Press</span>
            {project.press.map((item, i) => (
              <span key={item.href} className="opacity-60">
                {i > 0 && <span className="mr-2">·</span>}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 hover:text-primary transition-colors"
                >
                  {item.outlet}
                </a>
              </span>
            ))}
          </div>
        )}

        <Link
          href="/"
          className="text-[15px] opacity-60 hover:opacity-100 hover:text-primary transition-colors"
        >
          ← Back to work
        </Link>
      </article>
    </div>
  );
}
