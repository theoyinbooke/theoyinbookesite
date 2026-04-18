// Layout.jsx — Nav, Footer, Page wrapper, Route context

const { useState, useEffect, useCallback, createContext, useContext, useRef } = React;

const RouteContext = createContext({ page: 'home', navigate: () => {}, projectSlug: null });
const useRoute = () => useContext(RouteContext);

function RouteProvider({ children }) {
  const getRoute = () => {
    const hash = window.location.hash.slice(1) || 'home';
    const parts = hash.split('/');
    return { page: parts[0] || 'home', projectSlug: parts[1] || null };
  };

  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handler = () => setRoute(getRoute());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = useCallback((page, slug) => {
    window.location.hash = slug ? `${page}/${slug}` : page;
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <RouteContext.Provider value={{ ...route, navigate }}>
      {children}
    </RouteContext.Provider>
  );
}

// ─── Nav ────────────────────────────────────
function Nav() {
  const { page, navigate } = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [page]);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'writing', label: 'Writing' },
    { id: 'foundation', label: 'Foundation' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav className="nav" data-scrolled={scrolled} data-menu-open={menuOpen}>
      <div className="nav-inner container">
        <button className="nav-logo" onClick={() => navigate('home')} aria-label="Home">
          <span className="nav-logo-mark">O</span>
          <span className="nav-logo-text">Oyinbooke</span>
        </button>

        <div className="nav-links">
          {links.map(l => (
            <button
              key={l.id}
              className={`nav-link ${page === l.id ? 'active' : ''}`}
              onClick={() => navigate(l.id)}
            >
              {l.label}
              {page === l.id && <span className="nav-link-dot" />}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu">
        {links.map((l, i) => (
          <button
            key={l.id}
            className={`mobile-menu-link ${page === l.id ? 'active' : ''}`}
            onClick={() => navigate(l.id)}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="mono" style={{ color: 'var(--text-secondary)', marginRight: 12 }}>0{i + 1}</span>
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── Theme Toggle ───────────────────────────
function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('oo-theme');
    return saved !== 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('oo-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );
}

// ─── Footer ─────────────────────────────────
function Footer() {
  const { navigate } = useRoute();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="display-md" style={{ marginBottom: '0.5rem' }}>Keep building.</p>
            <p className="body-lg">— TheOyinbooke</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <span className="mono" style={{ color: 'var(--text-secondary)', marginBottom: 12, display: 'block' }}>Navigate</span>
              {['home','work','writing','foundation','about'].map(p => (
                <button key={p} className="footer-link" onClick={() => navigate(p)}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
            <div className="footer-col">
              <span className="mono" style={{ color: 'var(--text-secondary)', marginBottom: 12, display: 'block' }}>Connect</span>
              <a className="footer-link" href="https://youtube.com/@TheOyinbooke" target="_blank" rel="noopener">YouTube</a>
              <a className="footer-link" href="https://github.com/theoyinbooke" target="_blank" rel="noopener">GitHub</a>
              <a className="footer-link" href="https://linkedin.com/in/theoyinbooke" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="divider" style={{ margin: '2rem 0' }} />
        <div className="footer-bottom">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>© {year} Olanrewaju Oyinbooke</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontFamily: 'var(--mono)' }}>Built with intention</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Transition Wrapper ────────────────
function PageTransition({ children, pageKey }) {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(children);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setContent(children);
      setVisible(true);
    }, 300);
    return () => clearTimeout(t);
  }, [pageKey]);

  return (
    <div className="page-transition" data-visible={visible}>
      {content}
    </div>
  );
}

// ─── Scroll reveal hook ─────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: force reveal after 800ms in case observer doesn't fire
    const fallback = setTimeout(() => setRevealed(true), 800);

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
          clearTimeout(fallback);
        }
      },
      { threshold, rootMargin: '50px' }
    );
    obs.observe(el);

    // Also check immediately if already in view
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setRevealed(true);
      obs.disconnect();
      clearTimeout(fallback);
    }

    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);

  return [ref, revealed];
}

// ─── Reveal wrapper ─────────────────────────
function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const [ref, revealed] = useReveal(0.1);

  const transforms = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
    none: 'none',
  };

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'none' : transforms[direction],
        transition: `opacity 0.8s var(--ease-out) ${delay}s, transform 0.8s var(--ease-out) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Staggered text reveal ──────────────────
function TextReveal({ text, className = '', as: Tag = 'h1', delay = 0 }) {
  const [ref, revealed] = useReveal(0.1);
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} style={{ overflow: 'hidden' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
          <span style={{
            display: 'inline-block',
            transform: revealed ? 'translateY(0)' : 'translateY(110%)',
            transition: `transform 0.7s var(--ease-out) ${delay + i * 0.06}s`,
          }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

// Export
Object.assign(window, {
  RouteProvider, useRoute, Nav, Footer, PageTransition, ThemeToggle,
  useReveal, Reveal, TextReveal, RouteContext
});
