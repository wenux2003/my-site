import { lazy, Suspense } from "react";
import { aboutContent } from "../../data/siteContent";
import Header from "../layout/Header";
import DecryptedText from "../effects/DecryptedText";
import RotatingText from "../effects/RotatingText";

const LiquidEther = lazy(() => import("../background/LiquidEther"));
const InteractiveHeroModel = lazy(() => import("../three/InteractiveHeroModel"));

function HeroSection() {
  const tickerItems = [
    "Software engineering undergraduate at SLIIT",
    "Full-stack web development with React and Node.js",
    "Kotlin and Android development experience",
    "Responsive interfaces with clean code focus",
  ];

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-4 sm:pb-6 lg:pb-8"
      id="home"
    >
      <div className="relative overflow-hidden">
        <Suspense fallback={<div className="pointer-events-none absolute inset-0 opacity-50" />}>
          <LiquidEther className="pointer-events-none absolute inset-0 opacity-70" />
        </Suspense>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.12),transparent_24%),linear-gradient(110deg,rgba(8,17,29,0.42),rgba(8,17,29,0.82)_52%,rgba(8,17,29,0.96))]" />

        <div className="relative pt-4">
          <Header />
        </div>

        <div className="relative mx-auto grid max-w-[1320px] gap-8 px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-18 lg:grid-cols-[minmax(0,760px)_minmax(300px,390px)] lg:items-center lg:justify-center lg:gap-24 lg:px-10 lg:pt-20 xl:gap-36 xl:px-12">
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
                  "React and Node.js development",
                  "Responsive user-centric applications",
                  "Kotlin mobile app building",
                ]}
              />
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

          <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-[430px]">
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

        <div className="relative overflow-hidden border-y border-white/8 bg-[#111d2d]/45 py-4 backdrop-blur-sm">
          <div className="hero-marquee flex w-max items-center gap-14 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-100 sm:text-sm">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span className="flex items-center gap-3" key={`${item}-${index}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
