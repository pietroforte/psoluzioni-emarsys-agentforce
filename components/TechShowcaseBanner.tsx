import React from 'react';

export default function TechShowcaseBanner() {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #D1D6DC',
      borderRadius: '8px',
      padding: '1.5rem',
      marginTop: '2rem',
      textAlign: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ fontSize: '1.25rem', color: '#33475B', marginBottom: '1rem' }}>
        🚀 Technology Stack & AI Architecture
      </h2>
      <p style={{ marginBottom: '1rem', color: '#555' }}>
        This prototype combines CRM logic with real-time generative AI using modern, composable tools:
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <img src="https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white" alt="Next.js" />
        <img src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/Vercel-000?logo=vercel" alt="Vercel" />
        <img src="https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white" alt="OpenAI" />
        <img src="https://img.shields.io/badge/HubSpot-FF7A59?logo=hubspot&logoColor=white" alt="HubSpot" />
        <img src="https://img.shields.io/badge/SAP%20Emarsys-002554?logo=sap&logoColor=white" alt="SAP Emarsys" />
      </div>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        Simulated CRM ➝ Smart Agent ➝ Suggested Action ➝ Personalized Email Line<br/>
        Powered by OpenAI's GPT, with budget and token control.
      </p>
    </div>
  );
}
