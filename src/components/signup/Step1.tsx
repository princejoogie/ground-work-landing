import React from "react";
import { FaFacebook, FaGoogle, FaYahoo } from "react-icons/fa";

import Select from "./Select";
import ProviderButton from "../buttons/ProviderButton";
import { CurrentStepCircle, StepCircle } from "./StepCircle";

const Step1 = () => {
  return (
    <form
      spellCheck="false"
      className="bg-white rounded-2xl flex flex-col items-center w-[600px] mx-auto min-h-screen relative"
    >
      <div className="w-full flex flex-col items-center py-8 shadow-lg rounded-b-lg">
        <h1 className="font-bold text-3xl text-secondary mb-8">
          Join Groundwork!
        </h1>

        <div className="flex justify-between w-[70%]">
          <CurrentStepCircle num="1" desc="Type" />
          <StepCircle num="2" desc="Basic Info" />
          <StepCircle num="3" desc="More Info" />
        </div>
      </div>

      <div className="w-[70%] mt-8 flex flex-col">
        <Select label="I am a" choices={["Buyer", "Seller"]} />

        <ProviderButton auth="Facebook" Icon={FaFacebook} />
        <ProviderButton auth="Google" Icon={FaGoogle} />
        <ProviderButton auth="Yahoo" Icon={FaYahoo} />

        <button
          className="bg-secondary mb-4 text-white rounded-lg text-center p-3 primary-ring absolute bottom-4 w-[70%]"
          type="button"
        >
          Proceed
        </button>
      </div>
    </form>
  );
};

export default Step1;
