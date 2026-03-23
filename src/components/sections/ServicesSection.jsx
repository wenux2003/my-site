import { focusAreas } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function ServicesSection() {
  return (
    <section className="py-10" id="services">
      <SectionHeading
        eyebrow="Focus Areas"
        title="Core areas I work in"
        description="These focus areas come directly from the profile and project direction in your CV."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {focusAreas.map((service) => (
          <article
            key={service.title}
            className="surface-panel rounded-[1.75rem] p-6 transition duration-200 hover:-translate-y-1 hover:border-amber-200/25"
          >
            <div className="mb-5 inline-flex rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-100">
              {service.tag}
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
