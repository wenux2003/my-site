import PillNav from "../effects/PillNav";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="relative z-50">
      <div className="mx-auto flex w-full justify-center px-4 sm:px-6 lg:px-8">
        <PillNav
          activeHref="#home"
          baseColor="#09131f"
          hoveredPillTextColor="#f8f1e4"
          items={navItems}
          pillColor="transparent"
          pillTextColor="#d8dfec"
        />
      </div>
    </header>
  );
}

export default Header;
