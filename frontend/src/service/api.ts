const API_URL = "http://localhost:3000";

export async function registerUser(userData: { name: string; email: string; password: string }) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  return response.json();
}