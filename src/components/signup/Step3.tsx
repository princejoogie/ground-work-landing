import React from "react";

import Select from "./Select";
import { CurrentStepCircle } from "./StepCircle";
import Input from "./Input";

interface Step1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step3 = ({ setStep }: Step1Props) => {
  return (
    <form
      spellCheck={false}
      className="flex flex-col flex-1 w-full max-w-3xl mx-auto overflow-hidden bg-white shadow rounded-2xl"
    >
      <div className="py-10 border-b">
        <h1 className="w-10/12 mx-auto mb-8 text-3xl font-bold text-center text-secondary">
          Almost There!
        </h1>
        <div className="flex items-center justify-between w-10/12 mx-auto md:w-9/12 xl:w-7/12">
          <CurrentStepCircle num="1" desc="Type" />
          <CurrentStepCircle num="2" desc="Basic Info" />
          <CurrentStepCircle num="3" desc="More Info" />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 w-10/12 py-10 mx-auto md:w-9/12 xl:w-7/12">
        <div className="flex flex-col">
          <Input label="Company Name" />
          <Select
            label="Business Industry"
            choices={["Industry 1", "Industry 2", "Industry 3"]}
          />
          <Select
            label="Products Offered"
            choices={["Product 1", "Product 2", "Product 3"]}
          />
        </div>

        <button
          onClick={() => setStep(3)}
          className="w-full p-3 mt-10 text-center text-white rounded-lg bg-secondary primary-ring bottom-4 hover:bg-opacity-90"
          type="button"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default Step3;
