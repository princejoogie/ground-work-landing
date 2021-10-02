import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <Component {...pageProps} key={router.route} />;
    </AnimatePresence>
  );
}
export default MyApp;
