import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { Footer, Navbar } from ".";

const Layout: React.FC<NextSeoProps> = ({ children, ...rest }) => {
  return (
    <div className="bg-gray-100">
      <NextSeo {...rest} />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
