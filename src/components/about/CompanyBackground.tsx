import React from "react";

const CompanyBackground = () => {
  return (
    <section className="relative mt-20">
      <div className="py-10 md:py-20 bg-[#ffef98] text-center ab">
        <h2 className="px-10 mb-10 text-2xl font-bold text-center md:text-5xl">
          COMPANY BACKGROUND
        </h2>
        <p
          style={{ maxWidth: "1000px" }}
          className="px-10 mx-auto text-sm md:text-lg"
        >
          <strong>GROUNDWORK PHILIPPINES</strong> is a startup technology-based
          business founded by four college named Adriel Jordan S. Almasco,
          Amadeo L. Benedito, Shermanne Kaiylah V. Landingin and Marlyn Joy M.
          Montevirgen. The company offers a mobile application that links
          startup entrepreneurs to different suppliers, commercial space owners,
          employees and more which are coming from different business
          industries. The four founding members share a vision of more Filipino
          people putting up their own establishments in order to press on
          towards a better future, not just for themselves but the entire
          country.
        </p>
      </div>
      <div className="py-20">
        <h2 className="about-headings">
          OUR TEAM
          <span className="underlined" />
        </h2>
      </div>
    </section>
  );
};

export default CompanyBackground;
