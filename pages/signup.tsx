import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Container, Footer } from "@/components";
import { Step1, Step2, Step3 } from "@/components/signup";

const title = "Ground Work | Sign Up";
const description =
  "An online B2B platform designed to create and gather networks for business establishments in the country!";
const url = "https://ground-work-ph.vercel.app/about";
const imageUrl = `https://ground-work-ph.vercel.app/assets/images/final-group-photo.png`;

const SignUp: NextPage = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: "Group Photo",
              type: "image/png",
            },
          ],
          type: "website",
          site_name: "Ground Work",
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@groundwork_ph",
          site: "@groundwork_ph",
        }}
      />

      <div className="min-h-screen bg-gray-100">
        <Container className="flex flex-col min-h-screen py-10 ">
          <AnimatePresence>
            {step === 1 && <Step1 setStep={setStep} step={step} />}
            {step === 2 && <Step2 setStep={setStep} step={step} />}
            {step === 3 && <Step3 setStep={setStep} step={step} />}
          </AnimatePresence>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
