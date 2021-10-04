import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import ceo from "../../../public/assets/images/about/members/CEO-Kaiylah.jpg";
import cmo from "../../../public/assets/images/about/members/CMO-Amadeo.jpg";
import coo from "../../../public/assets/images/about/members/COO-AJ.jpg";
import cfo from "../../../public/assets/images/about/members/CFO-Marlyn.jpg";

const team = [
  {
    pos: "Chief Executive Officer",
    name: "Kaiylah Landingin",
    image: ceo,
    fb: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    pos: "Chief Marketing Officer",
    name: "Amadeo Benedito",
    image: cmo,
    fb: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    pos: "Chief Operating Officer",
    name: "AJ Almasco",
    image: coo,
    fb: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    pos: "Chief Financial Officer",
    name: "Marlyn Montevirgen",
    image: cfo,
    fb: "#",
    twitter: "#",
    linkedin: "#",
  },
];

const CompanyBackground = () => {
  return (
    <section className="mt-20">
      <div className="py-10 md:py-20 bg-[#ffef98] text-center ">
        <h2 className="px-10 mb-10 text-2xl font-bold text-center md:text-5xl">
          COMPANY BACKGROUND
        </h2>
        <p className="px-10 text-sm md:text-lg">
          <strong>GROUNDWORK PHILIPPINES</strong> is a startup technology-based
          business founded by four college named Adriel Jordan S. Almasco,
          Amadeo L. Benedito, Shermanne Kaiylah V. Landingin and Marlyn Joy M.
          Montevirgen. The company offers a mobile application that links
          startup entrepreneurs to different suppliers, commercial space owners,
          employees and more which are coming from different business
          industries. The four founding members share a vision of more Filipino
          people putting up their own establishments in order to press on
          towards a better future, not just for themselves but the entire
          country.
        </p>
      </div>
      <div className="py-20">
        <h2 className="about-headings">
          OUR TEAM
          <span className="underlined" />
        </h2>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-5">
          {team.map((member) => {
            const { pos, name, image, fb, twitter, linkedin } = member;

            return (
              <div
                key={name}
                className="flex flex-col items-center p-3 mx-auto overflow-hidden w-72 md:w-96"
              >
                <div className="relative w-full h-72 md:h-96">
                  <Image
                    src={image}
                    quality={50}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                <div className="self-start w-full mx-auto">
                  <div className="flex justify-between py-4">
                    <div>
                      <h2 className="font-medium text-md md:text-xl">{name}</h2>
                      <h3 className="font-extrabold text-md md:text-lg">
                        {pos}
                      </h3>
                    </div>
                    <div className="flex">
                      <a
                        href={fb}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="ml-3"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href={twitter}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="ml-3"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="ml-3"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyBackground;
