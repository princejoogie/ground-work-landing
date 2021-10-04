import React from "react";
import Image from "next/image";

const talo = "/assets/images/about/clients/talo.png";
const solidState = "/assets/images/about/clients/solid-state.png";
const noted = "/assets/images/about/clients/noted.png";
const goan = "/assets/images/about/clients/goan.png";
const mowi = "/assets/images/about/clients/mowi.png";

const clients = [
  {
    image: talo,
    alt: "Talo",
  },
  {
    image: solidState,
    alt: "Solid State",
  },
  {
    image: noted,
    alt: "Noted",
  },
  {
    image: goan,
    alt: "Goan",
  },
  {
    image: mowi,
    alt: "Mowi",
  },
];

const Clients = () => {
  return (
    <div className="mb-10">
      <h2 className="about-headings">
        OUR CLIENTS
        <span className="underlined" />
      </h2>
      <div className="flex justify-evenly">
        {clients.map(({ image, alt }) => (
          <div className="relative">
            <Image
              src={image}
              alt={`${alt} Logo`}
              width={150}
              height={150}
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
