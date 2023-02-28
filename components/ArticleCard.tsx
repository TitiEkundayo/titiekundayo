import Image from "next/image";
import articleone from "../public/images/MusingImgs/articleone.png";
import articletwo from "../public/images/MusingImgs/articletwo.png";
import articlethree from "../public/images/MusingImgs/articlethree.png";

export const ArticleCard = () => {
  return (
    <>
      <div className={`container-fluid px-5 pt-2 mt-5`}>
        <div
          className={`row g-0 justify-content-center justify-content-evenly`}
        >
          <div
            className={`col-lg-4 col-md-6 col-sm-10 px-md-4 px-sm-5 align-items-stretch mx-auto`}
          >
            <Image src={articleone} alt="" className="" />
            <div className={`card-body`}>
              <h3 className={`mt-3`}>Blog One</h3>
              <div>
                <p>
                  {" "}
                  Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                  ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                  dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 align-items-stretch`}
          >
            <Image src={articletwo} alt="" className="" />
            <div className={`card-body`}>
              <h3 className={`mt-3`}>Blog Two</h3>
              <div>
                <p>
                  Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                  ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                  dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 align-items-stretch`}
          >
            <Image src={articlethree} alt="" className="" />
            <div className={`card-body`}>
              <h3 className={`mt-3`}>Blog Three</h3>
              <div>
                <p>
                  Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                  ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
                  dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
