import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import { CurrentStepCircle, StepCircle } from "./StepCircle";

interface SignUpFormProps {
  children: React.ReactNode;
  title: string;
  step: number;
  move: React.Dispatch<React.SetStateAction<number>>;
  proceed: number;
  back: number;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  children,
  title,
  step,
  move,
  proceed,
  back,
}) => {
  return (
    <form
      spellCheck="false"
      className="bg-white rounded-2xl flex flex-col items-center w-[95%] md:w-[600px] mx-auto min-h-screen pb-8 shadow-xl"
    >
      <div className="w-full flex flex-col items-center py-8 shadow-lg rounded-b-lg">
        <div className="text-center flex items-center justify-center mb-8 relative w-full">
          {step === 1 || (
            <button
              type="button"
              onClick={() => move(back)}
              className="sm:text-3xl text-xl absolute left-8"
            >
              <BiArrowBack />
            </button>
          )}
          <h1 className="font-bold text-2xl md:text-3xl text-secondary">
            {title}
          </h1>
        </div>

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

      <div className="w-[90%] sm:w-[70%] mt-8 flex flex-col">
        {children}

        <button
          onClick={() => move(proceed)}
          className="bg-secondary mb-4 text-white rounded-lg text-center p-3 text-sm md:text-base primary-ring w-[100%] hover:bg-opacity-90"
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
