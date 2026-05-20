const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export async function fetchJSON(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to load data from server: ${response.status} ${response.statusText} ${errorText}`);
  }
  return response.json();
}
