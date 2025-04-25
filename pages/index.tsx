import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="CX Demo Hub">
      <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome to the CX Demo Hub
        </h1>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          Choose a demo environment to explore:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link href="/emarsys" legacyBehavior>
            <a style={linkStyle}>🚀 Emarsys Only</a>
          </Link>
          <Link href="/agentforce" legacyBehavior>
            <a style={linkStyle}>🧠 AgentForce Only</a>
          </Link>
          <Link href="/emarsys-agentforce" legacyBehavior>
            <a style={{ ...linkStyle, backgroundColor: '#009688' }}>
              🔀 Unified Emarsys + AgentForce
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

const linkStyle: React.CSSProperties = {
  backgroundColor: '#2f80ed',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'block'
};
