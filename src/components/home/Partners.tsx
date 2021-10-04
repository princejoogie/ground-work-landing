import React from "react";
import Image from "next/image";
import infoData from "../../../public/assets/images/home/partners/info-data.png";
import leadersChoice from "../../../public/assets/images/home/partners/leaders-choice.png";
import statKings from "../../../public/assets/images/home/partners/stat-kings.png";
import upPrime from "../../../public/assets/images/home/partners/up-prime.png";

interface PartnersProps {}

const Partners: React.FC<PartnersProps> = () => {
  return (
    <div className="">
      <h2 className="home-headings">OUR PARTNERS</h2>
      <div className="relative flex justify-center h-60">
        <Image
          src={leadersChoice}
          alt="Leaders Choice Logo"
          objectFit="contain"
          objectPosition="center"
        />
        <Image
          src={infoData}
          alt="Info Data Logo"
          objectFit="contain"
          objectPosition="center"
        />
        <Image
          src={statKings}
          alt="Stat Kings Logo"
          objectFit="contain"
          objectPosition="center"
        />
        <Image
          src={upPrime}
          alt="Up Prime Logo"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Partners;
