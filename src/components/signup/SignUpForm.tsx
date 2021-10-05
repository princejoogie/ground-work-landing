import React from "react";
import Link from "next/link";

import { CurrentStepCircle, StepCircle } from "./StepCircle";

interface SignUpFormProps {
  children: React.ReactNode;
  title: string;
  step: number;
  proceed: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  children,
  title,
  step,
  proceed,
}) => {
  return (
    <form
      spellCheck="false"
      className="flex flex-col items-center flex-1 w-full max-w-2xl pb-8 mx-auto bg-white shadow-xl rounded-2xl"
    >
      <div className="flex flex-col items-center w-full py-8 border-b border-gray-300">
        <h1 className="mb-8 text-2xl font-bold md:text-3xl text-secondary">
          {title}
        </h1>

        <div className="flex justify-between w-[90%] sm:w-[70%]">
          {step === 1 && (
            <>
              <CurrentStepCircle num="1" desc="Sign Up" />
              <StepCircle num="2" desc="Basic Info" />
              <StepCircle num="3" desc="More Info" />
            </>
          )}

          {step === 2 && (
            <>
              <CurrentStepCircle num="1" desc="Sign Up" />
              <CurrentStepCircle num="2" desc="Basic Info" />
              <StepCircle num="3" desc="More Info" />
            </>
          )}

          {step === 3 && (
            <>
              <CurrentStepCircle num="1" desc="Sign Up" />
              <CurrentStepCircle num="2" desc="Basic Info" />
              <CurrentStepCircle num="3" desc="More Info" />
            </>
          )}
        </div>
      </div>

      <div className="w-[90%] flex-1 sm:w-[70%] mt-8 flex flex-col">
        <div className="flex-1">{children}</div>

        <button
          onClick={proceed}
          className="bg-secondary mb-4 text-white rounded-lg text-center p-3 text-sm md:text-base primary-ring w-[100%] hover:bg-opacity-90 mt-10"
          type="button"
        >
          Proceed
        </button>

        <p className="text-center text-secondary">
          Already Registered?
          <Link href="/signin">
            <a className="font-semibold"> Sign In</a>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
