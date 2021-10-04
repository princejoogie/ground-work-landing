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
    <form spellCheck="false" className="signup-form">
      <div className="w-full flex flex-col items-center py-8 shadow-lg rounded-b-lg">
        <h1 className="font-bold text-2xl md:text-3xl text-secondary mb-8">
          Join Groundwork!
        </h1>

        <div className="flex justify-between w-[90%] sm:w-[70%]">
          <CurrentStepCircle num="1" desc="Sign Up" />
          <StepCircle num="2" desc="Basic Info" />
          <StepCircle num="3" desc="More Info" />
        </div>
      </div>

      <div className="w-[90%] sm:w-[70%] mt-8 flex flex-col">
        <Select label="I am a" choices={["Buyer", "Seller"]} />

        <ProviderButton auth="Facebook" Icon={FaFacebook} />
        <ProviderButton auth="Google" Icon={FaGoogle} />
        <ProviderButton auth="Yahoo" Icon={FaYahoo} />

        <button
          onClick={() => setStep(2)}
          className="proceed-btn"
          type="button"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default Step1;
