import { lazy, Suspense } from "react";
import { aboutContent } from "../../data/siteContent";
import DecryptedText from "../effects/DecryptedText";
import HeroScrollArrow from "../effects/HeroScrollArrow";

const LiquidEther = lazy(() => import("../background/LiquidEther"));
const InteractiveHeroModel = lazy(() => import("../three/InteractiveHeroModel"));

function HeroSection() {
  return (
    <section
      className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden"
      id="home"
    >
      <div className="relative min-h-screen overflow-hidden">
        <Suspense fallback={<div className="pointer-events-none absolute inset-0 opacity-50" />}>
          <LiquidEther className="pointer-events-none absolute inset-0 opacity-70" />
        </Suspense>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.12),transparent_24%),linear-gradient(110deg,rgba(8,17,29,0.42),rgba(8,17,29,0.82)_52%,rgba(8,17,29,0.96))]" />

        <div className="relative mx-auto grid min-h-screen max-w-[1440px] gap-8 px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:grid-cols-[minmax(0,760px)_minmax(390px,1fr)] lg:items-center lg:gap-32 lg:px-12 lg:pt-34 xl:gap-44 xl:px-16">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-amber-100 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              {aboutContent.role}
            </div>

            <div className="mt-5">
              <DecryptedText
                className="font-display text-[0.7rem] uppercase tracking-[0.28em] text-slate-300"
                encryptedClassName="font-display text-[0.7rem] uppercase tracking-[0.28em] text-slate-500"
                maxIterations={10}
                speed={32}
                text="JavaScript / React / Node.js / Kotlin / responsive application development"
              />
            </div>

            <h1 className="mt-6 max-w-[760px] font-display text-[3rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[4.4rem] lg:text-[5rem]">
              Wenura Kavinda
              <br />
              builds{" "}
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                full-stack digital experiences
              </span>
              .
            </h1>

            <div className="mt-5 flex min-h-[3rem] items-center text-base font-semibold text-cyan-200 sm:min-h-[3.4rem] sm:text-xl">
              Responsive user-centric applications
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Dedicated Software Engineering student at SLIIT with a strong focus
              on full-stack web development, responsive application design, and
              practical implementation across web and mobile environments.
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

          <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-[430px] lg:justify-end">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_36%)] blur-3xl" />
            <div className="relative h-full min-h-[320px] w-full">
              <Suspense fallback={<div className="h-full min-h-[320px] w-full" />}>
                <InteractiveHeroModel />
              </Suspense>
              <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300 backdrop-blur-sm">
                Floating robot assistant
              </div>
            </div>
          </div>
        </div>
        <HeroScrollArrow />
      </div>
    </section>
  );
}

export default HeroSection;
