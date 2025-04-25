import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

// ✅ Add this block
declare global {
  interface Window {
    clarity: any;
  }
}


export default function Layout({ children, title = 'CX Demo Suite' }) {
  // Add useEffect to ensure Clarity function exists
  useEffect(() => {
    window.clarity = window.clarity || function() { (window.clarity.q = window.clarity.q || []).push(arguments) };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Security-Policy" content="script-src 'self' https://www.clarity.ms;" />
      </Head>

      {/* Add Clarity Script here */}
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/r9ukvvy457";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r9ukvvy457");
          `
        }}
      />

      <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
        <header style={{ padding: '1rem', backgroundColor: '#2f80ed', color: 'white', textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>CX Demo Suite</h1>
        </header>
        <main style={{
