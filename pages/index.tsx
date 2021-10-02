import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../src/components";

const Home: NextPage = () => {
  return (
    <Layout
      title="Ground Work"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nobis."
    >
      <h1>Hello World</h1>
    </Layout>
  );
};

export default Home;
