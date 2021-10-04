import React from "react";

import Select from "./Select";
import { CurrentStepCircle } from "./StepCircle";
import Input from "./Input";

interface Step1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step3 = ({ setStep }: Step1Props) => {
  return (
    <form spellCheck="false" className="signup-form">
      <div className="w-full flex flex-col items-center py-8 shadow-lg rounded-b-lg">
        <h1 className="font-bold text-2xl md:text-3xl text-secondary mb-8">
          Almost There!
        </h1>

        <div className="flex justify-between w-[90%] sm:w-[70%]">
          <CurrentStepCircle num="1" desc="Sign Up" />
          <CurrentStepCircle num="2" desc="Basic Info" />
          <CurrentStepCircle num="3" desc="More Info" />
        </div>
      </div>

      <div className="w-[90%] sm:w-[70%] mt-8 flex flex-col">
        <Input label="Company Name" />
        <Select
          label="Business Industry"
          choices={["Industry 1", "Industry 2", "Industry 3"]}
        />
        <Select
          label="Products Offered"
          choices={["Product 1", "Product 2", "Product 3"]}
        />

        <button
          onClick={() => setStep(1)}
          className="proceed-btn"
          type="button"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default Step3;
