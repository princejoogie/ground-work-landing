import React from "react";
import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";
import { useSeo } from "@/hooks";

const Blog: NextPage = () => {
  const { seo } = useSeo({ page: "Blog" });

  return (
    <HomeLayout {...seo}>
      <div className="flex flex-col mt-8">
        <Container>
          <h1>Blog</h1>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Blog;
