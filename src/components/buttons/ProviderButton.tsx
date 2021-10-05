import React from "react";
import { IconType } from "react-icons";

interface ProviderProps {
  auth: string;
  action?: () => void;
  Icon: IconType;
}

const ProviderButton = ({ auth, action, Icon }: ProviderProps) => {
  return (
    <button
      onClick={action}
      type="button"
      className="bg-secondary mb-4 text-white rounded-lg text-center md:text-center p-4 relative primary-ring hover:bg-opacity-90"
    >
      <Icon className="text-xl md:text-2xl text-primary absolute left-4" />
      <p className="text-sm md:text-base">Sign Up with {auth}</p>
    </button>
  );
};

export default ProviderButton;
