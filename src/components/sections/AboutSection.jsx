import { useState } from "react";
import { aboutContent } from "../../data/siteContent";

function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-12" id="about">
      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
        <div className="surface-panel rounded-[2rem] p-4">
          {!imageError ? (
            <img
              alt="Wenura Kavida portrait"
              className="h-[360px] w-full rounded-[1.5rem] object-cover"
              onError={() => setImageError(true)}
              src="/profile-photo.jpg"
            />
          ) : (
            <div className="flex h-[360px] w-full items-center justify-center rounded-[1.5rem] bg-[radial-gradient(circle_at_top,#f59e0b33,transparent_40%),linear-gradient(160deg,#111c2a,#1a3045)]">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/10 font-display text-3xl font-semibold text-amber-100">
                  WK
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-300">
                  Add `public/profile-photo.jpg`
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="surface-panel rounded-[2rem] p-7 sm:p-8">
          <p className="section-kicker">{`About ${aboutContent.name}`}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {`${aboutContent.role} focused on full-stack web development.`}
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
            {aboutContent.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
