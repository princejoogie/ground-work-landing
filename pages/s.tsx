import React from "react";
import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";
import { useSeo } from "@/hooks";

const Home: NextPage = () => {
  const { seo } = useSeo({ page: "Home" });

  return (
    <HomeLayout {...seo}>
      <div className="flex flex-col">
        <Container>
          <h1>Store Home</h1>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Home;
