import React from "react";

interface BlueCircleProps {
  num: string;
  desc: string;
}

const CurrentStepCircle = ({ num, desc }: BlueCircleProps) => {
  return (
    <div className="grid place-items-center">
      <div className="bg-secondary step-circle">
        <p className="text-primary font-semibold">{num}</p>
      </div>
      <p className="text-sm text-secondary font-semibold">{desc}</p>
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
      <div className="border-[3px] border-[#ddd] step-circle">
        <p className="text-[#ccc] font-semibold">{num}</p>
      </div>
      <p className="text-sm text-secondary font-medium">{desc}</p>
    </div>
  );
};

export { CurrentStepCircle, StepCircle };
