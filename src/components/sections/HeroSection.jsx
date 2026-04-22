import { lazy, Suspense } from "react";
import { aboutContent } from "../../data/siteContent";
import HeroScrollArrow from "../effects/HeroScrollArrow";

const LiquidEther = lazy(() => import("../background/LiquidEther"));
const InteractiveHeroModel = lazy(() => import("../three/InteractiveHeroModel"));

const socialLinks = [
  {
    label: "GitHub",
    // TODO: Add your GitHub profile link here.
    href: "#",
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.2-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.26 9.26 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.84c0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    // TODO: Add your LinkedIn profile link here.
    href: "#",
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.98H3.65V20h3.29V8.98ZM5.3 4a1.91 1.91 0 1 0 0 3.82A1.91 1.91 0 0 0 5.3 4Zm14.68 9.68c0-3.3-1.76-4.84-4.12-4.84a3.56 3.56 0 0 0-3.22 1.77h-.05V8.98H9.43V20h3.29v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.29l.14-6.32Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    // TODO: Add your email link here, for example: mailto:you@example.com
    href: "#",
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
        <path
          d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m5.25 7.25 6.75 5.5 6.75-5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

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

        <div className="relative mx-auto grid min-h-screen max-w-[1440px] gap-8 px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:grid-cols-[minmax(0,800px)_minmax(320px,0.82fr)] lg:items-center lg:gap-24 lg:px-12 lg:pt-34 xl:gap-32 xl:px-16">
          <div className="max-w-[760px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/8 px-4 py-2 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-950/20 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
              Open to Work
            </div>

            <h1 className="max-w-[780px] font-display text-[3rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[4.4rem] lg:text-[5rem]">
              Turning complex logic into{" "}
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                seamless digital products
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I am a full-stack developer specializing in the MERN stack and high-performance web architecture, currently refining my craft as a Software Engineering undergraduate at SLIIT.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-amber-200 to-orange-400 px-7 font-semibold text-slate-950 transition hover:-translate-y-0.5"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 font-semibold text-white transition hover:-translate-y-0.5 hover:border-amber-200/40 hover:text-amber-100"
                href="#contact"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-6 flex items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  className="text-slate-500 transition hover:-translate-y-0.5 hover:text-cyan-200"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[380px] lg:justify-end">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_36%)] blur-3xl" />
            <div className="relative h-full min-h-[300px] w-full max-w-[390px]">
              <Suspense fallback={<div className="h-full min-h-[300px] w-full" />}>
                <InteractiveHeroModel />
              </Suspense>
            </div>
          </div>
        </div>
        <HeroScrollArrow />
      </div>
    </section>
  );
}

export default HeroSection;
