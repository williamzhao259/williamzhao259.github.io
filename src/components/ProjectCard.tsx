import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/site";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="project"
      className="group block"
    >
      <div className="flex flex-col gap-2">
        <div
          className={`relative w-full ${project.aspect} border border-foreground/10 overflow-hidden`}
          style={{ backgroundColor: project.accent }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.subtitle} — ${project.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1800px"
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-0.5 mt-1">
          <h3 className="text-[17px] leading-snug">{project.title}</h3>
          <span className="text-[15px] opacity-60 shrink-0">
            {project.status
              ? `${project.subtitle} • ${project.status}`
              : project.subtitle}
          </span>
        </div>
      </div>
    </Link>
  );
}
