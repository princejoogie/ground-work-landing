import "../styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <Component {...pageProps} key={router.route} />;
    </AnimatePresence>
  );
}
export default MyApp;
