import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/logo1.png";
import { LinkButton } from "../buttons";

const steps = [
  {
    Text: () => (
      <h4>
        Create a <strong>Groundwork.PH</strong> account.
      </h4>
    ),
    href: "/s/signup",
    ctaText: "Create Account",
  },
  {
    Text: () => (
      <h4>
        <strong>Search</strong> for the needed resources for your business.
      </h4>
    ),
    href: "/s/search",
    ctaText: "Start shopping",
  },
  {
    Text: () => (
      <h4>
        <strong>Select and begin</strong> your transactions with suppliers
        around the country!
      </h4>
    ),
    href: "/s",
    ctaText: "Make transactions",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full h-auto">
      <div className="flex flex-col items-center w-full text-center lg:flex-row lg:text-left">
        <div className="relative w-1/2 h-32 lg:h-60">
          <Image
            src={logo}
            alt="Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:ml-4 md:w-1/2 h-60">
          <h2 className="mb-3 text-3xl font-bold text-center lg:text-left lg:text-5xl">
            WHY USE GROUNDWORK.PH?
          </h2>
          <h4 className="text-xl font-semibold text-secondary">
            Because we are dedicated to build trustworthy connections for you!
          </h4>
        </div>
      </div>
      <div className=" my-28">
        <h2 className="mb-5 home-headings">YOU ONLY NEED TO</h2>

        <div className="grid grid-cols-1 overflow-hidden rounded-md md:grid-cols-3">
          {steps.map(({ Text, href, ctaText }, i) => (
            <div
              key={`htu-${href}`}
              className={`flex flex-col justify-between items-start   py-8 px-6 `}
            >
              <div>
                <h3 className="mb-1 text-xl font-bold">{i + 1}.</h3>
                <Text />
              </div>
              <LinkButton
                className="px-3 py-1 mt-5"
                href={href}
                text={ctaText}
                target="_blank"
                rel="noreferrer noopener"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
