import { techStackGroups } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function StackCarouselRow({ items, reverse = false }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="stack-carousel-mask overflow-hidden">
      <div className={`stack-carousel-track ${reverse ? "stack-carousel-track-reverse" : ""}`}>
        {repeatedItems.map((item, index) => (
          <div
            className="mx-3 inline-flex items-center rounded-full border border-white/8 bg-white/6 px-5 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-black/10 backdrop-blur-sm"
            key={`${item}-${index}`}
          >
            <span className="mr-3 h-2 w-2 rounded-full bg-cyan-300" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function TechStackSection() {
  return (
    <section className="py-12" id="stack">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Three stack categories shown as animated web carousels"
        description="Inspired by modern component showcase sections, this layout presents your stack in three moving rows based on the exact categories from the CV."
      />

      <div className="mt-8 space-y-6">
        {techStackGroups.map((group, index) => (
          <div
            className="surface-panel overflow-hidden rounded-[1.9rem] p-5 sm:p-6"
            key={group.title}
          >
            <div className={`mb-5 h-px w-full bg-gradient-to-r ${group.accent}`} />
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold text-white">
                {group.title}
              </h3>
              <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                {group.items.length} items
              </span>
            </div>
            <StackCarouselRow items={group.items} reverse={index % 2 === 1} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;
