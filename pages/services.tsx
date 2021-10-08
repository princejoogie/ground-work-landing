import React from "react";
import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";
import ServicesPage from "@/components/services";

const title = "Ground Work | Services";
const description =
  "An online B2B platform designed to create and gather networks for business establishments in the country!";
const url = "https://ground-work-ph.vercel.app/about";
const imageUrl = `https://ground-work-ph.vercel.app/assets/images/final-group-photo.png`;

const Services: NextPage = () => {
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
      <div className="flex flex-col mt-8">
        <Container>
          <ServicesPage />
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Services;
