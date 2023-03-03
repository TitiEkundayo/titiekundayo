import Image from "next/image";
import meettitiBighero from "../public/images/HomeImgs/meettitiBighero.png";
import meettitiSmallhero from "../public/images/HomeImgs/meettitiSmallhero.png";

import styles from "../styles/componentstyles/enterpreneurpage.module.scss";
import MeetTiti from "../styles/componentstyles/meetTitipage.module.scss";
import meettitiheropics from "../public/images/HomeImgs/meettitiheropics.png";

const Hero = () => {
  return <div>Hero</div>;
};

export default Hero;

export const EnterpreneurpageHero = () => {
  return (
    <>
      <main>
        <div className={styles.EnterpreneurHero}>
          <div className="container">
            <div className={`row ${styles.EnterpreneurHeroimage}`}>
              <div
                className={`col-lg-4 col-md-4 col-sm-6 mt-5 pt-5 text-nowrap ${styles.EnterpreneurHeroimage}`}>
                <h3 className="fw-bold ms-3">Lorem ipsum dolor sit ame.</h3>

                <p className="ms-3">
                  Lorem ipsum dolor sit amet consectetur. <br /> Lorem ipsum
                  dolor sit amet consectetur. <br /> Lorem ipsum dolor sit amet
                  consectetur. <br /> Lorem ipsum dolor sit amet consectetur.{" "}
                  <br /> Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <Image
                className="col-lg-8 col-md-8 col-sm-6"
                style={{
                  width: "25rem",
                }}
                src={meettitiSmallhero}
                alt={""}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const MeettitipageHero = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className={`col-lg-6 col-md-6 col-sm-12 mt-5 pt-5`}>
              <p
                className={`${MeetTiti.MeetTitiHerotext}`}
                style={{ color: "white", fontWeight: "1000" }}>
                Hello,
              </p>
              <h1 style={{ color: "white", fontWeight: "1000" }}>
                I'm Titilayo
              </h1>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus animi, ratione quam et atque soluta explicabo facere
                aperiam.
              </p>
            </div>
            <div
              className={`col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 ${MeetTiti.MeetTitiHero}`}>
              <Image src={meettitiheropics} alt="/" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
