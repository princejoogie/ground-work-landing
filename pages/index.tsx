import React from "react";
import type { NextPage } from "next";
import styles from "@styles/home.module.css";
import {
  Container,
  HomeLayout,
  HowToUse,
  Partners,
  SignupSection,
  Testimonial,
} from "@/components";
import { LinkButton } from "@/components/buttons";

const Index: NextPage = () => {
  return (
    <HomeLayout
      title="Ground Work | Home"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="relative">
        <div className={styles.bgImage} />

        <Container className="relative flex flex-col items-center py-32 lg:items-start lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full space-y-8 text-center lg:text-left lg:items-start md:w-1/3">
            <h1 className="text-3xl font-bold uppercase md:text-5xl">
              <span className="text-secondary">Groundwork</span>
              <span className="text-primary"> Philippines</span>
            </h1>

            <p className="text-sm lg:text-base">
              An online B2B platform designed to create and gather networks for
              business establishments in the country!
            </p>

            <LinkButton href="#" text="Learn more" />
          </div>

          <div className="mt-10 lg:mt-0 2/3">
            <div className="w-4/5 mx-auto lg:ml-auto lg:mx-0">
              <video
                controls
                autoPlay
                src="/assets/videos/home/home_video.mp4"
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="flex flex-col mt-8">
        <Container className="h-auto pt-20">
          <HowToUse />
        </Container>
      </div>

      <Testimonial />

      <Container className="py-10 md:py-16">
        <Partners />
      </Container>

      <SignupSection />
    </HomeLayout>
  );
};

export default Index;
