import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";

const girl = "/assets/images/about/slideshow/girl.jpg";
const desert = "/assets/images/about/slideshow/desert.jpg";
const leaves = "/assets/images/about/slideshow/leaves.jpg";
const building = "/assets/images/about/slideshow/building.jpg";

const images = [girl, desert, leaves, building];

const Slideshow = () => {
  return (
    <div className="mt-20">
      <Slide duration={300} slidesToShow={3} indicators arrows={false}>
        {images.map((image) => {
          return (
            <div
              key={image}
              className="relative w-32 h-32 overflow-hidden rounded-full md:w-60 md:h-60"
            >
              <Image
                src={image}
                layout="fill"
                quality={30}
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL={image}
              />
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;
