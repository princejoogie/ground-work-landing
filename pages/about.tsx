import React from "react";
import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";
import {
  Clients,
  CompanyBackground,
  Main,
  MissionVision,
  Team,
} from "@/components/about";
import { useSeo } from "@/hooks";

const About: NextPage = () => {
  const { seo } = useSeo({ page: "About" });

  return (
    <HomeLayout {...seo}>
      <div className="flex flex-col mt-8">
        <Container>
          <Main />
          <MissionVision />
        </Container>
      </div>

      <CompanyBackground />

      <Container>
        <Team />
        <Clients />
      </Container>
    </HomeLayout>
  );
};

export default About;
