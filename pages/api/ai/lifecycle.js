export default function handler(req, res) {
    const { contactID } = req.query;
  
    const lifecycleMap = {
      C001: { stage: "Loyal Advocate", confidence: 0.91 },
      C002: { stage: "Churn Risk", confidence: 0.68 },
      C003: { stage: "Engaged Explorer", confidence: 0.77 }
    };
  
    const prediction = lifecycleMap[contactID] || {
      stage: "Unknown",
      confidence: 0.0
    };
  
    res.status(200).json(prediction);
  }
  