export async function handler(_req, res) {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
}
