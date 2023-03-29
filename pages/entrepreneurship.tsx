import Image from "next/image";
import { ContactNavTitle, EntrepreneurNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "./underconstruction1";
import Footer from "@/components/Footer";
import Enterpreneuepic from "../public/images/HomeImgs/Enterpreneuepic.png";
import { EnterpreneurpageHero } from "@/components/Hero";

const Entrepreneurship = () => {
  return (
    <>
      <div>
        <div>
          <EntrepreneurNavTitle />
        </div>

        {/* <div>
              <UnderConstruction1 />
          </div> */}

        <div>
          <EnterpreneurpageHero  />
        </div>

        <div>
          <Enterpreneur />
        </div>
      </div>
    </>
  );
};

export default Entrepreneurship;

import styles from "../styles/componentstyles/enterpreneurpage.module.scss";
import enterpreneur from "../pages/api/enterpreneur.json";

interface ITestimonial {
  images: string;
  heading: string;
  body: string;
}

const Enterpreneuerbody = (props: ITestimonial) => {
  const { images, heading, body } = props;
  return (
    <>
      <main className="d-flex d-none d-sm-none d-md-none d-lg-block">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-5">
              <Image
                className="mt-5"
                src={images}
                alt="irw image"
                width={170}
                height={170}
              />
            </div>
            <div className={`col-lg-2 mb-5 ${styles.enterpreneurLineimg}`}>
              <div className="d-flex" style={{ height: 250, color: "white" }}>
                <div className="vr ms-5"></div>
              </div>
            </div>
            <div className={`col-lg-7 mb-5 ${styles.EnterpreneuerbodySpacing}`}>
              <h1 style={{ color: "white" }}>{heading}</h1>
              <p style={{ color: "white" }}>
                {body}
                <br />
                <a href="" style={{ color: "#00FFCD" }}>
                  view website
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* mobile section */}
      <div className="container d-md-block d-lg-none d-sm-block mt-5 justify-content-evenly">
        <div className="row">
          <div className="col-sm-12">
            <h5 className="text-white">{heading}</h5>
            <p className={` ${styles.secColor}`}>
              {body}
              <br />
              <a href="" style={{ color: "#00FFCD" }}>
                view website
              </a>
            </p>

            <Image
              className="col-sm-12 block mx-auto"
              src={images}
              alt="/"
              width={300}
              height={310}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const Enterpreneur = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        {enterpreneur.enterpreneurshipjson.map((enterpreneurbody) => {
          return (
            <div
              className="col-sm-12 col-md-12 col-lg-12 p-0 "
              key={enterpreneurbody.id}>
              <Enterpreneuerbody {...enterpreneurbody}></Enterpreneuerbody>
            </div>
          );
        })}
      </div>
    </div>
  );
};
