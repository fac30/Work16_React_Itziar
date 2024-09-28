import { useState, type ChangeEvent } from "react";

export default function Shouter() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <output>{inputValue.toUpperCase()}</output>
    </>
  );
}
