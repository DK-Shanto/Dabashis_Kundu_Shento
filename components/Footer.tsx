const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-line/30 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="font-heading font-bold text-xl text-slate-100 hover:text-accent transition-colors"
            >
              DKS<span className="text-accent">.</span>
            </a>
            <p className="text-slate-600 text-xs mt-1">
              Shopify · Wix · WordPress Developer
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-slate-600 text-xs text-center md:text-right">
            © {year} Dabashis Kundu Shento.
            <br className="md:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
