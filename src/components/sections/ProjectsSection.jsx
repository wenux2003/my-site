import { projects } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function ProjectsSection() {
  return (
    <section className="py-10" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Practical systems I have built"
        description="A focused look at full-stack platforms, student tools, and application workflows I have taken from idea to implementation."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`rounded-[1.9rem] border p-6 shadow-2xl shadow-black/10 transition duration-200 hover:-translate-y-1 ${
              index === 1
                ? "border-orange-300/20 bg-gradient-to-b from-orange-400/15 via-slate-900/75 to-slate-950/90"
                : "surface-panel"
            }`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <p className="section-kicker">{project.type}</p>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-slate-300">
                {project.period}
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  className="rounded-full border border-cyan-200/10 bg-cyan-200/8 px-3 py-1 text-xs font-medium text-cyan-100"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {project.highlights.map((highlight) => (
                <div className="flex gap-3 text-sm leading-7 text-slate-300" key={highlight}>
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-200" />
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
