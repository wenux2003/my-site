import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./PillNav.css";

function PillNav({
  items,
  activeHref = "#home",
  className = "",
  ease = "power3.easeOut",
  baseColor = "#08111d",
  pillColor = "transparent",
  hoveredPillTextColor = "#f4efe3",
  pillTextColor = "#cfd7e6",
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const timelineRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) {
          return;
        }

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width, height } = rect;
        const radius = ((width * width) / 4 + height * height) / (2 * height);
        const diameter = Math.ceil(2 * radius) + 2;
        const delta =
          Math.ceil(radius - Math.sqrt(Math.max(0, radius * radius - (width * width) / 4))) + 1;
        const originY = diameter - delta;

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(".pill-label");
        const hoverLabel = pill.querySelector(".pill-label-hover");

        if (label) {
          gsap.set(label, { y: 0 });
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: height + 12, opacity: 0 });
        }

        timelineRefs.current[index]?.kill();
        const timeline = gsap.timeline({ paused: true });
        timeline.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease }, 0);

        if (label) {
          timeline.to(label, { y: -(height + 8), duration: 2, ease }, 0);
        }

        if (hoverLabel) {
          timeline.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease }, 0);
        }

        timelineRefs.current[index] = timeline;
      });
    };

    layout();
    window.addEventListener("resize", layout);

    return () => window.removeEventListener("resize", layout);
  }, [ease, items]);

  const handleEnter = (index) => {
    const timeline = timelineRefs.current[index];
    if (!timeline) {
      return;
    }

    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = timeline.tweenTo(timeline.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (index) => {
    const timeline = timelineRefs.current[index];
    if (!timeline) {
      return;
    }

    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = timeline.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const toggleMobileMenu = () => {
    const nextOpen = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextOpen);

    const menu = mobileMenuRef.current;
    const hamburger = hamburgerRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (nextOpen) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (!menu) {
      return;
    }

    if (nextOpen) {
      gsap.set(menu, { visibility: "visible" });
      gsap.fromTo(
        menu,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease, overwrite: "auto" },
      );
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease,
        overwrite: "auto",
        onComplete: () => gsap.set(menu, { visibility: "hidden" }),
      });
    }
  };

  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": pillTextColor,
  };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`.trim()} style={cssVars}>
        <div className="pill-nav-items desktop-only">
          <ul className="pill-list" role="menubar">
            {items.map((item, index) => (
              <li key={item.href} role="none">
                <a
                  className={`pill${activeHref === item.href ? " is-active" : ""}`}
                  href={item.href}
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave(index)}
                  role="menuitem"
                >
                  <span
                    aria-hidden="true"
                    className="hover-circle"
                    ref={(element) => {
                      circleRefs.current[index] = element;
                    }}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span aria-hidden="true" className="pill-label-hover">
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          aria-label="Toggle navigation"
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          ref={hamburgerRef}
          type="button"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item) => (
            <li key={item.href}>
              <a
                className={`mobile-menu-link${activeHref === item.href ? " is-active" : ""}`}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PillNav;
