// Speaking.jsx - Official public speaking profile

const SPEAKING_SHORT_BIO = `Olanrewaju Oyinbooke is an Agentic Engineer, Microsoft MVP, and former Microsoft Senior Cloud Advocate. He builds AI-first products and teaches professionals how to use AI, automation, data, and cloud tools with confidence.`;

const SPEAKING_LONG_BIO = `Olanrewaju Oyinbooke is an Agentic Engineer, Microsoft MVP, and former Microsoft Senior Cloud Advocate focused on making AI and automation practical for real people and real organizations. He has led skilling programs across Africa, helped professionals adopt Azure, Power Platform, data analytics, and AI tools, and built AI-first products across mobile, desktop, and web.

His work sits at the intersection of engineering, education, and community. Olanrewaju has spoken on AI adoption, responsible automation, agentic systems, local-first AI, and the future of work. He brings a builder's perspective to every stage, translating complex technology into practical workflows people can understand, trust, and use.`;

function Speaking() {
  return (
    <main>
      <section className="section speaking-hero-section">
        <div className="container">
          <div className="speaking-hero">
            <Reveal>
              <div>
                <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Speaking</span>
                <h1 className="display-lg" style={{ marginBottom: '1rem' }}>Speaking request & official profile</h1>
                <p className="body-lg" style={{ maxWidth: 650 }}>
                  For keynotes, panels, workshops, podcasts, and community sessions on AI,
                  automation, agentic systems, and practical technology adoption.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="speaker-card">
                <SpeakerPhoto />
                <div>
                  <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: 4 }}>Olanrewaju Oyinbooke</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>Agentic Engineer · Microsoft MVP · Former Microsoft Senior Cloud Advocate</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="speaking-action-grid">
            <Reveal>
              <section className="speaking-action">
                <span className="mono" style={{ color: 'var(--sage)', display: 'block', marginBottom: '0.75rem' }}>Speaking Request</span>
                <h2 className="display-md" style={{ marginBottom: '0.75rem' }}>Invite me to speak</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Share the event format, audience, topic, date, location or timezone, and whether it is
                  virtual or in person.
                </p>
                <a
                  className="btn-primary"
                  href="mailto:hello@theoyinbooke.com?subject=Speaking%20Request%20for%20Olanrewaju%20Oyinbooke"
                >
                  Start speaking request
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              </section>
            </Reveal>

            <Reveal delay={0.08}>
              <section className="speaking-action">
                <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.75rem' }}>Public Profile</span>
                <h2 className="display-md" style={{ marginBottom: '0.75rem' }}>Use this official bio</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  This page is the current source for event pages, introductions, media blurbs,
                  and speaker packets.
                </p>
                <a className="btn-secondary" href="#speaking-profile">
                  View profile
                </a>
              </section>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="speaking-profile" className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Official Speaking Profile</span>
            <h2 className="display-md" style={{ marginBottom: '2rem' }}>Approved profile copy</h2>
          </Reveal>

          <div className="profile-grid">
            <Reveal delay={0.06}>
              <BioBlock title="Short Bio" text={SPEAKING_SHORT_BIO} />
            </Reveal>
            <Reveal delay={0.12}>
              <BioBlock title="Long Bio" text={SPEAKING_LONG_BIO} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="speaker-details-grid">
            <Reveal>
              <section>
                <span className="mono" style={{ color: 'var(--sage)', display: 'block', marginBottom: '1rem' }}>Topics</span>
                <h2 className="display-md" style={{ marginBottom: '1.25rem' }}>What I speak about</h2>
                <div className="topic-list">
                  {[
                    'Practical AI adoption for teams and communities',
                    'Agentic systems and automation workflows',
                    'Local-first AI, privacy, and on-device intelligence',
                    'Cloud, data, and AI skilling for emerging markets',
                    'Building products while teaching people how to build',
                  ].map(topic => <span key={topic} className="topic-pill">{topic}</span>)}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section>
                <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Details</span>
                <h2 className="display-md" style={{ marginBottom: '1.25rem' }}>Organizer notes</h2>
                <dl className="speaker-facts">
                  <div><dt>Name</dt><dd>Olanrewaju Oyinbooke</dd></div>
                  <div><dt>Title</dt><dd>Agentic Engineer</dd></div>
                  <div><dt>Credentials</dt><dd>Microsoft MVP · Former Microsoft Senior Cloud Advocate</dd></div>
                  <div><dt>Links</dt><dd>@TheOyinbooke · linkedin.com/in/theoyinbooke</dd></div>
                </dl>
              </section>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

function SpeakerPhoto() {
  return (
    <div className="speaker-photo" aria-label="Olanrewaju Oyinbooke headshot placeholder">
      <span>OO</span>
    </div>
  );
}

function BioBlock({ title, text }) {
  const [copied, setCopied] = React.useState(false);

  const copyBio = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="bio-block">
      <div className="bio-block-header">
        <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.25rem', fontWeight: 700 }}>{title}</h3>
        <button className="copy-btn" onClick={copyBio}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
      {text.split('\n\n').map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </article>
  );
}

Object.assign(window, { Speaking });
