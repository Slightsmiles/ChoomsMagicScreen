import { useEffect, useState } from "react";
import { getClasses } from "../../services/api";

type ClassType = {
  classApiIndex: string;
  name: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ClassSelect({ value, onChange }: Props) {
  const [classes, setClasses] = useState<ClassType[]>([]);

  useEffect(() => {
    getClasses().then(setClasses);
  }, []);

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select Class</option>
      {classes.map((c) => (
        <option key={c.classApiIndex} value={c.classApiIndex}>
          {c.name}
        </option>
      ))}
    </select>
  );
}