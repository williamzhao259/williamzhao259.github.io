import ProjectCard from "@/components/ProjectCard";
import { experience, projects } from "@/content/site";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full p-6 gap-12">
      <div className="flex flex-col w-full max-w-[1800px]">
        <section className="grid grid-cols-1 gap-12 lg:gap-6 pt-8 lg:pt-[26vh] pb-8 w-full">
          <h1 className="max-w-[700px] text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight font-normal">
            I&apos;m William. I build consumer apps in San Francisco.
          </h1>

          <div className="flex flex-col gap-3 lg:gap-1">
            {experience.map((item) => (
              <div key={`${item.year}-${item.org}`} className="flex gap-2">
                <span className="w-26 min-w-26 text-[15px] opacity-60">
                  {item.year}
                </span>
                <div className="flex flex-col lg:flex-row gap-0.5">
                  <span className="w-56 min-w-56 text-[15px]">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {item.org}
                      </a>
                    ) : (
                      item.org
                    )}
                  </span>
                  <span className="text-[15px] opacity-60">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 pb-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </div>
    </div>
  );
}
