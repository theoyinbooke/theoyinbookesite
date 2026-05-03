// Home.jsx - Single-screen personal directory

const SOLUTION_ICONS = {
  mylokai: { label: 'My', tone: 'warm', tilt: -7, spread: 0, tucked: 10 },
  orttaai: { label: 'or', tone: 'violet', tilt: 4, spread: 12, tucked: -2 },
  gopakd: { label: 'Go', tone: 'amber', tilt: -5, spread: 24, tucked: -14 },
  soundar: { label: 'sA', tone: 'blue', tilt: -4, spread: 36, tucked: -26 },
};

const SOCIAL_LINKS = [
  { label: 'YouTube', glyph: 'yt', href: 'https://youtube.com/@TheOyinbooke', tilt: -5, spread: 0, tucked: 8, tone: 'youtube' },
  { label: 'GitHub', glyph: 'gh', href: 'https://github.com/theoyinbooke', tilt: 4, spread: 12, tucked: -4, tone: 'github' },
  { label: 'LinkedIn', glyph: 'in', href: 'https://linkedin.com/in/theoyinbooke', tilt: -4, spread: 24, tucked: -16, tone: 'linkedin' },
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
          and make videos about building AI
          <a
            className="single-icon single-icon-youtube standalone-icon"
            href="https://youtube.com/@TheOyinbooke"
            target="_blank"
            rel="noopener"
            aria-label="TheOyinbooke on YouTube"
          >
            <span>yt</span>
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
      <span>{item.glyph}</span>
      <span className="icon-tooltip">{item.label}</span>
    </a>
  );
}

Object.assign(window, { Home });
