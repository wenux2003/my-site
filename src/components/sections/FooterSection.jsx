import DotField from "../background/DotField";
import { aboutContent, contactDetails } from "../../data/siteContent";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/wenux2003",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.2-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.26 9.26 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.84c0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.98H3.65V20h3.29V8.98ZM5.3 4a1.91 1.91 0 1 0 0 3.82A1.91 1.91 0 0 0 5.3 4Zm14.68 9.68c0-3.3-1.76-4.84-4.12-4.84a3.56 3.56 0 0 0-3.22 1.77h-.05V8.98H9.43V20h3.29v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.29l.14-6.32Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <rect
          height="15.5"
          rx="4.2"
          stroke="currentColor"
          strokeWidth="1.8"
          width="15.5"
          x="4.25"
          y="4.25"
        />
        <path
          d="M15.35 11.53a3.36 3.36 0 1 1-6.7.94 3.36 3.36 0 0 1 6.7-.94Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M16.95 7.55h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.04 8.5V6.98c0-.73.49-.9.84-.9h2.14V2.56L14.07 2.55c-3.28 0-4.02 2.45-4.02 4.02V8.5H7.46v3.62h2.59V21.5h3.99v-9.38h2.71l.36-3.62h-3.07Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.9 10.47 21.35 2h-1.77l-6.47 7.35L7.95 2H2l7.81 11.12L2 22h1.77l6.83-7.77L16.06 22H22l-8.1-11.53Zm-2.42 2.75-.79-1.1L4.4 3.3h2.7l5.08 7.12.79 1.1 6.61 9.27h-2.7l-5.4-7.57Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${contactDetails.email}`,
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="m5.25 7.25 6.75 5.5 6.75-5.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
];

function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-t border-white/10 bg-ink">
      <div className="pointer-events-none absolute inset-0 opacity-100">
        <DotField
          bulgeStrength={70}
          dotRadius={2.4}
          dotSpacing={13}
          glowColor="#13293b"
          glowRadius={210}
          gradientFrom="rgba(125, 211, 252, 0.62)"
          gradientTo="rgba(251, 191, 36, 0.48)"
          sparkle
          waveAmplitude={0.35}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(241,132,74,0.18),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(240,199,118,0.1),transparent_24%),linear-gradient(135deg,rgba(8,17,29,0.42)_0%,rgba(15,29,44,0.48)_55%,rgba(19,41,59,0.6)_100%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {aboutContent.name}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Software engineering undergraduate building full-stack products with practical
              systems thinking, clean interfaces, and a little motion where it feels right.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-200 hover:text-slate-950"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-7 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                className="text-sm font-semibold text-slate-300 transition hover:text-amber-200"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <a className="transition hover:text-amber-200" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
            <span>{contactDetails.location}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {aboutContent.name}. All rights reserved.</p>
          <p>
            Made by {aboutContent.name}. Motion inspired by React Bits and open-source UI ideas.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
