// InputField.tsx
import React from "react";

interface InputFieldProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder = "", type = "text" }) => {
  return <input type={type} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />;
};

export default InputField;
