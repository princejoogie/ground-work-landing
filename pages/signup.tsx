import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Container } from "@/components";
import { Step1, Step2, Step3 } from "@/components/signup";

const SignUp: NextPage = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <NextSeo
        title="Ground Work | Sign Up"
        description="An online B2B platform designed to create and gather networks for business establishments in the country!"
      />

      <div className="min-h-screen bg-gray-100">
        <Container className="flex flex-col min-h-screen py-10 ">
          <AnimatePresence>
            {step === 1 && <Step1 setStep={setStep} />}
            {step === 2 && <Step2 setStep={setStep} />}
            {step === 3 && <Step3 setStep={setStep} />}
          </AnimatePresence>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
