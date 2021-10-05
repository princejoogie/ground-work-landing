import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { FaFacebook, FaGoogle, FaYahoo } from "react-icons/fa";
import { Container, HomeLayout } from "@/components";
import { ProviderButton } from "@/components/buttons";

const Home: NextPage = () => {
  return (
    <HomeLayout
      title="Ground Work | Home"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col">
        <Container className="grid place-items-center">
          <section className="mt-16 bg-white shadow-xl py-8 md:px-8 px-3 text-center rounded-2xl w-[95%] md:w-[600px]">
            <div className="text-secondary mb-12">
              <h1 className="font-bold text-2xl md:text-3xl">Sign In</h1>
              <p>groundwork.ph</p>
            </div>

            <div className="flex flex-col">
              <ProviderButton signIn auth="Facebook" Icon={FaFacebook} />
              <ProviderButton signIn auth="Google" Icon={FaGoogle} />
              <ProviderButton signIn auth="Yahoo" Icon={FaYahoo} />
            </div>

            <p className="text-center text-secondary mt-16">
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
