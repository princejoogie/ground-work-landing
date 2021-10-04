import React from "react";
import Image from "next/image";

const suppliers = "/assets/images/services/suppliers.jpg";
const job = "/assets/images/services/job-listings.jpg";
const commercial = "/assets/images/services/commercial-spaces.jpg";
const other = "/assets/images/services/other-services.jpeg";

const services = [
  {
    image: suppliers,
    name: "Suppliers",
  },
  {
    image: job,
    name: "Job Listings",
  },
  {
    image: commercial,
    name: "Commercial Spaces",
  },
  {
    image: other,
    name: "Other Services",
  },
];

const ServicesPage = () => {
  return (
    <section className="py-10">
      <h1 className="mb-20 text-3xl md:text-5xl about-headings">
        Services Provided
        <span className="underlined" />
      </h1>
      <div className="grid grid-cols-1 gap-12 md:gap-20 md:grid-cols-2">
        {services.map(({ image, name }, i) => {
          const imgPos = i % 2 === 0;

          return (
            <div
              className={`h-auto mx-auto md:mx-0 bg-gray-200 w-80 md:w-96 ${
                imgPos ? "place-self-end" : "place-self-start"
              }`}
            >
              <div className="relative w-full h-80 md:h-96">
                <Image
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h3 className="px-1 py-4 text-2xl font-semibold text-center uppercase md:text-3xl md:py-6">
                {name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesPage;
