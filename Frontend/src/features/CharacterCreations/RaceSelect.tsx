import { useEffect, useState } from "react";
import { getRaces } from "../../services/api";

type Race = {
  raceApiIndex: string;
  name: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function RaceSelect({ value, onChange }: Props) {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    getRaces().then(setRaces);
  }, []);

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select Race</option>
      {races.map((r) => (
        <option key={r.raceApiIndex} value={r.raceApiIndex}>
          {r.name}
        </option>
      ))}
    </select>
  );
}