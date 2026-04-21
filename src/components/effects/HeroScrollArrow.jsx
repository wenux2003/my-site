import arrowAnimation from "../../media/Animation - 1747560244712.json";

function HeroScrollArrow() {
  const duration = `${Math.max(1.8, arrowAnimation.op / arrowAnimation.fr)}s`;

  return (
    <a
      aria-label="Scroll to about section"
      className="hero-scroll-arrow group absolute bottom-6 left-1/2 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-200/20 bg-[#07111d]/45 text-amber-200 shadow-2xl shadow-cyan-950/30 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-200/45 hover:text-cyan-100"
      href="#about"
      style={{ "--arrow-duration": duration }}
    >
      <svg
        aria-hidden="true"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 120 120"
      >
        <path
          className="hero-scroll-arrow-line hero-scroll-arrow-line-first"
          d="M24 38 L60 72 L96 38"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
        />
        <path
          className="hero-scroll-arrow-line hero-scroll-arrow-line-second"
          d="M24 58 L60 92 L96 58"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
        />
      </svg>
    </a>
  );
}

export default HeroScrollArrow;
