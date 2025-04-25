import Head from 'next/head';

export default function Layout({ children, title = 'CX Demo Suite' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
        <header style={{ padding: '1rem', backgroundColor: '#2f80ed', color: 'white', textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>CX Demo Suite</h1>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
        <footer style={{ padding: '1rem', textAlign: 'center', fontSize: '0.8rem', color: '#777' }}>
          Powered by SAP + Salesforce Simulation • {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}