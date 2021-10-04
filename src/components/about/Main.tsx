import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/assets/images/about/about-image.jpg";

const Main = () => {
  return (
    <section className="py-10 text-center">
      <div className="mb-10">
        <h1 className="mb-3 text-5xl font-bold md:text-6xl">About Us</h1>
        <h2 className="mb-8 text-xl">
          We create the network to establish your groundwork!
        </h2>
        <div className="w-full mx-auto text-sm md:text-md lg:w-2/3">
          <p className="mb-5">
            Inaugurated as an Enterprise Development Implementation, Groundwork
            Philippines is co-founded by four business students from Saint Louis
            University, Inc. In pursuit of helping entrepreneurs in the
            Philippines, Groundwork Philippines is on a mission to break
            barriers and build bridges across industries.
          </p>
          <p>
            Groundwork Philippines is a business-to-business platform designed
            to equip enterprises with business resources by creating linkages
            between industries. This tech company based in the Philippines
            specializes in creating networks in order to establish startup
            business’ groundwork.
          </p>
        </div>
      </div>

      <div className="relative h-52 md:h-80 lg:h-96">
        <Image
          src={aboutImage}
          layout="fill"
          quality={30}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </section>
  );
};

export default Main;
