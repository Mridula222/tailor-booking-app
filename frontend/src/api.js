const BASE_URL = "http://localhost:5000/api"; // Make sure backend is running!

export async function getDesigns() {
  const res = await fetch(`${BASE_URL}/designs`);
  const data = await res.json();
  return data;
}
