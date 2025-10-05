export default async function handler(req, res) {
  try {
    // Einfacher Test: kleine Abfrage an die DB
    const response = await fetch(process.env.DATABASE_URL, { method: "HEAD" });
    console.log("Supabase pinged successfully:", response.status);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Supabase ping failed:", error.message);
    res.status(500).json({ ok: false, error: error.message });
  }
}
