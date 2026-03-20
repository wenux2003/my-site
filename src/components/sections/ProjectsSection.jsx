import { projects } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function ProjectsSection() {
  return (
    <section className="py-10" id="projects">
      <SectionHeading
        eyebrow="Selected Style"
        title="Portfolio directions with a stronger premium feel"
        description="These project concepts show the kind of visual quality and structure I aim for in client work."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`rounded-[1.9rem] border p-6 shadow-2xl shadow-black/10 transition duration-200 hover:-translate-y-1 ${
              index === 1
                ? "border-orange-300/20 bg-gradient-to-b from-orange-400/15 via-slate-900/75 to-slate-950/90"
                : "surface-panel"
            }`}
          >
            <p className="section-kicker">{project.type}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {project.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
