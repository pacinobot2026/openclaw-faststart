export default function Success() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎉</div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>You're In!</h1>
        <p style={{ fontSize: '1.3rem', color: '#c0c0d0', marginBottom: '2rem' }}>
          Check your email for instant access to OpenClaw Fast Start.
        </p>
        
        <div style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What's Next:</h3>
          <ol style={{ textAlign: 'left', color: '#a0a0c0', lineHeight: 1.8 }}>
            <li>Check your email (arrives in ~2 minutes)</li>
            <li>Download the setup guide</li>
            <li>Watch the video walkthrough</li>
            <li>Start building with AI!</li>
          </ol>
        </div>
        
        <p style={{ color: '#808090', fontSize: '0.9rem' }}>
          Questions? Reply to the email and we'll help you out.
        </p>
      </div>
    </div>
  );
}
