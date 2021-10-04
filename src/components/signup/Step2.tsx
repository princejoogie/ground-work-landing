import React from "react";
import Input from "./Input";
import Select from "./Select";
import { CurrentStepCircle, StepCircle } from "./StepCircle";

interface Step2Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step2 = ({ setStep }: Step2Props) => {
  return (
    <form spellCheck="false" className="signup-form pb-16">
      <div className="w-full flex flex-col items-center py-8 shadow-lg rounded-b-lg">
        <h1 className="font-bold text-2xl md:text-3xl  text-secondary mb-8">
          Fill in Your Basic Info
        </h1>

        <div className="flex justify-between w-[90%] sm:w-[70%]">
          <CurrentStepCircle num="1" desc="Sign Up" />
          <CurrentStepCircle num="2" desc="Basic Info" />
          <StepCircle num="3" desc="More Info" />
        </div>
      </div>

      <div className="w-[90%] sm:w-[70%] mt-8 flex flex-col">
        <Input label="First Name" />
        <Input label="Last Name" />
        <Select choices={["Male", "Female", "Others"]} label="Gender" />
        <Input type="date" label="Birthdate" />

        <button
          onClick={() => setStep(3)}
          className="proceed-btn"
          type="button"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default Step2;
