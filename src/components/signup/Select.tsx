import React from "react";

interface SelectProps {
  label?: string;
  choices: string[];
}

const Select = ({ choices, label }: SelectProps) => {
  return (
    <div className="mb-16">
      <p className="mb-1 text-[#aaa]">{label}</p>
      <select className="appearance-none border-2 border-[#ccc] h-[40px] px-[20px] rounded-lg outline-none w-full primary-ring cursor-pointer">
        {choices.map((choice: string) => (
          <option key={choice}>{choice}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
