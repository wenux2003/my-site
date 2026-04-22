import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactDetails } from "../../data/siteContent";

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isConfigured =
    emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey;
  const isSending = status === "sending";
  const isSuccess = status === "success";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!isConfigured) {
      setStatus("error");
      setErrorMessage("EmailJS is not configured yet. Add your VITE_EMAILJS keys to .env.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey,
      );
      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please email me directly instead.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section className="pb-16 pt-10" id="contact">
      <div className="surface-panel mx-auto max-w-5xl rounded-[1.5rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,1fr)] lg:items-start">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
              Currently open for internship opportunities, freelance projects, and software
              engineering collaborations. Send me a message and I&apos;ll get back to you within 24
              hours.
            </p>

            <div className="mt-7 space-y-4 text-sm font-semibold text-slate-300">
              <a
                className="flex items-center gap-3 transition hover:text-amber-200"
                href={`mailto:${contactDetails.email}`}
              >
                <svg aria-hidden="true" className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none">
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
                {contactDetails.email}
              </a>

              <p className="flex items-center gap-3">
                <svg aria-hidden="true" className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19.25 10.25c0 5.25-7.25 10-7.25 10s-7.25-4.75-7.25-10a7.25 7.25 0 0 1 14.5 0Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 12.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
                {contactDetails.location}
              </p>
            </div>
          </div>

          {isSuccess ? (
            <div className="rounded-[1.25rem] border border-emerald-300/20 bg-emerald-300/8 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200/25 bg-emerald-300/10 text-emerald-200">
                <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m5 12 4 4L19 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                Thank you for reaching out.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Your message has been sent successfully. I&apos;ll review it and reply to your email
                as soon as possible.
              </p>
              <button
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 text-sm font-semibold text-white transition hover:border-amber-200/35 hover:bg-amber-200 hover:text-slate-950"
                onClick={resetForm}
                type="button"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={handleSubmit} ref={formRef}>
              <input name="to_email" type="hidden" value={contactDetails.email} />

              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Name
                <input
                  className="min-h-12 appearance-none rounded-none border border-white/10 bg-slate-950/25 px-4 text-sm font-medium normal-case tracking-normal text-white caret-amber-200 outline-none transition placeholder:text-slate-500 focus:border-amber-200/45 focus:bg-slate-950/35 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSending}
                  name="from_name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </label>

              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Email
                <input
                  className="min-h-12 appearance-none rounded-none border border-white/10 bg-slate-950/25 px-4 text-sm font-medium normal-case tracking-normal text-white caret-amber-200 outline-none transition placeholder:text-slate-500 focus:border-amber-200/45 focus:bg-slate-950/35 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSending}
                  name="reply_to"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </label>

              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Message
                <textarea
                  className="min-h-28 resize-y appearance-none rounded-none border border-white/10 bg-slate-950/25 px-4 py-3 text-sm font-medium normal-case tracking-normal text-white caret-amber-200 outline-none transition placeholder:text-slate-500 focus:border-amber-200/45 focus:bg-slate-950/35 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSending}
                  name="message"
                  placeholder="How can we work together?"
                  required
                />
              </label>

              {status === "error" && (
                <p className="rounded-xl border border-red-300/20 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-100">
                  {errorMessage}
                </p>
              )}

              <button
                className="mt-2 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-amber-200/35 hover:bg-amber-200 hover:text-slate-950 disabled:cursor-wait disabled:translate-y-0 disabled:opacity-70"
                disabled={isSending}
                type="submit"
              >
                {isSending ? "Sending..." : "Send Message"}
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h13m0 0-5-5m5 5-5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
