import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ceo = "/assets/images/about/members/CEO-Kaiylah.jpg";
const cmo = "/assets/images/about/members/CMO-Amadeo.jpg";
const coo = "/assets/images/about/members/COO-AJ.jpg";
const cfo = "/assets/images/about/members/CFO-Marlyn.jpg";

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

const Team = () => {
  return (
    <div className="grid w-full grid-cols-1 mb-20 sm:grid-cols-2 sm:gap-20">
      {team.map((member, i) => {
        const { pos, name, image, fb, twitter, linkedin } = member;

        const imgPos = i % 2 === 0;

        return (
          <div
            key={name}
            className={`flex flex-col p-3 ${
              imgPos ? "place-self-end" : "place-self-start"
            } overflow-hidden w-72 md:w-96`}
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
                  <h3 className="font-extrabold text-md md:text-lg">{pos}</h3>
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
  );
};

export default Team;
