import React from "react";
import type { NextPage } from "next";
import { LocalBusinessJsonLd } from "next-seo";

import { Container, HomeLayout } from "@/components";
import ServicesPage from "@/components/services";
import { useSeo } from "@/hooks";

const Services: NextPage = () => {
  const { seo } = useSeo({
    page: "Services",
    route: "services",
    description:
      "Ground Work offers a lot of services like Suppliers, Job Listings, Commercial Spaces, and so much more.",
  });
  return (
    <>
      {/* Change the value on production */}
      <LocalBusinessJsonLd
        type="E-commerce"
        id="https://ground-work-ph.vercel.app"
        name="Ground Work"
        description={seo.description!}
        address={{
          streetAddress: "123 Unknown Street",
          addressLocality: "Makati",
          addressRegion: "NCR",
          postalCode: "12345",
          addressCountry: "PH",
        }}
        makesOffer={[
          {
            priceSpecification: {
              type: "UnitPriceSpecification",
              priceCurrency: "PHP",
              price: "1000-100000",
            },
            itemOffered: {
              name: "Suppliers",
              description: "We have the best suppliers for all your needs.",
            },
          },
          {
            priceSpecification: {
              type: "UnitPriceSpecification",
              priceCurrency: "PHP",
              price: "1000-100000",
            },
            itemOffered: {
              name: "Job Listings",
              description: "We offer jobs for career seekers.",
            },
          },
          {
            priceSpecification: {
              type: "UnitPriceSpecification",
              priceCurrency: "PHP",
              price: "10000-1000000",
            },
            itemOffered: {
              name: "Commercial Spaces",
              description: "We offer spaces or offices for start-up companies.",
            },
          },
          {
            priceSpecification: {
              type: "UnitPriceSpecification",
              priceCurrency: "PHP",
              price: "1000-100000",
            },
            itemOffered: {
              name: "Other Services",
              description: "We also offer a lot more services.",
            },
          },
        ]}
      />
      <HomeLayout {...seo}>
        <div className="flex flex-col mt-8">
          <Container>
            <ServicesPage />
          </Container>
        </div>
      </HomeLayout>
    </>
  );
};

export default Services;
