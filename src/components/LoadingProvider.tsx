import React from "react";
import { useAuth } from "@/contexts/AuthContext";

interface LoadingProps {
  message?: string;
}

const LoadingProvider: React.FC<LoadingProps> = ({
  children,
  message = "Loading",
}) => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen space-y-2">
        <div className="flex p-3 space-x-2 bg-white rounded-full loader">
          <div className="w-3 h-3 rounded-full bg-secondary animate-bounce" />
          <div className="w-3 h-3 rounded-full bg-secondary animate-bounce" />
          <div className="w-3 h-3 rounded-full bg-secondary animate-bounce" />
        </div>
        <p className="text-sm font-medium text-gray-500">{message}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingProvider;
