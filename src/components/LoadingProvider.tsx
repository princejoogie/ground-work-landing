import React, { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { useAuth } from "@/contexts/AuthContext";

interface LoadingProps {
  message?: string;
}

const LoadingProvider: React.FC<LoadingProps> = ({
  children,
  message = "Loading",
}) => {
  const { loading } = useAuth();
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length >= 3) setDots(".");
      else setDots(`${dots}.`);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [dots]);

  if (!loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen space-y-6">
        <SyncLoader color="#132D63" size={10} speedMultiplier={0.75} />
        <p className="text-xs text-gray-500">
          {message} {dots}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingProvider;
