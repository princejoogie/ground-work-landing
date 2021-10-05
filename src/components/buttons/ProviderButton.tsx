import React from "react";
import { IconType } from "react-icons";

interface ProviderProps {
  auth: string;
  action?: () => void;
  Icon: IconType;
  signIn?: boolean;
}

const ProviderButton = ({ auth, action, Icon, signIn }: ProviderProps) => {
  return (
    <button
      onClick={action}
      type="button"
      className="bg-transparent border-2 hover:bg-gray-100 border-secondary font-semibold text-secondary mb-4 rounded-lg text-center md:text-center p-4 relative primary-ring"
    >
      <Icon className="text-xl md:text-2xl absolute left-4" />
      <p className="text-sm md:text-base">
        Sign {signIn ? "In" : "Up"} with {auth}
      </p>
    </button>
  );
};

export default ProviderButton;
