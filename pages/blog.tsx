import type { NextPage } from "next";
import { Container, HomeLayout, HomeNavbar } from "@/components";

const Blog: NextPage = () => {
  return (
    <HomeLayout
      title="Ground Work | Blog"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col mt-8">
        <Container>
          <h1>Blog</h1>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Blog;
