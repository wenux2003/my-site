import { aboutContent, contactDetails } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

function ContactSection() {
  return (
    <section className="py-10" id="contact">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={`Get in touch with ${aboutContent.name}`}
            description="Open to opportunities, collaborations, and project discussions related to software engineering, full-stack development, and product-building work."
          />
        </div>

        <div className="surface-panel rounded-[1.9rem] p-6">
          <div className="space-y-4">
            <a
              className="block text-lg font-semibold text-white transition hover:text-amber-200"
              href={`mailto:${contactDetails.email}`}
            >
              {contactDetails.email}
            </a>
            <a
              className="block text-lg font-semibold text-white transition hover:text-amber-200"
              href={`tel:${contactDetails.phoneHref}`}
            >
              {contactDetails.phoneLabel}
            </a>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              {contactDetails.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
