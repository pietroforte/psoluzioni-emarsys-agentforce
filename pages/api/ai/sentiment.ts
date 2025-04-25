export default function handler(req, res) {
  const text = req.body?.text;
  res.status(200).json({
    summary: `Customer said: "${text}"`,
    sentiment: "Neutral"
  });
}