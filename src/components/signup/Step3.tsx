import React from "react";

import Select from "./Select";
import Input from "./Input";
import SignUpForm from "./SignUpForm";

// eslint-disable-next-line no-undef
const Step3 = ({ setStep, step }: StepProps) => {
  return (
    <SignUpForm
      title="Almost There!"
      step={step}
      move={setStep}
      proceed={1}
      back={2}
    >
      <Input label="Company Name" />
      <Select
        label="Business Industry"
        choices={["Industry 1", "Industry 2", "Industry 3"]}
      />
      <Select
        label="Products Offered"
        choices={["Product 1", "Product 2", "Product 3"]}
      />
    </SignUpForm>
  );
};

export default Step3;
