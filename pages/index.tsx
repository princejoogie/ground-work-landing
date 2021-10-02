import type { NextPage } from "next";
import Head from "next/head";
import { Container, Layout } from "../src/components";

const Home: NextPage = () => {
  return (
    <Layout
      title="Ground Work"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nobis."
    >
      <div className="flex flex-col">
        <Container>
          <h1>Hello World</h1>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
