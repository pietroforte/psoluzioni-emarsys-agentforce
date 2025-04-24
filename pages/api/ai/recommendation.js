export default function handler(req, res) {
    const { contactID } = req.query;
  
    const fakeModel = {
      C001: { action: "Offer 20% discount", confidence: 0.82 },
      C002: { action: "Send satisfaction survey", confidence: 0.74 },
      C003: { action: "Escalate to retention team", confidence: 0.91 }
    };
  
    const suggestion = fakeModel[contactID] || {
      action: "No action suggested",
      confidence: 0.0
    };
  
    res.status(200).json(suggestion);
  }
  