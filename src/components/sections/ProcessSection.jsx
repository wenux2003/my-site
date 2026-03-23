import { educationCards } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function ProcessSection() {
  return (
    <section className="py-10" id="process">
      <SectionHeading
        eyebrow="Education and Credentials"
        title="Academic background and supporting credentials"
        description="A compact overview of education, certifications, and language proficiency from the CV."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {educationCards.map((card) => (
          <article
            key={card.detail}
            className="surface-panel rounded-[1.5rem] p-5 transition duration-200 hover:-translate-y-1 hover:border-amber-200/25"
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
              {card.title}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-white">
              {card.detail}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
              {card.subDetail}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-400">
              {card.meta}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
