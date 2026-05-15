const API_BASE = "http://localhost:5067/api/";

export type Race = {
  raceApiIndex: string;
  name: string;
};

export type ClassType = {
  classApiIndex: string;
  name: string;
};

export type CreateCharacterRequest = {
  name: string;
  raceApiIndex: string;
  classApiIndex: string;
};

// --- API CALLS ---

export async function getRaces(): Promise<Race[]> {
  const res = await fetch(`${API_BASE}/races`);
  if (!res.ok) throw new Error("Failed to fetch races");
  return res.json();
}

export async function getClasses(): Promise<ClassType[]> {
  const res = await fetch(`${API_BASE}/classes`);
  if (!res.ok) throw new Error("Failed to fetch classes");
  return res.json();
}

export async function createCharacter(
  data: CreateCharacterRequest
): Promise<any> {
  const res = await fetch(`${API_BASE}/characters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create character");

  return res.json();
}