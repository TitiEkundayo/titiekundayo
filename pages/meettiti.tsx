import Image from "next/image";
import Footer from "@/components/Footer";
import UnderConstruction1 from "./underconstruction1";
import { TitiNavTitle } from "@/components/Navbar";
import { MeettitipageHero } from "@/components/Hero";
import meettiti1 from "../public/images/HomeImgs/meettiti1.png";
import styles from "../styles/generalstyles/colors.module.scss";

const Meettiti = () => {
  return (
    <div>
      <div>
        <TitiNavTitle />
        <MeettitipageHero />
      </div>

      {/* <div>
				<UnderConstruction1 />
			</div> */}

      <div>
        <MeettitiBody />
      </div>
      <div>
        <MeettitiBody1 />
      </div>
    </div>
  );
};

export default Meettiti;

export const MeettitiBody = () => {
  return (
    <>
      <main className="d-none d-lg-block d-md-block">
        <div className="container">
          <div className="row">
            <div className={"col-lg-6 col-md-6 img-fluid mb-5 mt-5"}>
              <Image src={meettiti1}
                width={ 419}
                height={529}
                alt="/" />
            </div>
            <div className="col-lg-6 col-md-6 mt-5 pt-2">
              <div className="mt-5 pt-3">
                <h5 className={`${styles.secColor}`}>My Intro</h5>
                <div>
                  <h1 className={`mt-3 ${styles.textColor}`}>About Me</h1>
                  <p className={`${styles.textColor}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    eligendi, possimus sit eos nam deserunt beatae atque illo
                    voluptatum, voluptatibus nihil. Molestias assumenda cum
                    harum repudiandae facere error odit soluta. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eligendi.
                  </p>
                </div>
                <div>
                  <h5 className={`${styles.secColor}`}>My Interest</h5>
                </div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    className="bi bi-circle-fill mt-1 ms-2"
                    viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>

                  <p className={`mx-2 mb-5 pb-5 ${styles.textColor}`}>
                    Writing
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    className="bi bi-circle-fill mt-1 ms-2"
                    viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <p className={`mx-2 mb-5 pb-5 ${styles.textColor}`}>
                    Writing
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    className="bi bi-circle-fill mt-1 ms-2"
                    viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <p className={`mx-2 mb-5 pb-5 ${styles.textColor}`}>
                    Writing
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    className="bi bi-circle-fill mt-1 ms-2"
                    viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <p className={`mx-2 mb-5 pb-5 ${styles.textColor}`}>
                    Writing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Section */}
      <main className="d-sm-block d-lg-none d-md-none">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="mt-3">
                <h5 className={`${styles.secColor}`}>My Intro</h5>
                <div>
                  <h1 className={`mt-4 ${styles.textColor}`}>About Me</h1>
                  <p className={`${styles.secColor} mt-4`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    eligendi, possimus sit eos nam deserunt beatae atque illo
                    voluptatum, voluptatibus nihil. Molestias assumenda cum
                    harum repudiandae facere error odit soluta. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eligendi
                    voluptates magnam incidunt temporibus, ipsum ea asperiores
                    assumenda nesciunt quidem, eaque eius omnis et quibusdam
                    sint cum vero totam laudantium. Id.
                  </p>
                </div>
                <div className="col-sm-12 mb-5 mt-5">
                  <Image src={meettiti1}
                    className=" mx-auto d-block img-fluid"
                    width={225}
                    height={310}
                    alt="/" />
                </div>
                <div className="">
                  <h5 className={`${styles.secColor}`}>My Interest</h5>
                </div>
                <div></div>
                <div className="d-flex justify-content-center col-sm-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    className="bi bi-circle-fill mt-1 ms-2"
                    viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <p className={`mx-2 mb-5 pb-5 ${styles.textColor}`}>
                    Writing
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    className="bi bi-circle-fill mt-1 ms-2"
                    viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <p className={`mx-2 mb-5 pb-5 ${styles.textColor}`}>
                    Writing
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    className="bi bi-circle-fill mt-1 ms-2"
                    viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <p className={`mx-2 mb-5 pb-5 ${styles.textColor}`}>
                    Writing
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    className="bi bi-circle-fill mt-1 ms-2"
                    viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <p className={`mx-2 mb-5 pb-5 ${styles.textColor}`}>
                    Writing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const MeettitiBody1 = () => {
  return (
    <>
      <main>
        <h1
          className={`text-center mb-5 pt-5 py-5 d-none d-lg-block d-md-block d-sm-none d-xs-none ${styles.textColor}`}
          style={{ fontSize: "100px" }}>
          Infograph
        </h1>
        <h1
          className={`text-center d-sm-block d-xs-block d-lg-none d-md-none ${styles.textColor}`}
          style={{ fontWeight: "bolder" }}>
          Infograph
        </h1>
      </main>
    </>
  );
};
