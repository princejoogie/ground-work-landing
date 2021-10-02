import type { NextPage } from "next";
import { Container, Layout, HomeNavbar } from "@/components";

const Services: NextPage = () => {
  return (
    <Layout
      title="Ground Work | Services"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col mt-8">
        <Container>
          <h1>Services</h1>
        </Container>
      </div>
    </Layout>
  );
};

export default Services;
