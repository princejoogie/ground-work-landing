import type { NextPage } from "next";
import { Container, Layout, HomeNavbar } from "@/components";

const About: NextPage = () => {
  return (
    <Layout
      title="Ground Work | About"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col mt-8">
        <Container>
          <h1>About</h1>
        </Container>
      </div>
    </Layout>
  );
};

export default About;
