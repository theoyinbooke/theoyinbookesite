// Home.jsx - Single-screen personal directory

const SOLUTION_ICONS = {
  mylokai: { label: 'My', tone: 'warm', tilt: -7, spread: 0, tucked: 10 },
  orttaai: { label: 'or', tone: 'violet', tilt: 4, spread: 12, tucked: -2 },
  meetumo: { label: 'Me', tone: 'cyan', tilt: -3, spread: 24, tucked: -14 },
  wegosign: { label: 'WS', tone: 'sage', tilt: 5, spread: 36, tucked: -26 },
  pewpad: { label: 'PP', tone: 'paper', tilt: -6, spread: 48, tucked: -38 },
  gopakd: { label: 'Go', tone: 'amber', tilt: -5, spread: 60, tucked: -50 },
  soundar: { label: 'sA', tone: 'blue', tilt: -4, spread: 72, tucked: -62 },
};

const SOCIAL_LINKS = [
  { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com/@TheOyinbooke', tilt: -5, spread: 0, tucked: 8, tone: 'youtube' },
  { label: 'X', icon: 'x', href: 'https://x.com/theoyinbooke', tilt: -2, spread: 12, tucked: -4, tone: 'x' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/theoyinbooke', tilt: 4, spread: 24, tucked: -16, tone: 'github' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/theoyinbooke', tilt: -4, spread: 36, tucked: -28, tone: 'linkedin' },
];

function Home() {
  const { navigate } = useRoute();
  const solutionSlugs = Object.keys(PROJECTS);

  const openProject = (event, slug) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate('work', slug);
  };

  return (
    <main className="single-home" aria-label="Olanrewaju Oyinbooke home">
      <div className="home-theme-toggle">
        <ThemeToggle />
      </div>

      <section className="single-card">
        <p className="single-line intro-line">
          Hi, my name is Olanrewaju Oyinbooke
          <span className="avatar-chip" aria-hidden="true">OO</span>
        </p>

        <p className="single-line">
          I build AI products
          <IconCluster label="Solutions">
            {solutionSlugs.map((slug) => (
              <SolutionIcon
                key={slug}
                slug={slug}
                project={PROJECTS[slug]}
                meta={SOLUTION_ICONS[slug]}
                onOpen={openProject}
              />
            ))}
          </IconCluster>
        </p>

        <p className="single-line">
          and make videos about building with AI
          <a
            className="single-icon single-icon-youtube standalone-icon"
            href="https://youtube.com/@TheOyinbooke"
            target="_blank"
            rel="noopener"
            aria-label="TheOyinbooke on YouTube"
          >
            <BrandIcon name="youtube" />
            <span className="icon-tooltip">@TheOyinbooke</span>
          </a>
        </p>

        <p className="single-line connect-line">
          I also ship in public
          <IconCluster label="Social links">
            {SOCIAL_LINKS.map((item) => (
              <SocialIcon key={item.label} item={item} />
            ))}
          </IconCluster>
        </p>

        <div className="single-footer-line" aria-label="Primary links">
          <a href="#work" onClick={(event) => { event.preventDefault(); navigate('work'); }}>All work</a>
          <a href="#writing" onClick={(event) => { event.preventDefault(); navigate('writing'); }}>Writing</a>
          <a href="#speaking" onClick={(event) => { event.preventDefault(); navigate('speaking'); }}>Speaking</a>
        </div>
      </section>
    </main>
  );
}

function IconCluster({ label, children }) {
  return (
    <span className="icon-cluster" role="group" aria-label={label}>
      {children}
    </span>
  );
}

function SolutionIcon({ slug, project, meta, onOpen }) {
  const fallback = {
    label: project.title.slice(0, 2),
    tone: 'warm',
    tilt: 0,
    spread: 0,
    tucked: 0,
  };
  const icon = { ...fallback, ...meta };

  return (
    <a
      className={`single-icon solution-icon tone-${icon.tone}`}
      href={`#work/${slug}`}
      onClick={(event) => onOpen(event, slug)}
      aria-label={`Open ${project.title}`}
      style={{
        '--tilt': `${icon.tilt}deg`,
        '--spread': `${icon.spread}px`,
        '--tucked': `${icon.tucked}px`,
        '--icon-accent': project.color,
      }}
    >
      <span>{icon.label}</span>
      <span className="icon-tooltip">{project.title}</span>
    </a>
  );
}

function SocialIcon({ item }) {
  return (
    <a
      className={`single-icon social-icon tone-${item.tone}`}
      href={item.href}
      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
      rel={item.href.startsWith('mailto:') ? undefined : 'noopener'}
      aria-label={item.label}
      style={{
        '--tilt': `${item.tilt}deg`,
        '--spread': `${item.spread}px`,
        '--tucked': `${item.tucked}px`,
      }}
    >
      <BrandIcon name={item.icon} />
      <span className="icon-tooltip">{item.label}</span>
    </a>
  );
}

function BrandIcon({ name }) {
  const common = {
    className: 'brand-icon',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    focusable: 'false',
  };

  switch (name) {
    case 'youtube':
      return (
        <svg {...common}>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
        </svg>
      );
    case 'x':
      return (
        <svg {...common}>
          <path d="M18.2 2h3.3l-7.2 8.2L22.8 22h-6.6L11 15.2 5 22H1.7l7.7-8.8L1.2 2h6.8l4.7 6.2L18.2 2Zm-1.1 17.9h1.8L7 4H5.1l12 15.9Z" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common}>
          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.2 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.4V9H7v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8Z" />
        </svg>
      );
    default:
      return null;
  }
}

Object.assign(window, { Home });
