import React from "react";

interface SelectProps {
  label?: string;
  choices: string[];
}

const Select = ({ choices, label }: SelectProps) => {
  return (
    <div className="mb-4">
      <p className="mb-1 text-[#aaa]">{label}</p>
      <select className="appearance-none input">
        {choices.map((choice: string) => (
          <option key={choice}>{choice}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
