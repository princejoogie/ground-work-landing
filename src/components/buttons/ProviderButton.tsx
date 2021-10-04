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
      className="bg-secondary mb-4 text-white rounded-lg text-center p-4 relative primary-ring"
    >
      <Icon className="text-2xl text-primary absolute left-4" />
      <p>Sign Up with {auth}</p>
    </button>
  );
};

export default ProviderButton;
