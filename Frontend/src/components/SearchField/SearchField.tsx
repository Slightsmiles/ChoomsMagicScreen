import React, { useState } from "react";
import InputField from "../InputField/InputField";

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        value={query}
        onChange={setQuery}
        placeholder="Search equipment..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchField;
