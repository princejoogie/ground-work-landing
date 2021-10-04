import React from "react";
import Input from "./Input";
import Select from "./Select";
import { CurrentStepCircle, StepCircle } from "./StepCircle";

interface Step2Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step2 = ({ setStep }: Step2Props) => {
  return (
    <form
      spellCheck="false"
      className="bg-white rounded-2xl flex flex-col items-center w-[600px] mx-auto min-h-screen pb-16 relative"
    >
      <div className="w-full flex flex-col items-center py-8 shadow-lg rounded-b-lg">
        <h1 className="font-bold text-3xl text-secondary mb-8">
          Fill in Your Basic Info
        </h1>

        <div className="flex justify-between w-[70%]">
          <StepCircle num="1" desc="Type" />
          <CurrentStepCircle num="2" desc="Basic Info" />
          <StepCircle num="3" desc="More Info" />
        </div>
      </div>

      <div className="w-[70%] mt-8 flex flex-col">
        <Input label="First Name" />
        <Input label="Last Name" />
        <Select choices={["Male", "Female", "Others"]} label="Gender" />
        <Input type="date" label="Birthdate" />

        <button
          onClick={() => setStep(1)}
          className="bg-secondary mb-4 text-white rounded-lg text-center p-3 primary-ring absolute bottom-4 w-[70%]"
          type="button"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default Step2;
