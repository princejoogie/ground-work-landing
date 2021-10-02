import type { NextPage } from "next";
import { Container, HomeLayout, HomeNavbar } from "@/components";
import styles from "@styles/home.module.css";

const Index: NextPage = () => {
  return (
    <HomeLayout
      title="Ground Work | Home"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="relative">
        <div className={styles.bgImage} />

        <Container className="relative flex flex-col py-32 lg:flex-row">
          <div className="flex flex-col items-start w-full space-y-8 md:w-1/3">
            <h1 className="text-3xl font-bold uppercase lg:text-5xl">
              <span className="text-secondary">Groundwork</span>
              <br />
              <span className="text-primary">Philippines</span>
            </h1>

            <p className="text-sm lg:text-base">
              An online B2B platform designed to create and gather networks for
              business establishments in the country!
            </p>

            <button className="px-6 py-2 text-xs font-semibold uppercase transition-colors duration-300 border-2 border-black rounded-full lg:text-base hover:text-white hover:bg-black">
              Learn More
            </button>
          </div>

          <div className="w-2/3"></div>
        </Container>
      </div>

      <div className="flex flex-col mt-8">
        {/* <div className="w-1/2">
          <video src="/assets/home_video.mp4" autoPlay></video>
        </div> */}
        <Container>
          <h1>Home</h1>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Index;
