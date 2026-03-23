import { lazy, Suspense } from "react";
import DecryptedText from "../effects/DecryptedText";
import RotatingText from "../effects/RotatingText";

const LiquidEther = lazy(() => import("../background/LiquidEther"));
const InteractiveHeroModel = lazy(() => import("../three/InteractiveHeroModel"));

function HeroSection() {
  const tickerItems = [
    "Frontend craft with premium polish",
    "Interactive visuals that feel modern",
    "Responsive portfolio experiences",
    "Clean storytelling for stronger first impressions",
  ];

  return (
    <section
      className="relative overflow-hidden px-0 py-4 sm:py-6 lg:py-8"
      id="home"
    >
      <Suspense fallback={<div className="pointer-events-none absolute inset-0 opacity-50" />}>
        <LiquidEther className="pointer-events-none absolute inset-0 opacity-85" />
      </Suspense>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.12),transparent_24%),linear-gradient(110deg,rgba(8,17,29,0.18),rgba(8,17,29,0.78)_52%,rgba(8,17,29,0.95))]" />

      <div className="relative grid min-h-[84vh] gap-10 px-5 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,420px)] lg:items-center lg:px-12 xl:px-16">
        <div className="pt-2 lg:pt-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-amber-100 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Featured Intro Section
          </div>

          <div className="mt-5">
            <DecryptedText
              className="font-display text-[0.7rem] uppercase tracking-[0.28em] text-slate-300"
              encryptedClassName="font-display text-[0.7rem] uppercase tracking-[0.28em] text-slate-500"
              maxIterations={10}
              speed={32}
              text="Modern interface systems / animated presentation / premium web feel"
            />
          </div>

          <h1 className="mt-6 max-w-5xl font-display text-[3.1rem] font-semibold leading-[0.9] tracking-[-0.075em] text-white sm:text-[4.5rem] lg:text-[5.4rem]">
            Build a sharper
            <br />
            digital presence with{" "}
            <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              clean visual storytelling
            </span>
            .
          </h1>

          <div className="mt-5 flex min-h-[3rem] items-center text-base font-semibold text-slate-100 sm:min-h-[3.4rem] sm:text-xl">
            <RotatingText
              animate={{ y: 0, opacity: 1 }}
              elementLevelClassName="text-cyan-200"
              exit={{ y: "-120%", opacity: 0 }}
              initial={{ y: "100%", opacity: 0 }}
              mainClassName="inline-flex min-h-[1.15em] align-middle"
              rotationInterval={2400}
              staggerDuration={0.02}
              staggerFrom="last"
              texts={[
                "Type-led storytelling",
                "Refined section hierarchy",
                "Interactive premium visuals",
              ]}
            />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Professional hero sections should feel immediate, confident, and
            visually memorable. This version combines bold type, layered motion,
            and an interactive 3D visual while still keeping the presentation
            clean and modern.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-amber-200 to-orange-400 px-7 font-semibold text-slate-950 transition hover:-translate-y-0.5"
              href="#about"
            >
              Explore My Work
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 font-semibold text-white transition hover:-translate-y-0.5 hover:border-amber-200/40 hover:text-amber-100"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[400px] items-center justify-center lg:min-h-[500px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_36%)] blur-3xl" />
          <div className="relative h-full min-h-[360px] w-full">
            <Suspense fallback={<div className="h-full min-h-[360px] w-full" />}>
              <InteractiveHeroModel />
            </Suspense>
            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300 backdrop-blur-sm">
              Floating computer object
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 overflow-hidden border-y border-white/8 bg-[#111d2d]/80 py-4 backdrop-blur-sm">
        <div className="hero-marquee flex w-max items-center gap-14 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-100 sm:text-sm">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span className="flex items-center gap-3" key={`${item}-${index}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
