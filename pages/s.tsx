import type { NextPage } from "next";
import { Container, Layout, HomeNavbar } from "@/components";

const Home: NextPage = () => {
  return (
    <Layout
      title="Ground Work | Home"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col">
        <Container>
          <h1>Store Home</h1>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
