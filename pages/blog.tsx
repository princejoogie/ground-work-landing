import type { NextPage } from "next";
import { Container, Layout, HomeNavbar } from "@/components";

const Blog: NextPage = () => {
  return (
    <Layout
      title="Ground Work | Home"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <HomeNavbar />

      <div className="flex flex-col mt-8">
        <Container>
          <h1>Blog</h1>
        </Container>
      </div>
    </Layout>
  );
};

export default Blog;
