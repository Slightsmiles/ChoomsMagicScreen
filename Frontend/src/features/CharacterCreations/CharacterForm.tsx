import { useState } from "react";
import RaceSelect from "./RaceSelect";
import ClassSelect from "./ClassSelect";
import { createCharacter } from "../../services/api";

type CreateCharacterRequest = {
  name: string;
  raceApiIndex: string;
  classApiIndex: string;
};

export default function CharacterForm() {
  const [name, setName] = useState<string>("");
  const [race, setRace] = useState<string>("");
  const [cls, setCls] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: CreateCharacterRequest = {
      name,
      raceApiIndex: race,
      classApiIndex: cls,
    };

    try {
      const result = await createCharacter(payload);
      console.log("Created:", result);
    } catch (err) {
      console.error("Error creating character:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Character</h2>

      <input
        type="text"
        placeholder="Character Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <RaceSelect value={race} onChange={setRace} />
      <ClassSelect value={cls} onChange={setCls} />

      <button type="submit">Create</button>
    </form>
  );
}