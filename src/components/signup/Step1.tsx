import React from "react";
import { FaFacebook, FaGoogle, FaYahoo } from "react-icons/fa";

import Select from "./Select";
import ProviderButton from "../buttons/ProviderButton";
import SignUpForm from "./SignUpForm";

// eslint-disable-next-line no-undef
const Step1 = ({ setStep, step }: StepProps) => {
  return (
    <SignUpForm title="Join Groundwork!" step={step} proceed={() => setStep(2)}>
      <Select label="I am a" choices={["Buyer", "Seller"]} />

      <ProviderButton auth="Facebook" Icon={FaFacebook} />
      <ProviderButton auth="Google" Icon={FaGoogle} />
      <ProviderButton auth="Yahoo" Icon={FaYahoo} />
    </SignUpForm>
  );
};

export default Step1;
