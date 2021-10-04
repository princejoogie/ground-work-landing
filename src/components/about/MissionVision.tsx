import React from "react";
import Slideshow from "./Slideshow";

const MissionVision = () => {
  return (
    <section className="py-10">
      <h2 className="about-headings">
        VISION MISSION
        <span className="underlined" />
      </h2>

      <div className="w-full mx-auto text-sm text-center md:text-md lg:w-2/3">
        <p className="mb-5">
          Inaugurated as an Enterprise Development Implementation, Groundwork
          Philippines is co-founded by four business students from Saint Louis
          University, Inc. In pursuit of helping entrepreneurs in the
          Philippines, Groundwork Philippines is on a mission to break barriers
          and build bridges across industries.
        </p>
        <p>
          Groundwork Philippines is a business-to-business platform designed to
          equip enterprises with business resources by creating linkages between
          industries. This tech company based in the Philippines specializes in
          creating networks in order to establish startup business’ groundwork.
        </p>
      </div>

      <Slideshow />
    </section>
  );
};

export default MissionVision;
