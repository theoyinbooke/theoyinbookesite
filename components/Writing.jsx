// Writing.jsx — Writing & Speaking page

function Writing() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Writing & Speaking</span>
            <h1 className="display-lg" style={{ marginBottom: '0.5rem' }}>Ideas worth sharing</h1>
            <p className="body-lg" style={{ maxWidth: 580, marginBottom: '3rem' }}>
              I write about AI, automation, local-first tooling, and the craft of learning.
              I speak about making AI accessible — especially in Africa.
            </p>
          </Reveal>

          {/* Featured article */}
          <Reveal delay={0.1}>
            <div className="featured-article">
              <div className="featured-article-badge">
                <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>Latest</span>
              </div>
              <h2 className="display-md" style={{ marginBottom: '0.75rem' }}>Run it.</h2>
              <p className="body-lg" style={{ maxWidth: 550, marginBottom: '1.5rem' }}>
                Your first local AI model is 5 minutes away. The only thing between you and it
                is the decision to open a terminal.
              </p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="tech-tag">Ollama</span>
                <span className="tech-tag">Local LLMs</span>
                <span className="tech-tag">Getting Started</span>
              </div>
            </div>
          </Reveal>

          {/* Newsletter */}
          <Reveal delay={0.15}>
            <div style={{ margin: '3rem 0' }}>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Automation with TheOyinbooke</h2>
              <div className="writing-grid">
                {[
                  { title: 'Skilling up in the age of AI', tags: ['Meta-learning', 'Emerging Markets'], excerpt: 'Skilling up is a skill in itself and has a lot more to do with you than the tool or technology you are learning.' },
                  { title: 'Local LLMs on modest hardware', tags: ['Ollama', 'LM Studio'], excerpt: 'Why running AI locally matters more in Lagos and Accra than in San Francisco.' },
                  { title: 'The anti-theory position', tags: ['Building', 'Craft'], excerpt: 'Breakthrough doesn\'t come from one clean moment of clarity. It comes from showing up to the confusion again and again.' },
                ].map((article, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.08}>
                    <div className="article-card">
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                        {article.tags.map(t => <span key={t} className="tech-tag" style={{ fontSize: '0.7rem' }}>{t}</span>)}
                      </div>
                      <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', fontWeight: 600, marginBottom: 8 }}>{article.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>{article.excerpt}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* YouTube */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="mono" style={{ color: 'var(--sage)', display: 'block', marginBottom: '0.5rem' }}>YouTube</span>
                <h2 className="display-md">@TheOyinbooke</h2>
                <p style={{ color: 'var(--text-secondary)', marginTop: 6 }}>16,000 subscribers</p>
              </div>
              <a href="https://youtube.com/@TheOyinbooke" target="_blank" rel="noopener" className="btn-secondary">
                Visit Channel
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="youtube-card">
              <div className="youtube-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.6"><path d="M8 5v14l11-7z"/></svg>
                <p className="mono" style={{ marginTop: 12, color: 'var(--text-secondary)' }}>Learn AI in 2026 — Series trailer</p>
              </div>
              <div className="youtube-info">
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.3rem', fontWeight: 600, marginBottom: 8 }}>Learn AI in 2026</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  A 5-series program moving from browser-based AI tools through local code editors
                  to running your own models. Confidence comes from doing, not watching.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Series 0: Intro', 'Series 1: Browser AI', 'Series 2: Code Editors', 'Series 3: Local LLMs', 'Series 4: Your Workflow'].map(s => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Speaking */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Speaking</span>
            <h2 className="display-md" style={{ marginBottom: '2.5rem' }}>Talks & Panels</h2>
          </Reveal>

          <div className="speaking-list">
            {[
              { year: '2026', title: 'AI Should Not Scare You', event: 'AXA Forge 2026', type: 'Keynote' },
              { year: '2026', title: 'Are AI Agents Moving Faster Than We Can Govern Them?', event: 'AI Governance Panel', type: 'Panel' },
              { year: '2025', title: 'AI Redefining Ubuntu: I Am because We Are', event: 'NSBE 50, Chicago', type: 'Flash Talk' },
              { year: '2025', title: 'AI Adoption and Cybersecurity', event: 'North America MCT Summit', type: 'Panel' },
              { year: '2021', title: 'First External Community Talk', event: 'MCT West Africa Summit', type: 'Session' },
            ].map((talk, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="speaking-item">
                  <span className="mono speaking-year">{talk.year}</span>
                  <div className="speaking-details">
                    <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.1rem', fontWeight: 600 }}>{talk.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 4 }}>{talk.event}</p>
                  </div>
                  <span className="tech-tag">{talk.type}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <div className="podcast-card">
              <span className="mono" style={{ color: 'var(--sage)' }}>Podcast</span>
              <h2 className="display-md" style={{ margin: '0.75rem 0 0.5rem' }}>In the City for the Nations</h2>
              <p className="body-lg" style={{ maxWidth: 550 }}>
                Interviews with people from different religious and cultural backgrounds
                who have come to faith in Christ. Hosted at Hillcrest Community Church, Little Rock.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Writing });
