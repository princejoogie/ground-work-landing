import React from "react";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder }) => {
  return (
    <div className="mb-16">
      <p className="mb-4 text-[#aaa] text-sm">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="border-b-2 border-[#aaa] w-full outline-none focus:border-secondary"
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Enter Here",
};

export default Input;
