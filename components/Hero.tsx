import Image from "next/image";
import styles from "../styles/componentstyles/landingpage.module.scss";
import consultingstyles from "../styles/componentstyles/consulting.module.scss";
import titi from "../public/images/HomeImgs/titi.jpg";
import meeTtitiBighero from "../public/images/HomeImgs/meettitiBighero.png";
import meeTtitiSmallhero from "../public/images/HomeImgs/meettitiSmallhero.png";
import MeetTiti from "../styles/componentstyles/meetTitipage.module.scss";
import meettitiheropics from "../public/images/MeetTitiImgs/meettitiheropic.jpg";
import enterpreneur from "../styles/componentstyles/enterpreneurpage.module.scss";
import color from "../styles/generalstyles/colors.module.scss";

const Hero = () => {
  return <div>Hero</div>;
};

export const ConsultingPageHero = () => {
  return (
    <>
      <div
        className={`container-fluid d-flex align-items-center ${consultingstyles.ConsultingPageHeroBg}`}>
        <div
          className={`px-4 container-fluid d-flex ${consultingstyles.ConsultingPageHeroBgg}`}
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
            <div className={`col-lg-5 col-md-5 col-sm-12`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export const LandingPageHero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.gradientOverlay}></div>

      <div className={styles.heroContent}>
        {/* LEFT SIDE - IMAGE (renders first, left-bleeding) */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src={titi}
              alt="Titilayo - Entrepreneur and Creative"
              quality={90}
              priority
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className={styles.heroImage}
            />
            <div className={styles.imageBorder}></div>
            <div className={styles.imageOverlay}></div>
          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className={styles.textSection}>
          <div className={styles.textWrapper}>
            {/* <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot}></span>
              <span className={styles.eyebrowText}>Titilayo</span>
            </div> */}

            <h1 className={styles.mainHeadline}>
              Scaling <span className={styles.highlight}>businesses.</span><br />
              Strengthening <span className={styles.highlight}>systems.</span><br />
              Driving <span className={styles.highlight}>impact.</span>
            </h1>

            <div className={styles.accentRule}></div>

            {/* <p className={styles.description}>
              A chemical engineer crafting digital solutions with intentional
              design, strategic thinking, and a passion for process optimization.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export const EnterpreneurpageHero = () => {
  return (
    <div className={enterpreneur.EnterpreneurHero}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 mt-5 pt-5 text-nowrap">
            <h5 className="fs-4">Lorem ipsum dolor.</h5>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur. <br />
              Lorem ipsum dolor sit amet consectetur. <br />
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <Image
            className={`col-lg-8 col-md-8 col-sm-6 img-fluid d-none 
                 mx-lg-auto d-lg-block d-md-block d-sm-none d-xs-none`}
            style={{ width: "27rem" }}
            src={titi}
            alt={""}
          />
          <Image
            className={`col-lg-8 col-md-8 col-sm-6 mx-lg-auto d-sm-block d-xs-block d-lg-none d-md-none ms-5${styles.EnterpreneurHeroimage}`}
            style={{ width: "20rem" }}
            src={meeTtitiSmallhero}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

// export const MeettitipageHero = () => {
//   return (
//     <main>
//       <div className="container">
//         <div className="row">
//           <div className={`col-lg-6 col-md-6 col-sm-12 mt-5 pt-5`}>
//             <p className=" mt-1 fw-bold fs-1 ">Strategist. Entrepreneur. Leader. Author . Builder</p>
         
//           </div>
//           <div
//             className={`col-lg-6 col-md-6 col-sm-12 col-sm-12 img-fluid mt-5 mb-5 mx-auto ${MeetTiti.MeetTitiHero}`}>
//             <Image
//               src={meettitiheropics}
//               width={516}
//               height={517}
//               alt={""}
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

export const MeettitipageHero = () => {
  return (
    <section className={MeetTiti.heroContainer}>
      <div className={MeetTiti.heroContent}>
        {/* LEFT SIDE - TEXT CONTENT */}
        <div className={MeetTiti.textSection}>
          <div className={MeetTiti.textWrapper}>
            <h1 className={MeetTiti.mainHeadline}>
              Strategist.<br />
              Entrepreneur.<br />
              Leader. <span className={MeetTiti.highlight}>Author</span>.<br />
              Builder.
            </h1>
          </div>
        </div>
 
        {/* RIGHT SIDE - IMAGE */}
        <div className={MeetTiti.imageSection}>
          <div className={MeetTiti.imageWrapper}>
            <Image
              src={meettitiheropics}
              alt="Titilayo Ekundayo"
              quality={90}
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              width={516}
              height={517}
            />
            <div className={MeetTiti.imageBorder}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;