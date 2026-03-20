import { processSteps } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function ProcessSection() {
  return (
    <section className="py-10" id="process">
      <SectionHeading
        eyebrow="Process"
        title="A cleaner way to move from idea to finished frontend"
        description="Breaking the work into clear stages keeps the build organized and easier to maintain."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article
            key={step}
            className="surface-panel rounded-[1.5rem] p-5 transition duration-200 hover:-translate-y-1 hover:border-amber-200/25"
          >
            <span className="font-display text-lg font-semibold tracking-[0.2em] text-amber-200">
              {`0${index + 1}`}
            </span>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {step}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
