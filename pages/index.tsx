<<<<<<< Updated upstream
import type { NextPage } from "next";
import { Container, Layout, Navbar } from "@/components";

const Home: NextPage = () => {
  return (
    <Layout
      title="Ground Work"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nobis."
    >
      <Navbar />
      <div className="flex flex-col">
        <Container>
          <h1>Hello World</h1>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
=======
import type { NextPage } from "next";
import { Container, Layout, HomeNavbar } from "@/components";

const Index: NextPage = () => {
  return (
    <Layout
      title="Ground Work"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <HomeNavbar />

      <div className="flex flex-col mt-8">
        <Container>
          <h1>Home</h1>
        </Container>
      </div>
    </Layout>
  );
};

export default Index;
>>>>>>> Stashed changes
