const API_URL = "http://localhost:3000";

export async function registerUser(userData: { name: string; email: string; password: string }) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
const data = await response.json();
if (!response.ok) {
  throw new Error(data.error || data.message || "Error registering user");
}
  return data;
}

export async function loginUser(userData: { email: string; password: string }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || data.message || "Error logging in");
  }
  return data;
}

export async function getDashboard() {
  const response = await fetch(`${API_URL}/dashboard`, {
    method: "GET",
    credentials: "include"
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || data.message || "Error accessing the dashboard");
  }
  return data;
}

export async function logoutUser() {
  const response = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include"
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || data.message || "Error logging out");
  }
  return data;
}