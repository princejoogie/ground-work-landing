import React from "react";
import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";
import ContactForm from "@/components/contact/ContactForm";

const title = "Ground Work | Contact";
const description =
  "An online B2B platform designed to create and gather networks for business establishments in the country!";
const url = "https://ground-work-ph.vercel.app/about";
const imageUrl = `https://ground-work-ph.vercel.app/assets/images/final-group-photo.png`;

const Contact: NextPage = () => {
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
        <Container className="py-10">
          <h2 className="text-3xl about-headings md:text-5xl">
            CONTACT
            <span className="underlined" />
          </h2>
          <p
            style={{ maxWidth: "700px" }}
            className="mx-auto mb-20 text-center"
          >
            Don&apos;t hesitate to reach out to us! Send in all your inquirers,
            queries or concerns and we will do our best to reply as soon as we
            can. Thank you very much!
          </p>

          <ContactForm />
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Contact;
