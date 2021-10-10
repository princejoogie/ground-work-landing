import React from "react";
import Image from "next/image";

const infoData = "/assets/images/home/partners/info-data.png";
const leadersChoice = "/assets/images/home/partners/leaders-choice.png";
const statKings = "/assets/images/home/partners/stat-kings.png";
const upPrime = "/assets/images/home/partners/up-prime.png";

const images = [
  {
    key: "info-data-logo",
    alt: "Info Data Logo",
    image: infoData,
  },
  {
    key: "leaders-choice-logo",
    alt: "Leaders Choice Logo",
    image: leadersChoice,
  },
  {
    key: "stat-kings-logo",
    alt: "Stat Kings Logo",
    image: statKings,
  },
  {
    key: "up-prime-logo",
    alt: "Up Prime Logo",
    image: upPrime,
  },
];

interface PartnersProps {}

const Partners: React.FC<PartnersProps> = () => {
  return (
    <div className="">
      <h2 className="home-headings">OUR PARTNERS</h2>
      <div className="relative flex justify-evenly h-60">
        {images.map(({ key, alt, image }) => (
          <React.Fragment key={key}>
            <Image
              src={image}
              alt={alt}
              width={250}
              height={250}
              objectFit="contain"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={image}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Partners;
