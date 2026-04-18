// Home.jsx — Homepage with animated hero + featured projects

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <PhilosophySection />
      <NowSection />
    </main>
  );
}

// ─── Hero ───────────────────────────────────
function HeroSection() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-label mono" style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s var(--ease-out) 0.2s',
          }}>
            <span className="hero-label-dot" />
            AI &amp; Automation Leader
          </div>

          <TextReveal
            text="Olanrewaju Oyinbooke"
            className="display-xl hero-name"
            delay={0.3}
          />

          <p className="body-lg hero-subtitle" style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s var(--ease-out) 0.9s',
            maxWidth: 600,
          }}>
            Building AI-first products and making them accessible to the next generation of African talent.
          </p>

          <div className="hero-ctas" style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s var(--ease-out) 1.2s',
          }}>
            <button className="btn-primary" onClick={() => window.location.hash = 'work'}>
              Explore Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-secondary" onClick={() => window.location.hash = 'about'}>
              About Me
            </button>
          </div>
        </div>

        <div className="hero-visual" style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(0.9)',
          transition: 'all 1s var(--ease-out) 0.6s',
        }}>
          <HeroVisual />
        </div>
      </div>

      <div className="hero-scroll-indicator" style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1s var(--ease-out) 1.8s',
      }}>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

// ─── Hero visual — abstract grid ────────────
function HeroVisual() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 400;
    canvas.width = size * 2;
    canvas.height = size * 2;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';

    let frame;
    let t = 0;

    function draw() {
      t += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = 8;
      const cellSize = canvas.width / cols;

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < cols; y++) {
          const cx = x * cellSize + cellSize / 2;
          const cy = y * cellSize + cellSize / 2;
          const dist = Math.sqrt((x - cols/2) ** 2 + (y - cols/2) ** 2);
          const wave = Math.sin(dist * 0.8 - t * 2) * 0.5 + 0.5;
          const scale = 0.15 + wave * 0.6;
          const r = cellSize * scale * 0.45;

          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          const hue = 40 + dist * 8;
          const lightness = isDark ? 0.55 + wave * 0.15 : 0.45 + wave * 0.15;

          ctx.beginPath();
          if ((x + y) % 3 === 0) {
            // Circle
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
          } else if ((x + y) % 3 === 1) {
            // Rounded square
            const s = r * 1.6;
            const rr = s * 0.25;
            ctx.roundRect(cx - s/2, cy - s/2, s, s, rr);
          } else {
            // Diamond
            const s = r * 1.3;
            ctx.moveTo(cx, cy - s);
            ctx.lineTo(cx + s, cy);
            ctx.lineTo(cx, cy + s);
            ctx.lineTo(cx - s, cy);
            ctx.closePath();
          }

          ctx.fillStyle = `oklch(${lightness} ${0.08 + wave * 0.08} ${hue})`;
          ctx.globalAlpha = 0.5 + wave * 0.5;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

// ─── Featured Projects ──────────────────────
function FeaturedProjects() {
  const { navigate } = useRoute();

  return (
    <section className="section featured-section">
      <div className="container">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="display-md">Featured Work</h2>
            <button className="link-arrow" onClick={() => navigate('work')}>
              View all projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </Reveal>

        <div className="featured-grid">
          {FEATURED_PROJECTS.map((slug, i) => {
            const p = PROJECTS[slug];
            return (
              <Reveal key={slug} delay={i * 0.12}>
                <button
                  className="project-card featured-card"
                  onClick={() => navigate('work', slug)}
                  style={{ '--card-accent': p.color }}
                >
                  <div className="project-card-image">
                    <ProjectPlaceholder project={p} large />
                  </div>
                  <div className="project-card-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span className="status-badge" data-status={p.status.toLowerCase().replace(' ', '-')}>{p.status}</span>
                      <span className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{p.platform}</span>
                    </div>
                    <h3 className="display-md" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', marginBottom: 6 }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{p.tagline}</p>
                    <div className="project-card-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
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
        delay: i * 0.15,
      });
    }
    return arr;
  }, [project.title]);

  return (
    <div className="project-placeholder" style={{ '--ph-color': project.color }}>
      <svg viewBox="0 0 100 80" className="placeholder-svg">
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

// ─── Philosophy ─────────────────────────────
function PhilosophySection() {
  const items = [
    { number: '01', title: 'Local-First', text: 'AI belongs on your device. Privacy isn\'t a feature — it\'s the foundation.' },
    { number: '02', title: 'Build to Teach', text: 'Every product I ship is also an argument that you can build one too.' },
    { number: '03', title: 'Accessible by Default', text: 'If it doesn\'t work on modest hardware in Lagos, it doesn\'t work.' },
  ];

  return (
    <section className="section philosophy-section">
      <div className="container">
        <Reveal>
          <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Philosophy</span>
          <h2 className="display-md" style={{ marginBottom: '3rem', maxWidth: 500 }}>How I think about building</h2>
        </Reveal>
        <div className="philosophy-grid">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="philosophy-card">
                <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>{item.number}</span>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 600, margin: '0.75rem 0 0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Now Section ────────────────────────────
function NowSection() {
  const { navigate } = useRoute();

  return (
    <section className="section now-section">
      <div className="container">
        <Reveal>
          <div className="now-card">
            <span className="mono" style={{ color: 'var(--sage)' }}>Currently</span>
            <h2 className="display-md" style={{ margin: '1rem 0' }}>What I'm working on now</h2>
            <p className="body-lg" style={{ maxWidth: 650, marginBottom: '1.5rem' }}>
              Leading Operational Automation and AI at Prime Eight Consulting. Shipping GoPakd.
              Relaunching my YouTube channel with "Learn AI in 2026" — a series designed to help
              one million people get hands-on with AI.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('work')}>See all projects</button>
              <button className="btn-secondary" onClick={() => navigate('writing')}>Read my writing</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Home, ProjectPlaceholder });
