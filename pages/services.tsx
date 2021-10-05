import React from "react";
import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";
import ServicesPage from "@/components/services";

const Services: NextPage = () => {
  return (
    <HomeLayout
      title="Ground Work | Services"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col mt-8">
        <Container>
          <ServicesPage />
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Services;
