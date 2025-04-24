
import { useEffect, useState } from 'react';

export default function Home() {
  const [customerID, setCustomerID] = useState('');
  const [campaign, setCampaign] = useState('WELCOME');
  const [source, setSource] = useState('SAP Commerce Cloud');
  const [response, setResponse] = useState('');
  const [aiResponse, setAIResponse] = useState('');

  const triggerCampaign = async () => {
    const res = await fetch('/api/trigger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contactID: customerID, eventCode: campaign, source })
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  const getAIRecommendation = async () => {
    const res = await fetch('/api/ai/recommendation?contactID=' + customerID);
    const data = await res.json();
    setAIResponse(data.action + " (" + Math.round(data.confidence * 100) + "%)");
  };

  useEffect(() => {
    if (customerID) {
      getAIRecommendation();
    }
  }, [customerID]);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Unified CX Simulator (Emarsys + AgentForce)</h1>

      <h2>🎯 Trigger Campaign</h2>
      <label>
        Select Customer:
        <select value={customerID} onChange={e => setCustomerID(e.target.value)}>
          <option value="">-- Choose --</option>
          <option value="C001">Anna (C001)</option>
          <option value="C002">Lucas (C002)</option>
          <option value="C003">Sofia (C003)</option>
        </select>
      </label>

      <label>
        Lifecycle Campaign:
        <select value={campaign} onChange={e => setCampaign(e.target.value)}>
          <option value="WELCOME">WELCOME</option>
          <option value="REACTIVATION">REACTIVATION</option>
          <option value="BIRTHDAY">BIRTHDAY</option>
        </select>
      </label>

      <label>
        Source System:
        <select value={source} onChange={e => setSource(e.target.value)}>
          <option value="SAP Commerce Cloud">SAP Commerce Cloud</option>
          <option value="Salesforce B2B">Salesforce B2B</option>
          <option value="POS">POS</option>
        </select>
      </label>

      <button onClick={triggerCampaign}>Trigger</button>

      <pre>{response}</pre>

      {aiResponse && <p>💡 AI Suggestion: {aiResponse}</p>}
    </main>
  );
}
