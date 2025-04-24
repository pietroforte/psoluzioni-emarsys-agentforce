
import { useEffect, useState } from 'react';

export default function Home() {
  const [customerID, setCustomerID] = useState('');
  const [campaign, setCampaign] = useState('WELCOME');
  const [source, setSource] = useState('SAP Commerce Cloud');
  const [note, setNote] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [response, setResponse] = useState('');
  const [sentiment, setSentiment] = useState('');

  const fetchAI = async () => {
    if (!customerID) return;
    const res = await fetch('/api/ai/recommendation?contactID=' + customerID);
    const data = await res.json();
    setAiSuggestion(`${data.action} (${Math.round(data.confidence * 100)}%)`);
  };

  const fetchSentiment = async () => {
    if (!note) return;
    const res = await fetch('/api/ai/sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: note })
    });
    const data = await res.json();
    setSentiment(`🧠 ${data.summary} (Sentiment: ${data.sentiment})`);
  };

  const triggerCampaign = async () => {
    const res = await fetch('/api/trigger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contactID: customerID, eventCode: campaign, source })
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  useEffect(() => { fetchAI(); }, [customerID]);

  return (
    <main style={{ fontFamily: 'Segoe UI', padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Unified CX Simulator</span>
        <span style={{ display: 'flex', gap: '1rem' }}>
          <img src="/emarsys-logo.png" alt="SAP Emarsys" style={{ height: '40px' }} />
          <img src="/Salesforce-Agentforce.png" alt="Salesforce AgentForce" style={{ height: '40px' }} />
        </span>
      </h1>

      <h2>🎯 Trigger Lifecycle Campaign</h2>
      <label>Customer
        <select value={customerID} onChange={e => setCustomerID(e.target.value)}>
          <option value="">-- Choose --</option>
          <option value="C001">Anna</option>
          <option value="C002">Lucas</option>
          <option value="C003">Sofia</option>
        </select>
      </label>

      <label>Lifecycle Campaign
        <select value={campaign} onChange={e => setCampaign(e.target.value)}>
          <option value="WELCOME">WELCOME</option>
          <option value="REACTIVATION">REACTIVATION</option>
          <option value="BIRTHDAY">BIRTHDAY</option>
        </select>
      </label>

      <label>Source System
        <select value={source} onChange={e => setSource(e.target.value)}>
          <option value="SAP Commerce Cloud">SAP Commerce Cloud</option>
          <option value="Salesforce B2B">Salesforce B2B</option>
          <option value="POS">POS</option>
        </select>
      </label>

      <button onClick={triggerCampaign} style={{ marginTop: '1rem' }}>Trigger Campaign</button>

      <pre style={{ background: '#f4f4f4', padding: '1rem', marginTop: '1rem' }}>{response}</pre>

      {aiSuggestion && <p style={{ marginTop: '1rem' }}>💡 AI Suggestion: {aiSuggestion}</p>}

      <h2 style={{ marginTop: '2rem' }}>🧑‍💼 Agent Note + Sentiment</h2>
      <textarea
        placeholder="Add a quick agent note here..."
        value={note}
        onChange={e => setNote(e.target.value)}
        rows="3"
        style={{ width: '100%', marginTop: '0.5rem' }}
      />
      <button onClick={fetchSentiment}>Analyze Sentiment</button>

      {sentiment && <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{sentiment}</p>}
    </main>
  );
}
