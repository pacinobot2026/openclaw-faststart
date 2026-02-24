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
          I Built This Entire Business<br/>
          <span style={{ background: 'linear-gradient(90deg, #00d4ff, #0096ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            In 2 Hours With AI.
          </span>
        </h2>
        
        <p style={{ fontSize: '1.3rem', color: '#c0c0d0', lineHeight: 1.6, marginBottom: '2rem' }}>
          This sales page. The checkout. The whole funnel. Built tonight while you were watching.
        </p>

        <div style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)', borderRadius: '12px', padding: '2rem', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.1rem', margin: 0, color: '#fff' }}>
            <strong>This is how you make money in 2026:</strong> Build products in hours, not months. Ship fast. Sell immediately. Let AI do the heavy lifting.
          </p>
        </div>

        {/* Proof */}
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>What I Built Tonight (Feb 23, 2026):</h3>
          <ul style={{ color: '#c0c0d0', lineHeight: 2, fontSize: '1.1rem' }}>
            <li>✅ This entire landing page (Next.js)</li>
            <li>✅ Stripe checkout integration</li>
            <li>✅ GitHub repo + version control</li>
            <li>✅ Deployed to Vercel (live in production)</li>
            <li>✅ Twitter account (@BuildByAI) to drive traffic</li>
            <li>✅ Complete sales funnel ready to take money</li>
          </ul>
          <p style={{ color: '#a0a0c0', marginTop: '1rem', textAlign: 'center', fontSize: '0.95rem' }}>
            <strong>Total time:</strong> About 2 hours. <strong>Cost to build:</strong> $0. <strong>Potential revenue:</strong> Unlimited.
          </p>
        </div>

        {/* What You Get */}
        <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>What You're Actually Learning:</h3>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              { icon: '💰', title: 'How I Built This Funnel', desc: 'Watch me build a complete sales system from scratch. Code, deploy, payments - everything.' },
              { icon: '🚀', title: 'Ship Products in Hours', desc: 'No more "someday." Learn to build and launch products the same day you think of them.' },
              { icon: '🎯', title: 'Real Money-Making Strategies', desc: 'Not theory. Actual tactics I use to turn AI into revenue. Twitter → funnel → cash.' },
              { icon: '⚡', title: 'The AI Tech Stack', desc: 'OpenClaw, Vercel, Stripe, GitHub. How they work together to print money.' },
              { icon: '🔥', title: 'My Entire Playbook', desc: 'See exactly what I built tonight. Clone it. Modify it. Sell your own version tomorrow.' }
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
          <p style={{ fontSize: '1.1rem', color: '#a0a0c0', marginBottom: '0.5rem' }}>Here's the deal:</p>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            $17
          </div>
          <p style={{ fontSize: '1.1rem', color: '#a0a0c0', marginBottom: '2rem' }}>
            This costs less than lunch. But it shows you how to build products that make $1k, $5k, $10k+
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
            { q: 'Do I need to know how to code?', a: 'Helps, but not required. I show you exactly what to copy, where to paste it, and how to modify it for your own products.' },
            { q: 'Can I really make money with this?', a: 'If you can build products in hours instead of months, and sell them immediately... yeah, you can make money. I literally just did it tonight.' },
            { q: 'What if AI changes or breaks?', a: 'This isn\'t about one tool. It\'s about the SYSTEM: build fast, ship faster, sell immediately. That works with any AI.' },
            { q: 'Is this just theory?', a: 'Hell no. You\'re literally looking at a product I built in 2 hours. The page you\'re on right now is the proof.' }
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
