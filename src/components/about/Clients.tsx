import React from "react";
import Image from "next/image";
import talo from "../../../public/assets/images/about/clients/talo.png";
import solidState from "../../../public/assets/images/about/clients/solid-state.png";
import noted from "../../../public/assets/images/about/clients/noted.png";
import goan from "../../../public/assets/images/about/clients/goan.png";
import mowi from "../../../public/assets/images/about/clients/mowi.png";

interface PartnersProps {}

const Partners: React.FC<PartnersProps> = () => {
  return (
    <div className="mb-10">
      <h2 className="about-headings">
        OUR CLIENTS
        <span className="underlined" />
      </h2>
      <div className="relative flex justify-center h-32">
        <Image
          src={talo}
          alt="Talo Logo"
          objectFit="contain"
          objectPosition="center"
        />
        <Image
          src={solidState}
          alt="Solid State Logo"
          objectFit="contain"
          objectPosition="center"
        />
        <Image
          src={noted}
          alt="Noted Logo"
          objectFit="contain"
          objectPosition="center"
        />
        <Image
          src={goan}
          alt="Goan Logo"
          objectFit="contain"
          objectPosition="center"
        />
        <Image
          src={mowi}
          alt="Mowi Logo"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Partners;
