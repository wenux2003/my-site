import { techStackGroups } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function StackCarouselRow({ items, reverse = false }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="stack-carousel-mask overflow-hidden">
      <div className={`stack-carousel-track ${reverse ? "stack-carousel-track-reverse" : ""}`}>
        {repeatedItems.map((item, index) => (
          <div
            className="stack-carousel-chip mx-3 inline-flex min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/7 px-4 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-black/10 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/35 hover:bg-white/10 hover:shadow-cyan-400/15"
            key={`${item.name}-${index}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10">
              <img
                alt={`${item.name} logo`}
                className="h-5 w-5 object-contain"
                loading="lazy"
                src={item.icon}
              />
            </span>
            <span>{item.name}</span>
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
        title="My technical arsenal"
        description="A curated selection of technologies I use to solve complex digital problems across web systems, mobile experiences, and practical product workflows."
      />

      <div className="mt-8 space-y-10">
        {techStackGroups.map((group, index) => (
          <div
            className="overflow-hidden border-t border-white/10 pt-6"
            key={group.title}
          >
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
