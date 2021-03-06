import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Container } from "@/components";
import { Step1, Step2, Step3 } from "@/components/signup";
import { useSeo } from "@/hooks";

const SignUp: NextPage = () => {
  const { seo } = useSeo({ page: "Sign Up", route: "signup" });
  const [step, setStep] = useState(1);

  return (
    <>
      <NextSeo {...seo} />

      <div className="bg-gray-100">
        <Container className="flex flex-col min-h-screen py-10">
          <AnimatePresence>
            {step === 1 && <Step1 setStep={setStep} step={step} />}
            {step === 2 && <Step2 setStep={setStep} step={step} />}
            {step === 3 && <Step3 setStep={setStep} step={step} />}
          </AnimatePresence>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
