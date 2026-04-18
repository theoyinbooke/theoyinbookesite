// Foundation.jsx — Foundation page

function Foundation() {
  return (
    <main>
      <section className="section foundation-hero">
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--sage)', display: 'block', marginBottom: '1rem' }}>TheOyinbooke Foundation</span>
            <h1 className="display-lg" style={{ marginBottom: '1rem', maxWidth: 700 }}>
              Holistic development for young people in Nigeria
            </h1>
            <p className="body-lg" style={{ maxWidth: 620, marginBottom: '2rem' }}>
              No single session will change a life, but 16 sessions, a mentor, a cohort,
              and a community just might.
            </p>
            <a href="https://theoyinbookefoundation.com" target="_blank" rel="noopener" className="btn-primary">
              Visit Foundation Site
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>The Program</span>
            <h2 className="display-md" style={{ marginBottom: '2.5rem' }}>Four pillars of development</h2>
          </Reveal>

          <div className="pillars-grid">
            {[
              { icon: '◇', title: 'Spiritual Development', desc: 'Grounding in faith and purpose. A foundation that holds when everything else shifts.' },
              { icon: '△', title: 'Financial & Career', desc: 'Practical skills for building a livelihood. Budgeting, career planning, professional development.' },
              { icon: '○', title: 'Emotional Development', desc: 'Self-awareness, resilience, and the emotional intelligence to navigate life\'s complexity.' },
              { icon: '□', title: 'Discipleship & Leadership', desc: 'Learning to lead by learning to serve. Mentorship that compounds over a lifetime.' },
            ].map((pillar, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="pillar-card">
                  <span style={{ fontSize: '2rem', color: 'var(--sage)', display: 'block', marginBottom: '1rem', fontWeight: 300 }}>{pillar.icon}</span>
                  <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{pillar.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Structure</span>
            <h2 className="display-md" style={{ marginBottom: '2.5rem' }}>How the program works</h2>
          </Reveal>

          <div className="structure-grid">
            {[
              { num: '16', label: 'Sessions', detail: 'April through October each year' },
              { num: '4', label: 'Pillars', detail: 'Holistic development framework' },
              { num: '1:1', label: 'Mentorship', detail: 'Every beneficiary paired with a mentor' },
              { num: '∞', label: 'Community', detail: 'A cohort becomes a lifelong network' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="structure-card">
                  <span className="display-lg" style={{ color: 'var(--sage)', lineHeight: 1 }}>{stat.num}</span>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 600, margin: '0.5rem 0 0.25rem' }}>{stat.label}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Why this exists</h2>
              <p className="body-lg" style={{ marginBottom: '1rem' }}>
                I am not an island of knowledge. If someone somewhere wasn't passionate about
                sharing what they knew, my career wouldn't be where it is today.
              </p>
              <p className="body-lg">
                The ripple effect of knowledge shared freely goes further than you think.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Foundation });
