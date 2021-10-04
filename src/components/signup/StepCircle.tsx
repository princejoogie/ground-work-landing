import React from "react";

interface BlueCircleProps {
  num: string;
  desc: string;
}

const CurrentStepCircle = ({ num, desc }: BlueCircleProps) => {
  return (
    <div className="grid place-items-center">
      <div className="bg-secondary rounded-full h-10 w-10 grid place-items-center mb-2">
        <p className="text-primary font-semibold">{num}</p>
      </div>
      <p className="text-secondary font-semibold">{desc}</p>
    </div>
  );
};

interface GrayCircleProps {
  num: string;
  desc: string;
}

const StepCircle = ({ num, desc }: GrayCircleProps) => {
  return (
    <div className="grid place-items-center">
      <div className="rounded-full border-[3px] border-[#ddd] h-10 w-10 grid place-items-center mb-2">
        <p className="text-[#ccc] font-semibold">{num}</p>
      </div>
      <p className="text-secondary font-medium">{desc}</p>
    </div>
  );
};

export { CurrentStepCircle, StepCircle };
