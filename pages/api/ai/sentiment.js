export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: "Only POST supported" });
    }
  
    const { text } = req.body;
  
    const summary = text.toLowerCase().includes("angry") || text.includes("frustrated")
      ? "Customer expressed frustration. Consider escalation."
      : text.toLowerCase().includes("thank you") || text.includes("appreciated")
      ? "Positive sentiment detected. Reinforce loyalty."
      : "Neutral tone. No action needed.";
  
    const sentiment = summary.includes("frustration") ? "negative"
                    : summary.includes("Positive") ? "positive"
                    : "neutral";
  
    res.status(200).json({ sentiment, summary });
  }
  