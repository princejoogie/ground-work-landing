import React from "react";
import Input from "./Input";
import Select from "./Select";
import SignUpForm from "./SignUpForm";

// eslint-disable-next-line no-undef
const Step2 = ({ setStep, step }: StepProps) => {
  return (
    <SignUpForm
      title="Fill in Your Basic Info"
      step={step}
      proceed={() => setStep(3)}
    >
      <Input label="First Name" />
      <Input label="Last Name" />
      <Select choices={["Male", "Female", "Others"]} label="Gender" />
      <Input type="date" label="Birthdate" />
    </SignUpForm>
  );
};

export default Step2;
