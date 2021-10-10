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
      <div className="flex flex-col items-center justify-center w-full h-screen space-y-6">
        <div className="flex p-5 space-x-3 bg-white rounded-full loader">
          <div className="w-5 h-5 rounded-full bg-secondary animate-bounce" />
          <div className="w-5 h-5 rounded-full bg-secondary animate-bounce" />
          <div className="w-5 h-5 rounded-full bg-secondary animate-bounce" />
        </div>
        <p className="text-lg font-medium text-gray-500">{message}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingProvider;
