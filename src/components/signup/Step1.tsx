import React from "react";
import { FaFacebook, FaGoogle, FaYahoo } from "react-icons/fa";

import Select from "./Select";
import ProviderButton from "../buttons/ProviderButton";
import { CurrentStepCircle, StepCircle } from "./StepCircle";

interface Step1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step1 = ({ setStep }: Step1Props) => {
  return (
    <form
      spellCheck={false}
      className="flex flex-col flex-1 w-full max-w-3xl mx-auto overflow-hidden bg-white shadow rounded-2xl"
    >
      <div className="py-10 border-b">
        <h1 className="w-10/12 mx-auto mb-8 text-3xl font-bold text-center text-secondary">
          Join Groundwork!
        </h1>
        <div className="flex items-center justify-between w-10/12 mx-auto md:w-9/12 xl:w-7/12">
          <CurrentStepCircle num="1" desc="Type" />
          <StepCircle num="2" desc="Basic Info" />
          <StepCircle num="3" desc="More Info" />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 w-10/12 py-10 mx-auto md:w-9/12 xl:w-7/12">
        <div className="flex flex-col">
          <Select label="I am a" choices={["Buyer", "Seller"]} />

          <ProviderButton auth="Facebook" Icon={FaFacebook} />
          <ProviderButton auth="Google" Icon={FaGoogle} />
          <ProviderButton auth="Yahoo" Icon={FaYahoo} />
        </div>

        <button
          onClick={() => setStep(2)}
          className="w-full p-3 mt-10 text-center text-white rounded-lg bg-secondary primary-ring bottom-4 hover:bg-opacity-90"
          type="button"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default Step1;
