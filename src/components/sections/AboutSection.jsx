import { aboutContent } from "../../data/siteContent";
import TiltedCard from "../effects/TiltedCard";
import profileImage from "../../media/profile_img.jpeg";

function AboutSection() {
  return (
    <section className="py-12" id="about">
      <div className="grid items-stretch gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="surface-panel min-h-[460px] rounded-[2rem] p-4">
          <TiltedCard
            imageSrc={profileImage}
            altText="Wenura Kavinda portrait"
            captionText="Wenura Kavinda"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.04}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="m-4 rounded-full border border-white/10 bg-black/35 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md">
                Wenura Kavinda
              </p>
            }
          />
        </div>

        <div className="surface-panel rounded-[2rem] p-7 sm:p-8">
          <p className="section-kicker">{`About ${aboutContent.name}`}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            I build tools that solve real problems, then make them feel simple.
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
