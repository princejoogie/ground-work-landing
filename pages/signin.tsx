import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { FaFacebook, FaGoogle, FaYahoo } from "react-icons/fa";
import { Container, HomeLayout } from "@/components";
import { ProviderButton } from "@/components/buttons";
import { useSeo } from "@/hooks";

const Home: NextPage = () => {
  const { seo } = useSeo({ page: "Sign In", route: "signin" });

  return (
    <HomeLayout {...seo}>
      <div className="flex flex-col">
        <Container className="grid place-items-center">
          <section className="mt-16 bg-white shadow-xl py-8 md:px-8 px-3 text-center rounded-2xl w-[95%] md:w-[600px]">
            <div className="mb-12 text-secondary">
              <h1 className="text-2xl font-bold md:text-3xl">Sign In</h1>
              <p>login to your groundwork account</p>
            </div>

            <div className="flex flex-col sm:w-[400px] mx-auto">
              <ProviderButton signIn auth="Facebook" Icon={FaFacebook} />
              <ProviderButton signIn auth="Google" Icon={FaGoogle} />
              <ProviderButton signIn auth="Yahoo" Icon={FaYahoo} />
            </div>

            <p className="mt-16 text-center text-secondary">
              Not Yet Registered?
              <Link href="/signup">
                <a className="font-semibold"> Sign Up</a>
              </Link>
            </p>
          </section>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Home;
