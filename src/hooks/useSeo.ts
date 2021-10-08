import { NextSeoProps } from "next-seo";

const useSeo = ({ page }: { page: string }) => {
  const seo: NextSeoProps = {
    title: `GroundWork Work | ${page}`,
    description:
      "An online B2B platform designed to create and gather networks for business establishments in the country!",
    openGraph: {
      url: "https://ground-work-ph.vercel.app/",
      title: `Ground Work | ${page}`,
      description:
        "An online B2B platform designed to create and gather networks for business establishments in the country!",
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ground-work-ph.appspot.com/o/seo%2Fog-group-member-800-600.jpg?alt=media&token=261b92c8-e79d-4b34-8894-e72a12d3dd7e",
          width: 800,
          height: 600,
          alt: "Group Photo",
          type: "image/jpeg",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ground-work-ph.appspot.com/o/seo%2Fog-group-member-900-800.jpg?alt=media&token=b2ab794d-e7a1-438d-a8f7-9e5249a2b84e",
          width: 900,
          height: 800,
          alt: "Group Photo",
          type: "image/png",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ground-work-ph.appspot.com/o/seo%2Fog-group-photo.jpg?alt=media&token=f0b1a67a-7342-449a-beca-5e7654bf3819",
        },
      ],
      type: "website",
      site_name: "Ground Work",
    },
    twitter: {
      cardType: "summary_large_image",
      handle: "@groundwork_ph",
      site: "@groundwork_ph",
    },
  };

  return { seo };
};

export default useSeo;
