import { focusAreas } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function ServicesSection() {
  return (
    <section className="py-10" id="services">
      <SectionHeading
        eyebrow="Focus Areas"
        title="Strategic focus areas"
        description="The engineering areas I focus on most, led by full-stack web systems and supported by mobile and algorithmic problem solving."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-4">
        {focusAreas.map((service) => (
          <article
            key={service.title}
            className={`surface-panel rounded-[1.75rem] p-6 transition duration-200 hover:-translate-y-1 hover:border-amber-200/25 ${
              service.tag === "Web" ? "lg:col-span-2 lg:p-8" : "lg:col-span-1"
            }`}
          >
            <div className="mb-5 inline-flex rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-100">
              {service.tag}
            </div>
            <h3
              className={`font-display font-semibold text-white ${
                service.tag === "Web" ? "text-3xl" : "text-2xl"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`mt-4 leading-7 text-slate-300 ${
                service.tag === "Web" ? "text-base sm:text-lg" : "text-sm sm:text-base"
              }`}
            >
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
