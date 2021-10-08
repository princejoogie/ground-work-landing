import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { FaFacebook, FaGoogle, FaYahoo } from "react-icons/fa";
import { Container, HomeLayout } from "@/components";
import { ProviderButton } from "@/components/buttons";

const title = "Ground Work | Sign In";
const description =
  "An online B2B platform designed to create and gather networks for business establishments in the country!";
const url = "https://ground-work-ph.vercel.app/about";
const imageUrl = `${window.location.protocol}//${window.location.host}/assets/images/final-group-photo.png`;

const Home: NextPage = () => {
  return (
    <HomeLayout
      title={title}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: "Group Photo",
            type: "image/png",
          },
        ],
        type: "website",
        site_name: "Ground Work",
      }}
      twitter={{
        cardType: "summary_large_image",
        handle: "@groundwork_ph",
        site: "@groundwork_ph",
      }}
    >
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
