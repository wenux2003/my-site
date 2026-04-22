import { educationCards } from "../../data/siteContent";

function GraduationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-16 w-16 text-slate-500/30 sm:h-20 sm:w-20"
      viewBox="0 0 64 64"
      fill="currentColor"
    >
      <path d="M32 10 4 24l28 14 22-11v15h4V24L32 10Z" />
      <path d="M18 35v9c0 5 6 9 14 9s14-4 14-9v-9l-14 7-14-7Z" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-violet-100"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.75 14.65 5l3.47-.03.58 3.42 2.67 2.21-1.76 2.99.63 3.41-3.25 1.19-1.71 3.01L12 20.05 8.72 21.2l-1.71-3.01-3.25-1.19.63-3.41-1.76-2.99L5.3 8.39l.58-3.42L9.35 5 12 2.75Zm0 5.1a3.95 3.95 0 1 0 0 7.9 3.95 3.95 0 0 0 0-7.9Zm0 2a1.95 1.95 0 1 1 0 3.9 1.95 1.95 0 0 1 0-3.9Z" />
    </svg>
  );
}

function ProcessSection() {
  const [degree, ...accolades] = educationCards;

  return (
    <section className="py-12 sm:py-16" id="process">
      <h2 className="text-center font-display text-3xl font-semibold tracking-[-0.02em] text-slate-200 sm:text-4xl lg:text-5xl">
        Education &amp; Accolades
      </h2>

      <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,1fr)] lg:items-start xl:gap-8">
        <article className="surface-panel relative min-h-[18rem] overflow-hidden rounded-[1.5rem] p-6 sm:p-8">
          <div className="absolute right-5 top-5">
            <GraduationIcon />
          </div>

          <div className="relative max-w-[36rem]">
            <h3 className="font-display text-xl font-semibold tracking-[0.04em] text-slate-200 sm:text-2xl">
              {degree.detail}
            </h3>
            <p className="mt-4 font-display text-lg font-medium text-slate-300">
              {degree.subDetail}
            </p>
            <p className="mt-8 max-w-[34rem] text-sm leading-7 text-slate-300 sm:text-base">
              {degree.description}
            </p>
            <span className="mt-7 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-1 font-display text-xs font-semibold tracking-[0.22em] text-cyan-300">
              {degree.meta}
            </span>
          </div>
        </article>

        <div className="grid gap-5">
          {accolades.map((card) => (
            <article
              key={card.detail}
              className="surface-panel flex min-h-[7.4rem] items-start gap-5 rounded-[1.5rem] p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-200/25"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                <BadgeIcon />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-200 sm:text-xl">
                  {card.detail}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-300 sm:text-base">
                  {card.subDetail} - {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
