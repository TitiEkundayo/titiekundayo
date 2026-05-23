import Image from "next/image";
import styles from "../styles/componentstyles/landingpage.module.scss";
import consultingstyles from "../styles/componentstyles/consulting.module.scss";
// import titi from "../public/images/HomeImgs/meettitiBighero.png";
import titi from "../public/images/HomeImgs/titi.jpg";
// import styles from "../styles/generalstyles/colors.module.scss";
 
import meeTtitiBighero from "../public/images/HomeImgs/meettitiBighero.png";
import meeTtitiSmallhero from "../public/images/HomeImgs/meettitiSmallhero.png";
import MeetTiti from "../styles/componentstyles/meetTitipage.module.scss";
import meettitiheropics from "../public/images/HomeImgs/meettitiheropics.png";
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
            <div className={`col-lg-5 col-md-5 col-sm-12`}>
              {/* <Image
                src={titi}
                className="d-block mx-lg-auto img-fluid"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// export const LandingPageHero = () => {
//   return (
//     <>
//       <div
//         className={`container-fluid d-flex align-items-center ${styles.LandingPageHeroBg}`}
//       >
//         <div
//           className={`px-5 container-fluid d-flex ${styles.LandingPageHeroBgg}`}
//         >
//           <div
//             className={`row align-items-center justify-content-center px-4 py-3`}
//           >
//             <div className={`col-lg-7 col-md-7 col-sm-12 pt-3`}>
//               <h2>
//                 Lorem Ipsum Dolor
//                 <br/>
//               </h2>
//               <p className={`mt-1`}>
//                 Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//                 ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//                 dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
//               </p>
//               <div className={`text-start mb-4`}></div>
//             </div>
//             <div className={`col-lg-5 col-md-5 col-sm-12`}>
//               <Image
//                 src={titi}
//                 className="d-block mx-lg-auto img-fluid"
//                 alt=""
//                 width="672"
//                 height={668}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

//     <div
//       className={`container-fluid py-5 px-5 text-white ${styles.LandingPageBg}`}>
//       <div className="row mx-5">
//         {" "}
//         <h4>Letter from Titi</h4>
//         <p>
//           <b>Dear All,</b>
//         </p>
//         <p>
//           Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//           dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//           ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor
//           lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//           dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//           ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor
//           lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//           dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//           ipsum dolor Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
//           lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//           dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem
//           ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
//           <p className={`my-3`}>
//             Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//             dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//             ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor
//             lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//             dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//             ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor
//             lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//             dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//             ipsum dolor Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
//             lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//             dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem
//             ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
//           </p>
//           <p className={`my-3`}>
//             Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//             dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//             ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor
//             lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//             dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//             ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor
//             lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//             dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
//             ipsum dolor Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
//             lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
//             dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Lorem
//             ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
//           </p>
//         </p>
//         <p className={`my-3`}>
//           Thank you. <br />
//           Best Regards, <br /> Titilayo Ekundayo.
//         </p>
//       </div>{" "}
//     </div>
//   );
// };

// export const LandingPageHero = () => {
//   return (
//     <div className={enterpreneur.EnterpreneurHero}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4 col-md-4 col-sm-6 mt-5 pt-5 text-nowrap">
//             <h5 className="fs-4 text-white">Lorem ipsum dolor.</h5>
//             <p className="text-white">
//               Lorem ipsum dolor sit amet consectetur. <br />
//               Lorem ipsum dolor sit amet consectetur. <br />
//               Lorem ipsum dolor sit amet consectetur.
//             </p>
//           </div>
//           <Image
//             className={`col-lg-8 col-md-8 col-sm-6 img-fluid d-none 
//                  mx-lg-auto d-lg-block d-md-block d-sm-none d-xs-none`}
//             style={{ width: "27rem" }}
//             src={meeTtitiBighero}
//             alt={""}
//           />
//           <Image
//             className={`col-lg-8 col-md-8 col-sm-6 mx-lg-auto d-sm-block d-xs-block d-lg-none d-md-none ms-5${styles.EnterpreneurHeroimage}`}
//             style={{ width: "20rem" }}
//             src={meeTtitiSmallhero}
//             alt={""}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export const LandingPageHero = () => {
  const handleExploreClick = () => {
    // Scroll smoothly to Letter section
    const letterSection = document.querySelector('section:nth-of-type(2)');
    letterSection?.scrollIntoView({ behavior: 'smooth' });
  };
 
  const handleContactClick = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };
 
  return (
    <section className={styles.heroContainer}>
      {/* Animated background gradient overlay */}
      <div className={styles.gradientOverlay}></div>
 
      <div className={styles.heroContent}>
        {/* LEFT SIDE - TEXT CONTENT */}
        <div className={styles.textSection}>
          <div className={styles.textWrapper}>
            {/* Subtitle with animation */}
            <div className={styles.subtitle}>
              <span className={styles.subtitleDot}></span>
              <span className={styles.subtitleAccent}>Welcome</span>
            </div>
 
            {/* Main headline with highlighted word */}
            <h1 className={styles.mainHeadline}>
              <span className={styles.highlight}>Building</span> from
              abstraction to reality
            </h1>
 
            {/* Descriptive text */}
            <p className={styles.description}>
              A chemical engineer crafting digital solutions with intentional design, 
              strategic thinking, and a passion for process optimization.
            </p>
 
            {/* CTA Buttons - Primary and Secondary */}
            {/* <div className={styles.buttonGroup}>
              <button 
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleExploreClick}
                aria-label="Explore my work"
              >
                Explore My Work
              </button>
              <button 
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={handleContactClick}
                aria-label="Get in touch"
              >
                Get in Touch
              </button>
            </div> */}
          </div>
        </div>
 
        {/* RIGHT SIDE - IMAGE SECTION */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {/* Desktop/Tablet Image */}
            <Image
              src={titi}
              alt="Titi Ekundayo - Entrepreneur and Creative"
              quality={85}
              priority
              className={`${styles.heroImage} d-none d-lg-block d-md-block`}
              width={516}
              height={517}
            />
            
            {/* Mobile Image */}
            <Image
              src={titi}
              alt="Titi Ekundayo - Entrepreneur and Creative"
              quality={85}
              priority
              className={`${styles.heroImage} d-lg-none d-md-none`}
              width={400}
              height={400}
            />
            
            {/* Glowing Border Effect */}
            <div className={styles.imageBorder}></div>
          </div>
        </div>
      </div>
 
      {/* Scroll Indicator with Bounce Animation */}
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
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
export const MeettitipageHero = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
            <div className={`col-lg-6 col-md-6 col-sm-12 mt-5 pt-5`}>
              <p className={`${MeetTiti.MeetTitiHerotext} mt-1 fw-bold fs-4`}>Hello,</p>
              {/* <h1 className={`${color.textColor}`}> I am Titilayo</h1> */}
               <p className=" mt-1 fw-bold fs-1 "> I am Titilayo</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus animi, ratione quam et atque soluta explicabo facere
                aperiam.
              </p>
           </div>
          <div
            className={`col-lg-6 col-md-6 col-sm-12 col-sm-12 img-fluid mt-5 mb-5 mx-auto ${MeetTiti.MeetTitiHero}`}>
            {/* className= "col-lg-6 col-md-6 col-sm-12 d-none d-md-block d-sm-none img-fluid mt-5 mb-5 mx-auto" > */}
            <Image src={meettitiheropics}
              width={516} 
              height={517}
              alt={""}
            />
          </div>
          {/* <div   
            //mobial view
            className= "col-sm-12 mt-5 mb-5 mx-auto img-fluid" >
            <Image src={meettitiheropics}
              width={235} 
              height={311}
              alt={""} />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
