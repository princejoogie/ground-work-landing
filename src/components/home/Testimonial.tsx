import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Container } from "..";

//! Slideshow docs: https://react-slideshow-image.netlify.app/

const testimonials = [
  {
    text: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    person: "Zomer",
    place: "PH",
  },
  {
    text: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    person: "Joogie",
    place: "PH",
  },
  {
    text: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    person: "Joshxfi",
    place: "PH",
  },
];

const Testimonial = () => {
  return (
    <section className="text-center py-10 md:py-20 bg-[#a7d1d4]">
      <Container>
        <h2 className="px-6 home-headings">WHAT PEOPLE SAY</h2>
        <Slide easing="ease" duration={2000} arrows={false} indicators>
          {testimonials.map(({ text, person, place }, index) => {
            return (
              <div key={person} className="w-3/5 mx-auto each-slide">
                <p className="relative my-16 text-xl font-light md:text-4xl lg:text-6xl">
                  {`${index + 1}. ${text}`}
                </p>
                <p>
                  <span className="font-bold">{person},</span>{" "}
                  <span>{place}</span>
                </p>
              </div>
            );
          })}
        </Slide>
      </Container>
    </section>
  );
};

export default Testimonial;
