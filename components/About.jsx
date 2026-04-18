// About.jsx — About & Contact page

function About() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="about-header">
            <div className="about-photo-col">
              <Reveal>
                <div className="about-photo">
                  <div className="about-photo-placeholder">
                    <span className="mono" style={{ color: 'var(--text-secondary)' }}>Headshot</span>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="about-intro-col">
              <Reveal>
                <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>About</span>
                <h1 className="display-lg" style={{ marginBottom: '1rem' }}>Olanrewaju Oyinbooke</h1>
                <p className="body-lg" style={{ marginBottom: '0.5rem' }}>Agentic Engineer</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Operations Automation and AI Lead, Prime Eight Consulting · Microsoft MVP · Former Microsoft Senior Cloud Advocate</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-story">
            <Reveal>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>The thread</h2>
            </Reveal>

            {[
              'I started in data science. For four years at AXA Mansard in Lagos, I built the things that make an insurance business run smarter — a customer segmentation engine, a product recommendation engine that drove cross-sell revenue, internal training content that became a data science community of nearly 300 people by 2019. Some of those community members are working in data and AI today. That\'s the part I\'m proudest of.',
              'From AXA I moved to Microsoft as a Senior Cloud Advocate. My job was to translate — take the complexity of Azure, Power Platform, and AI and turn it into something professionals across Africa could actually use. The work scaled faster than I expected. A skilling program I led upskilled hundreds of thousands of people in data analytics and low-code. The Microsoft Learn presence grew across dozens of African university campuses.',
              'Today I lead Operational Automation and AI at Prime Eight Consulting. The work is hands-on: new-hire onboarding automation, AI chatbots for employee handbooks, IT asset governance tools, and consulting engagements for external clients. I also still run the AXA Innovative Community I founded back in 2019, which has evolved into something bigger than I was when I left.',
              'The thread across all of it is the same one that started at AXA: build the thing, then teach people how to build it too.',
            ].map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="about-paragraph">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Experience</span>
            <h2 className="display-md" style={{ marginBottom: '2.5rem' }}>Career path</h2>
          </Reveal>

          <div className="timeline">
            {[
              { period: '2024 – Present', role: 'Operations Automation and AI Lead', org: 'Prime Eight Consulting', detail: 'Leading automation and AI deployments for enterprise operations.' },
              { period: '2022 – 2024', role: 'Senior Cloud Advocate', org: 'Microsoft', detail: 'Translated Azure, Power Platform, and AI for professionals across Africa. Upskilled hundreds of thousands.' },
              { period: '2018 – 2022', role: 'Data Scientist', org: 'AXA Mansard', detail: 'Built segmentation and recommendation engines. Founded 300-person data science community.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="timeline-item">
                  <span className="mono timeline-period">{item.period}</span>
                  <div className="timeline-content">
                    <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.15rem', fontWeight: 600 }}>{item.role}</h3>
                    <p style={{ color: 'var(--accent)', fontSize: '0.95rem', margin: '4px 0 8px' }}>{item.org}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--sage)', display: 'block', marginBottom: '1rem' }}>Community</span>
            <h2 className="display-md" style={{ marginBottom: '2rem' }}>Communities I've built and served</h2>
          </Reveal>

          <div className="community-grid">
            {[
              { name: 'AXA Innovative Community', role: 'Founder', year: 'Since 2019', detail: 'Started as a data science community of ~300, evolved into the Innovative Community still running today.' },
              { name: 'DataFest Africa', role: 'Co-organizer', year: 'Since 2022', detail: 'One of the largest data community initiatives on the continent.' },
              { name: 'Data Science Nigeria', role: 'Mentor', year: 'Ongoing', detail: 'Mentoring the next generation of data professionals.' },
              { name: 'NSBE UALR Chapter', role: 'Former President', year: '2023–2024', detail: 'Strengthened university relationships and got students speaking at national conferences.' },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="community-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                    <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.1rem', fontWeight: 600 }}>{c.name}</h3>
                    <span className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.7rem' }}>{c.year}</span>
                  </div>
                  <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: 6 }}>{c.role}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Capabilities</span>
            <h2 className="display-md" style={{ marginBottom: '2.5rem' }}>What I build with</h2>
          </Reveal>

          <div className="skills-grid">
            {[
              { area: 'iOS / Mac Native', skills: ['Swift 6', 'SwiftUI', 'SwiftData', 'AVFoundation', 'ScreenCaptureKit', 'Metal', 'Apple Foundation Models', 'MLX Swift', 'Core ML'] },
              { area: 'Web Platforms', skills: ['Next.js 14', 'React', 'TypeScript', 'Convex', 'Clerk', 'Tailwind CSS', 'shadcn/ui', 'Vercel'] },
              { area: 'AI Engineering', skills: ['Claude SDK', 'OpenAI SDK', 'Ollama', 'LM Studio', 'llama.cpp', 'Whisper', 'RAG', 'MCP Servers', 'Tool-calling'] },
              { area: 'Data & Cloud', skills: ['Python', 'SQL', 'Power BI', 'Azure', 'PyTorch', 'Hugging Face', 'Time Series', 'ML Pipelines'] },
            ].map((group, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="skill-group">
                  <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>{group.area}</h3>
                  <div className="tech-tags">
                    {group.skills.map(s => <span key={s} className="tech-tag">{s}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 600 }}>
              <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Contact</span>
              <h2 className="display-md" style={{ marginBottom: '1rem' }}>Let's work together</h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                Open to speaking engagements, consulting inquiries, collaborations,
                and conversations about AI accessibility.
              </p>
              <div className="contact-links">
                <a href="https://youtube.com/@TheOyinbooke" target="_blank" rel="noopener" className="contact-link">
                  <span>YouTube</span>
                  <span className="mono" style={{ color: 'var(--text-secondary)' }}>@TheOyinbooke</span>
                </a>
                <a href="https://github.com/theoyinbooke" target="_blank" rel="noopener" className="contact-link">
                  <span>GitHub</span>
                  <span className="mono" style={{ color: 'var(--text-secondary)' }}>theoyinbooke</span>
                </a>
                <a href="https://linkedin.com/in/theoyinbooke" target="_blank" rel="noopener" className="contact-link">
                  <span>LinkedIn</span>
                  <span className="mono" style={{ color: 'var(--text-secondary)' }}>Olanrewaju Oyinbooke</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { About });
