// Work.jsx — Work page (project grid) + Project Detail page

function Work() {
  const [filter, setFilter] = React.useState('all');

  const cats = ['all', 'shipped', 'building'];
  const filtered = Object.entries(PROJECTS).filter(([_, p]) => filter === 'all' || p.category === filter);

  return (
    <main className="section">
      <div className="container">
        <Reveal>
          <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Work</span>
          <h1 className="display-lg" style={{ marginBottom: '0.5rem' }}>Things I've built</h1>
          <p className="body-lg" style={{ maxWidth: 550, marginBottom: '2.5rem' }}>
            Products, platforms, and tools — all rooted in the belief that AI belongs in everyone's hands.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="filter-bar">
            {cats.map(c => (
              <button
                key={c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c === 'all' ? 'All' : CATEGORIES[c]?.label || c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="work-grid">
          {filtered.map(([slug, p], i) => (
            <WorkCard key={slug} slug={slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}

function WorkCard({ slug, project, index }) {
  const { navigate } = useRoute();

  return (
    <Reveal delay={index * 0.06}>
      <button
        className="project-card work-card"
        onClick={() => navigate('work', slug)}
        style={{ '--card-accent': project.color }}
      >
        <div className="work-card-image">
          <ProjectPlaceholder project={project} />
        </div>
        <div className="work-card-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span className="status-badge" data-status={project.status.toLowerCase().replace(' ', '-')}>{project.status}</span>
            <span className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.7rem' }}>{project.year}</span>
          </div>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 4 }}>{project.title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{project.tagline}</p>
        </div>
        <div className="project-card-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </div>
      </button>
    </Reveal>
  );
}

// ─── Project placeholder visual ─────────────
function ProjectPlaceholder({ project, large }) {
  const shapes = React.useMemo(() => {
    const seed = project.title.length;
    const arr = [];
    const count = large ? 5 : 3;
    for (let i = 0; i < count; i++) {
      arr.push({
        x: 15 + ((seed * (i + 1) * 37) % 70),
        y: 15 + ((seed * (i + 1) * 53) % 60),
        size: 20 + ((seed * (i + 2) * 17) % 40),
        type: i % 3,
      });
    }
    return arr;
  }, [project.title, large]);

  return (
    <div className="project-placeholder" style={{ '--ph-color': project.color }}>
      <svg viewBox="0 0 100 80" className="placeholder-svg" aria-hidden="true">
        {shapes.map((s, i) => {
          if (s.type === 0) return <circle key={i} cx={s.x} cy={s.y} r={s.size / 3} fill={project.color} opacity="0.3" />;
          if (s.type === 1) return <rect key={i} x={s.x} y={s.y} width={s.size} height={s.size * 0.6} rx="3" fill={project.color} opacity="0.2" />;
          return <rect key={i} x={s.x} y={s.y} width={s.size * 0.8} height={s.size * 0.8} rx="50" fill={project.color} opacity="0.15" />;
        })}
      </svg>
      <span className="placeholder-label mono">{project.platform}</span>
    </div>
  );
}

// ─── Project Detail ─────────────────────────
function ProjectDetail({ slug }) {
  const { navigate } = useRoute();
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <main className="section">
        <div className="container" style={{ textAlign: 'center', padding: '8rem 0' }}>
          <h1 className="display-md">Project not found</h1>
          <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => navigate('work')}>Back to Work</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <Reveal>
            <button className="back-link" onClick={() => navigate('work')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All Projects
            </button>
          </Reveal>

          <div className="detail-header">
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span className="status-badge" data-status={project.status.toLowerCase().replace(' ', '-')}>{project.status}</span>
                <span className="mono" style={{ color: 'var(--text-secondary)' }}>{project.platform}</span>
                <span className="mono" style={{ color: 'var(--text-secondary)' }}>{project.year}</span>
              </div>
            </Reveal>
            <TextReveal text={project.title} className="display-xl" style={{ marginBottom: '1rem' }} delay={0.1} />
            <Reveal delay={0.3}>
              <p className="body-lg" style={{ maxWidth: 650 }}>{project.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hero image area */}
      <section style={{ padding: '0 var(--page-pad)', marginBottom: 'clamp(3rem, 6vh, 5rem)' }}>
        <Reveal>
          <div className="detail-hero-image" style={{ '--card-accent': project.color }}>
            <ProjectPlaceholder project={project} large />
            <div className="detail-hero-overlay">
              <span className="mono" style={{ color: 'white', opacity: 0.7 }}>Product screenshot placeholder</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Story + Details grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="detail-grid">
            <div className="detail-main">
              <Reveal>
                <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>The Story</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>{project.story}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.3rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>Key Features</h3>
                <ul className="feature-list">
                  {project.features.map((f, i) => (
                    <li key={i} className="feature-item">
                      <span className="feature-bullet" style={{ background: project.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="detail-sidebar">
              <Reveal delay={0.15}>
                <div className="sidebar-section">
                  <span className="mono" style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: 10 }}>Tech Stack</span>
                  <div className="tech-tags">
                    {project.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>

                {Object.keys(project.links).length > 0 && (
                  <div className="sidebar-section">
                    <span className="mono" style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: 10 }}>Links</span>
                    {Object.entries(project.links).map(([type, url]) => (
                      <a key={type} href={url} target="_blank" rel="noopener" className="sidebar-link">
                        {type === 'appstore' ? 'App Store' : type === 'github' ? 'GitHub' : type === 'website' ? 'Website' : type === 'testflight' ? 'TestFlight' : type}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                      </a>
                    ))}
                  </div>
                )}

                <div className="sidebar-section">
                  <span className="mono" style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: 10 }}>Category</span>
                  <p>{CATEGORIES[project.category]?.label}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <NextProject currentSlug={slug} />
    </main>
  );
}

function NextProject({ currentSlug }) {
  const { navigate } = useRoute();
  const slugs = Object.keys(PROJECTS);
  const currentIdx = slugs.indexOf(currentSlug);
  const nextSlug = slugs[(currentIdx + 1) % slugs.length];
  const next = PROJECTS[nextSlug];

  return (
    <section className="next-project-section">
      <div className="container">
        <Reveal>
          <button className="next-project-card" onClick={() => navigate('work', nextSlug)}>
            <span className="mono" style={{ color: 'var(--text-secondary)' }}>Next Project</span>
            <h3 className="display-md" style={{ margin: '0.5rem 0 0.25rem' }}>{next.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{next.tagline}</p>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Work, ProjectDetail, ProjectPlaceholder });
