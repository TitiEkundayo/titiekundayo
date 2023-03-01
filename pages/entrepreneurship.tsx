import { ContactNavTitle, EntrepreneurNavTitle } from "@/components/Navbar";
import UnderConstruction1 from "./underconstruction1";
import Footer from "@/components/Footer";
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
          <EnterpreneurpageHero />
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
// import  Type  from "typescript"

interface ITestimonial {
  images: string;
  heading: string;
  body: string;
}

const Enterpreneuerbody = (props: ITestimonial) => {
  const { images, heading, body } = props;
  return (
    <>
      <main className="d-flex d-none d-sm-none d-md-block">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mt-4">
              <div style={{ width: "11rem" }}>
                <img src={images} alt="/" />
              </div>
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
      <div className="container d-md-none d-sm-block pt-5 mt-5 mb-4">
        <div className="row">
          <div className="col-sm-12">
            <h5 style={{ color: "white" }}>{heading}</h5>
            <p style={{ color: "white" }}>
              {body}
              <br />
              <a href="" style={{ color: "#00FFCD" }}>
                view website
              </a>
            </p>
            <div className="col-sm-12 ms-5" style={{ width: "13rem" }}>
              <img src={images} alt="/" />
            </div>
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
