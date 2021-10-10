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
      className="bg-white rounded-2xl flex flex-1 flex-col items-center w-[95%] md:w-[600px] mx-auto pb-8 shadow-xl"
    >
      <div className="flex flex-col items-center w-full py-8 rounded-b-lg shadow-lg">
        <div className="relative flex items-center justify-center w-full mb-8 text-center">
          {step !== 1 && (
            <button
              type="button"
              onClick={() => move(back)}
              className="absolute text-xl sm:text-3xl left-8"
            >
              <BiArrowBack />
            </button>
          )}
          <h1 className="text-2xl font-bold md:text-3xl text-secondary">
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
