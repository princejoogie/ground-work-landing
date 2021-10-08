import React from "react";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import NProgress from "nprogress";
import { AuthProvider } from "@/contexts/AuthContext";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
    </AuthProvider>
  );
}
export default MyApp;
