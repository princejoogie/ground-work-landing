import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { motion } from "framer-motion";

import { Footer, HomeNavbar, LoadingProvider } from "@/components";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Layout: React.FC<NextSeoProps> = ({ children, ...rest }) => {
  return (
    <div className="bg-gray-100">
      <NextSeo {...rest} />
      <LoadingProvider>
        <HomeNavbar />

        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        >
          {children}
        </motion.main>

        <Footer />
      </LoadingProvider>
    </div>
  );
};

export default Layout;
