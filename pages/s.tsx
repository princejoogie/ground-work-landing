import type { NextPage } from "next";
import { Container, HomeLayout, HomeNavbar } from "@/components";

const Home: NextPage = () => {
  return (
    <HomeLayout
      title="Ground Work | Home"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col">
        <Container>
          <h1>Store Home</h1>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Home;
