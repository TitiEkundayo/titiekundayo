import Head from "next/head";
import Image from "next/image";
import { HomeNavTitle } from "../components/Navbar";
import titi from "../public/images/HomeImgs/titi.png";
import Footer from "@/components/Footer";
import UnderConstruction from "./underconstruction1";
import { LandingPageHero } from "../components/Hero";
import styles from "../styles/componentstyles/landingpage.module.scss";
import consultingstyles from "../styles/componentstyles/consulting.module.scss";
// import { LetterFromTiti } from "../components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
//import styles from "../styles/pagesstyle/contactform.module.scss"
// import Hero from "../components/Hero";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div>
        <HomeNavTitle/>
      </div>

      <div>{/* <UnderConstruction /> */}</div>

      {/* Landing page */}
      <div>
        <LandingPageHero/>
      </div>

      <div>
        <LetterFromTiti />
      </div>
      <div>{/* <ArticleCard /> */}</div>

      {/* the code below is a sample of how a button is used */}
      {/* <div>
				<Button
					classes={`btn ${styles.secBgColor} text-white`}
					btnText="Get Started"
				/>

				<Button classes={`btn btn-primary text-white`} btnText="Submit" />
			</div> */}
		</>
	);
}

const LetterFromTiti = () => {
  return (
    <div
      className={`container-fluid py-5 px-5 text-white ${styles.LandingPageBg}`}
    >
      <div className="row mx-lg-3">
        {/* <div className={`d-flex h-100`}>
          <div className={`vr`}></div>
        </div> */}
        <div className="d-flex">
          <div>
            <h4 className={`${styles.lineColor}`}></h4>
          </div>
          <div className={`ms-3 mt-3`}>
            <h4 className={`${consultingstyles.SubHeaderText}`}>
              Letter from Titi
            </h4>
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
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor
              </p>
              <p className={`my-3`}>
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor
              </p>
            </p>
            <p className={`my-3`}>
              Thank you. <br />
              Best Regards, <br /> Titilayo Ekundayo.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
