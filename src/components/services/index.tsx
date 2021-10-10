import React from "react";
import Image from "next/image";

const suppliers = "/assets/images/services/suppliers.jpg";
const job = "/assets/images/services/job-listings.jpg";
const commercial = "/assets/images/services/commercial-spaces.jpg";
const other = "/assets/images/services/other-services.jpeg";

const suppliersMin = "/assets/images/services/suppliers.min.jpg";
const jobMin = "/assets/images/services/job-listings.min.jpg";
const commercialMin = "/assets/images/services/commercial-spaces.jpg";
const otherMin = "/assets/images/services/other-services.min.jpg";

const services = [
  {
    image: suppliers,
    imageMin: suppliersMin,
    name: "Suppliers",
  },
  {
    image: job,
    imageMin: jobMin,
    name: "Job Listings",
  },
  {
    image: commercial,
    imageMin: commercialMin,
    name: "Commercial Spaces",
  },
  {
    image: other,
    imageMin: otherMin,
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
        {services.map(({ image, imageMin, name }, i) => {
          const imgPos = i % 2 === 0;

          return (
            <div
              key={name}
              className={`h-auto mx-auto md:mx-0 bg-gray-200 w-80 md:w-96 ${
                imgPos ? "place-self-end" : "place-self-start"
              }`}
            >
              <div className="relative w-full h-80 md:h-96">
                <Image
                  src={image}
                  alt={name}
                  quality={40}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  blurDataURL={imageMin}
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
