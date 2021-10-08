import React from "react";
import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";
import ServicesPage from "@/components/services";
import { useSeo } from "@/hooks";

const Services: NextPage = () => {
  const { seo } = useSeo({ page: "Services" });
  return (
    <HomeLayout {...seo}>
      <div className="flex flex-col mt-8">
        <Container>
          <ServicesPage />
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Services;
