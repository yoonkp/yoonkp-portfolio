import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteMeta } from "../../content/siteMeta";

const sectionLinks = [
  { label: "Now", hash: "#now" },
  { label: "Case Studies", hash: "#cases" },
  { label: "Experience", hash: "#experience" },
  { label: "Contact", hash: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);
  const homeLink = (hash: string) => ({ pathname: "/", hash });

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">{siteMeta.brand}</span>
          <span className="brand-copy">
            <strong>{siteMeta.name}</strong>
            <span>{siteMeta.title}</span>
          </span>
        </Link>

        <button className="menu-toggle" type="button" aria-label="메뉴 열기" aria-expanded={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? "닫기" : "메뉴"}
        </button>

        <div className={`site-header__panel${menuOpen ? " is-open" : ""}`}>
          <nav className="site-nav" aria-label="Primary">
            {sectionLinks.map((item) => (
              <Link key={item.hash} className={`site-nav__link${location.hash === item.hash ? " is-active" : ""}`} to={homeLink(item.hash)} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="nav-button nav-button--ghost" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="nav-button nav-button--primary" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer">
              이력서
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
