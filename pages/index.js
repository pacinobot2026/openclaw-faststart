import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
      });
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <header style={{ padding: '2rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0, background: 'linear-gradient(90deg, #00d4ff, #0096ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          OpenClaw Fast Start
        </h1>
        <p style={{ color: '#a0a0c0', marginTop: '0.5rem' }}>
          From zero to running AI in under an hour
        </p>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '1.5rem' }}>
          Stop Reading About AI.<br/>
          <span style={{ background: 'linear-gradient(90deg, #00d4ff, #0096ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Start Building With It.
          </span>
        </h2>
        
        <p style={{ fontSize: '1.3rem', color: '#c0c0d0', lineHeight: 1.6, marginBottom: '2rem' }}>
          OpenClaw is the AI platform that actually does things. Build apps, automate workflows, ship to production.
        </p>

        <div style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)', borderRadius: '12px', padding: '2rem', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.1rem', margin: 0, color: '#fff' }}>
            <strong>The Problem:</strong> Everyone talks about AI. Nobody teaches you how to actually use it to build real products.
          </p>
        </div>

        {/* What You Get */}
        <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>What You Get:</h3>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              { icon: '🎬', title: 'Step-by-Step Setup Video', desc: 'Non-technical walkthrough. No coding required.' },
              { icon: '📦', title: 'Pre-Built Templates', desc: 'SOUL.md, AGENTS.md, and workflow configs you can copy-paste.' },
              { icon: '⚡', title: '5 Real Use Cases', desc: 'Content creation, automation, social media, data processing, more.' },
              { icon: '🛠️', title: 'Troubleshooting Guide', desc: 'Common issues and how to fix them fast.' },
              { icon: '🎯', title: 'Quick Wins Checklist', desc: 'Your first 10 tasks to automate today.' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: '#a0a0c0', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div style={{ background: 'rgba(0, 150, 255, 0.1)', border: '2px solid #0096ff', borderRadius: '16px', padding: '3rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#a0a0c0', marginBottom: '0.5rem' }}>Limited Time Intro Price:</p>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            $17
          </div>
          <p style={{ fontSize: '1.1rem', color: '#a0a0c0', marginBottom: '2rem' }}>
            Regular price: $47 (launching soon)
          </p>
          
          <button 
            onClick={handleCheckout}
            disabled={loading}
            style={{
              background: 'linear-gradient(90deg, #00d4ff, #0096ff)',
              color: '#fff',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              padding: '1.25rem 3rem',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'transform 0.2s',
              width: '100%',
              maxWidth: '400px'
            }}
            onMouseOver={(e) => !loading && (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {loading ? 'Loading...' : 'Get Instant Access →'}
          </button>
          
          <p style={{ fontSize: '0.9rem', color: '#808090', marginTop: '1rem' }}>
            Instant delivery. Start learning in 60 seconds.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ textAlign: 'left', marginTop: '4rem' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>FAQ</h3>
          
          {[
            { q: 'Do I need coding experience?', a: 'Nope. This is designed for non-technical people. If you can copy-paste, you can do this.' },
            { q: 'What if I get stuck?', a: 'The troubleshooting guide covers 99% of issues. Plus you can join the community for help.' },
            { q: 'How long does setup take?', a: 'Under an hour if you follow the video. Most people are running in 30 minutes.' },
            { q: 'Is this a subscription?', a: 'No. One-time payment. Yours forever.' }
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.q}</h4>
              <p style={{ color: '#a0a0c0', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#808090' }}>
        <p>Built by AI. Powered by OpenClaw. 🎬</p>
      </footer>
    </div>
  );
}
