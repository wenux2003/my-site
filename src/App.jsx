const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive, high-performance websites built with clean structure and modern UI patterns.",
  },
  {
    title: "Portfolio & Business Sites",
    description:
      "Professional pages that present your brand clearly and make a strong first impression.",
  },
  {
    title: "UI Refresh & Redesign",
    description:
      "Transform outdated layouts into polished digital experiences that feel current and credible.",
  },
];

const highlights = [
  { value: "15+", label: "Landing pages and concept builds" },
  { value: "100%", label: "Mobile-friendly layouts" },
  { value: "24/7", label: "Freelance availability mindset" },
];

const projects = [
  {
    name: "LaunchPad Studio",
    type: "Agency Website",
    summary:
      "A premium marketing site focused on bold typography, service storytelling, and conversion-friendly structure.",
  },
  {
    name: "Nova Fitness",
    type: "Brand Portfolio",
    summary:
      "A sharp, energetic showcase for a fitness coach with offer sections, testimonials, and booking direction.",
  },
  {
    name: "Crafted Spaces",
    type: "Interior Design Showcase",
    summary:
      "A visual-first portfolio with immersive cards, strong spacing, and project-led presentation.",
  },
];

const process = [
  "Discover goals, audience, and visual direction.",
  "Design a clear structure with strong hierarchy and modern styling.",
  "Build a responsive frontend that feels smooth on desktop and mobile.",
  "Refine content and presentation so the final site looks confident and professional.",
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">WM</span>
          <span>Web-Max</span>
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer / UI-Focused Builder</p>
            <h1>Professional websites that look sharp, modern, and ready for real clients.</h1>
            <p className="hero-text">
              I design and build polished portfolio and business websites with a clean visual
              identity, strong responsiveness, and a presentation style that feels premium.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let&apos;s Work Together
              </a>
              <a className="button button-secondary" href="#projects">
                View My Style
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-label">Quick Snapshot</p>
            <div className="stat-grid">
              {highlights.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>What I can build for you</h2>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="info-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-accent" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected Work Style</p>
            <h2>Portfolio directions that feel premium</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>How I approach each build</h2>
          </div>
          <div className="process-list">
            {process.map((step, index) => (
              <article className="process-card" key={step}>
                <span>{`0${index + 1}`}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Ready for a portfolio or business website that feels more serious?</h2>
            <p>
              If you want a cleaner online presence with a stronger first impression, I&apos;m
              available for freelance frontend and redesign work.
            </p>
          </div>
          <div className="contact-card">
            <a href="mailto:wenurarcc@gmail.com">wenurarcc@gmail.com</a>
            <a href="tel:+94763937006">076-3937006</a>
            <p>Sri Lanka / Remote friendly</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
