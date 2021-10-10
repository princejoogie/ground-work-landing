import React from "react";
import type { NextPage } from "next";
import { CorporateContactJsonLd } from "next-seo";

import { Container, HomeLayout } from "@/components";
import ContactForm from "@/components/contact/ContactForm";
import { useSeo } from "@/hooks";

const Contact: NextPage = () => {
  const { seo } = useSeo({
    page: "Contact",
    route: "contact",
  });

  return (
    <>
      <CorporateContactJsonLd
        url="https://ground-work-ph.vercel.app"
        logo="https://firebasestorage.googleapis.com/v0/b/ground-work-ph.appspot.com/o/seo%2Flogo1.png?alt=media&token=a40bcac4-8adb-4330-b2be-701946d32319"
        contactPoint={[
          {
            telephone: "+63912345679",
            contactType: "customer service",
            areaServed: "PH",
            availableLanguage: ["English", "Filipino"],
          },
        ]}
      />
      <HomeLayout {...seo}>
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
              Don&apos;t hesitate to reach out to us! Send in all your
              inquirers, queries or concerns and we will do our best to reply as
              soon as we can. Thank you very much!
            </p>

            <ContactForm />
          </Container>
        </div>
      </HomeLayout>
    </>
  );
};

export default Contact;
