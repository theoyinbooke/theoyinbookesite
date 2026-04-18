// Tweaks.jsx — Tweaks panel for customization

function TweaksPanel() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const applyTweak = (key, value) => {
    const newDefaults = { ...window.__TWEAK_DEFAULTS };
    newDefaults[key] = value;
    window.__TWEAK_DEFAULTS = newDefaults;
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: newDefaults }));
  };

  if (!visible) return null;

  return (
    <div className="tweaks-panel">
      <div className="tweaks-title">
        <span>Tweaks</span>
      </div>

      <div className="tweak-row">
        <span className="tweak-label">Accent Color</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {[
            { name: 'Terracotta', val: 'oklch(0.55 0.16 40)' },
            { name: 'Teal', val: 'oklch(0.50 0.12 195)' },
            { name: 'Sage', val: 'oklch(0.50 0.12 155)' },
            { name: 'Indigo', val: 'oklch(0.50 0.14 270)' },
            { name: 'Amber', val: 'oklch(0.60 0.16 75)' },
          ].map(c => (
            <button
              key={c.name}
              className={`tweak-swatch ${window.__TWEAK_DEFAULTS?.accentColor === c.val ? 'active' : ''}`}
              style={{ background: c.val }}
              onClick={() => {
                document.documentElement.style.setProperty('--accent', c.val);
                document.documentElement.style.setProperty('--accent-hover', c.val.replace('0.55', '0.48').replace('0.50', '0.43').replace('0.60', '0.53'));
                applyTweak('accentColor', c.val);
              }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <span className="tweak-label">Display Font</span>
        <div className="tweak-options">
          {['Syne', 'Fraunces', 'DM Serif Display'].map(f => (
            <button
              key={f}
              className={`tweak-option ${window.__TWEAK_DEFAULTS?.displayFont === f ? 'active' : ''}`}
              onClick={() => {
                document.documentElement.style.setProperty('--display', `'${f}', sans-serif`);
                applyTweak('displayFont', f);
              }}
              style={{ fontFamily: f }}
            >
              {f.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <span className="tweak-label">Hero Animation</span>
        <div className="tweak-options">
          {['Geometric', 'Minimal'].map(s => (
            <button
              key={s}
              className={`tweak-option ${window.__TWEAK_DEFAULTS?.heroStyle === s ? 'active' : ''}`}
              onClick={() => {
                applyTweak('heroStyle', s);
                window.dispatchEvent(new CustomEvent('tweakchange', { detail: { ...window.__TWEAK_DEFAULTS, heroStyle: s } }));
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="tweak-row" style={{ marginBottom: 0 }}>
        <span className="tweak-label">Card Style</span>
        <div className="tweak-options">
          {['Bordered', 'Elevated', 'Flat'].map(s => (
            <button
              key={s}
              className={`tweak-option ${window.__TWEAK_DEFAULTS?.cardStyle === s ? 'active' : ''}`}
              onClick={() => {
                applyTweak('cardStyle', s);
                const cards = document.querySelectorAll('.project-card, .philosophy-card, .pillar-card, .article-card');
                cards.forEach(c => {
                  if (s === 'Elevated') {
                    c.style.border = 'none';
                    c.style.boxShadow = '0 4px 24px oklch(from var(--text) l c h / 0.06)';
                  } else if (s === 'Flat') {
                    c.style.border = 'none';
                    c.style.boxShadow = 'none';
                    c.style.background = 'var(--bg-alt)';
                  } else {
                    c.style.border = '';
                    c.style.boxShadow = '';
                    c.style.background = '';
                  }
                });
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TweaksPanel });
