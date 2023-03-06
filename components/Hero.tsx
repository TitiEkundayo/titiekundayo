import Image from "next/image";
import styles from "../styles/componentstyles/landingpage.module.scss";
import consultingstyles from "../styles/componentstyles/consulting.module.scss";
import titi from "../public/images/HomeImgs/titi.png";
// import styles from "../styles/generalstyles/colors.module.scss";
 
const Hero = () => {
  return <div>Hero</div>;
};

export const ConsultingPageHero = () => {
  return (
    <>
      <div
        className={`container-fluid d-flex align-items-center ${consultingstyles.ConsultingPageHeroBg}`}
      >
        <div
          className={`px-5 container-fluid d-flex ${consultingstyles.ConsultingPageHeroBgg}`}
        >
          <div className={`row align-items-center py-3`}>
            <div className={`col-lg-5 col-md-7 col-sm-12 pt-3`}>
              <h2>
                Lorem Ipsum Dolor
                <br />
              </h2>
              <p className={`mt-1`}>
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              </p>
              <div className={`text-start mb-4`}></div>
            </div>
            {/* <div className={`col-lg-5 col-md-5 col-sm-12`}>
              <Image
                src={titi}
                className="d-block mx-lg-auto img-fluid"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export const LandingPageHero = () => {
  return (
    <>
      <div
        className={`container-fluid d-flex align-items-center ${styles.LandingPageHeroBg}`}
      >
        <div
          className={`px-5 container-fluid d-flex ${styles.LandingPageHeroBgg}`}
        >
          <div
            className={`row align-items-center justify-content-center px-4 py-3`}
          >
            <div className={`col-lg-7 col-md-7 col-sm-12 pt-3`}>
              <h2>
                Lorem Ipsum Dolor
                <br />
              </h2>
              <p className={`mt-1`}>
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              </p>
              <div className={`text-start mb-4`}></div>
            </div>
            <div className={`col-lg-5 col-md-5 col-sm-12`}>
              <Image
                src={titi}
                className="d-block mx-lg-auto img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const LetterFromTiti = () => {
  return (
    <div
      className={`container-fluid py-5 px-5 text-white ${styles.LandingPageBg}`}
    >
      <div className="row mx-5">
        {" "}
        <h4>Letter from Titi</h4>
        <p>
          <b>Dear All,</b>
        </p>
        <p>
          Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
          ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor
          lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
          ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor
          lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
          ipsum dolor Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
          lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem
          ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
          <p className={`my-3`}>
            Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem
            ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
          </p>
          <p className={`my-3`}>
            Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem
            ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
          </p>
        </p>
        <p className={`my-3`}>
          Thank you. <br />
          Best Regards, <br /> Titilayo Ekundayo.
        </p>
      </div>{" "}
    </div>
  );
};

export default Hero;
