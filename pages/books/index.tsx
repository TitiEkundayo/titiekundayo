import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/componentstyles/books.module.scss";
import HomePageHeroImgMobile from "../../public/images/BooksImgs/homepageheroimgmobile.png";
import HomePageHeroImgDesktop from "../../public/images/BooksImgs/homepageheroimgdesktop.png";
import { BookNavTitle } from "@/components/Navbar";
import Book1 from "../../public/images/BooksImgs/Book1.png";
import Book2 from "../../public/images/BooksImgs/Book2.png";
import Book3 from "../../public/images/BooksImgs/Book3.png";
import Book4 from "../../public/images/BooksImgs/Book4.png";
import { ScrollUpIcon } from "@/components/icons.js/ScrollUpIcon";
import UnderConstruction1 from "../underconstruction1";
// import Footer from "@/components/Footer";

export const Books = () => {
  return (
    <div className={``}>
      <div>
        <BookNavTitle />
      </div>

      <div>
        <Hero />
      </div>

      <div>
        <Books1 />
      </div>

      <div>
        <Books2 />
      </div>

      <div>
        <Books3 />
      </div>

      <div>
        <Books4 />
      </div>

      <div className="">
        <ScrollUpIcon />
      </div>


      {/* <div className="bg-dark mt-5 pt-5">
        <Footer />
      </div> */}
    </div>
  );
};

export const Hero = () => {
  return (
    <>
      <div
        className={`container-fluid d-flex align-items-center ${styles.HomePageHeroBg}`}
      >
        <div className={`container-fluid d-flex`}>
          <div className="row align-items-center justify-content-center d-flex">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <br />
              <h2
                className={`d-none d-lg-block d-md-block d-sm-none d-xs-none ${styles.HeroHeading}`}
              >
                Books
              </h2>

              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none">
                Books
              </h3>

              <Link
                className={`nav-link active ${styles.herolink}`}
                aria-current="page"
                href=""
              >
                ABEGWHOSEND ME
              </Link>

              <Link
                className={`nav-link active ${styles.herolink}`}
                aria-current="page"
                href=""
              >
                RANDOM THOUGHTS VOL.1
              </Link>

              <Link
                className={`nav-link active ${styles.herolink}`}
                aria-current="page"
                href=""
              >
                RANDOM THOUGHTS VOL.2
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <Image
                className={`img-fluid
                 mx-lg-auto d-xs-block d-sm-block d-md-none d-lg-none ms-5`}
                src={HomePageHeroImgMobile}
                alt=""
              />
              <Image
                className={`img-fluid d-none
                 mx-lg-auto d-lg-block d-md-block d-sm-none d-xs-none`}
                src={HomePageHeroImgDesktop}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Books1 = () => {
  return (
    <>
      <div className={`container-fluid mt-3`}>
        <div className={`container d-flex align-items-center`}>
          {/* Book 1 Section */}
          <div className={`container`}>
            <div className="row align-items-center justify-content-center gx-md-5">
              <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                <Image
                  className={`img-fluid d-block mx-auto ${styles.img}`}
                  src={Book1}
                  alt=""
                />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 d-flex mt-3">
                <div className="col w-100">
                  <p
                    className={`d-block text-center text-md-start text-lg-start ${styles.p}`}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ratione accusantium beatae libero nihil aut accusamus
                    impedit autem quasi. In placeat totam neque tenetur, itaque
                    dicta dolores cupiditate quia mollitia illo!
                  </p>

                  <div
                    className={`col justify-content-center justify-content-md-start justify-content-lg-start ${styles.booklink}`}
                  >
                    <Link
                      className={`nav-link active me-2 ${styles.underlineColor}`}
                      aria-current="page"
                      href="/books/abegwhosendpage"
                    >
                      Read More
                    </Link>
                    <Link
                      className={`nav-link active ${styles.underlineColor} `}
                      aria-current="page"
                      href=""
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Books2 = () => {
  return (
    <>
      <div className={`container-fluid mt-3`}>
        <div className={`container d-flex align-items-center`}>
          {/* Book 2 Section */}
          <div className={`container`}>
            <div className="row align-items-center justify-content-center gx-md-5">
              <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                <Image
                  className={`img-fluid d-block mx-auto ${styles.img}`}
                  src={Book2}
                  alt=""
                />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 d-flex mt-3 order-lg-first order-md-first order-xl-last">
                <div className="col w-100">
                  <p
                    className={`d-block text-center text-md-start text-lg-start ${styles.p}`}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ratione accusantium beatae libero nihil aut accusamus
                    impedit autem quasi. In placeat totam neque tenetur, itaque
                    dicta dolores cupiditate quia mollitia illo!
                  </p>
                  <div
                    className={`col justify-content-center justify-content-md-start justify-content-lg-start ${styles.booklink}`}
                  >
                    <Link
                      className={`nav-link active me-2 ${styles.underlineColor}`}
                      aria-current="page"
                      href="/books/randomthoughts1"
                    >
                      Read More
                    </Link>
                    <Link
                      className={`nav-link active ${styles.underlineColor}`}
                      aria-current="page"
                      href=""
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Books3 = () => {
  return (
    <>
      <div className={`container-fluid mt-3`}>
        <div className={`container d-flex align-items-center`}>
          {/* Book 3 Section */}
          <div className={`container`}>
            <div className="row align-items-center justify-content-center gx-md-5">
              <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                <Image
                  className={`img-fluid d-block mx-auto ${styles.img}`}
                  src={Book3}
                  alt=""
                />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 d-flex mt-3">
                <div className="col w-100">
                  <p
                    className={`d-block text-center text-md-start text-lg-start ${styles.p}`}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ratione accusantium beatae libero nihil aut accusamus
                    impedit autem quasi. In placeat totam neque tenetur, itaque
                    dicta dolores cupiditate quia mollitia illo!
                  </p>
                  <div
                    className={`col justify-content-center justify-content-md-start justify-content-lg-start ${styles.booklink}`}
                  >
                    <Link
                      className={`nav-link active me-2 ${styles.underlineColor}`}
                      aria-current="page"
                      href="/books/randomthoughts2"
                    >
                      Read More
                    </Link>
                    <Link
                      className={`nav-link active ${styles.underlineColor} `}
                      aria-current="page"
                      href=""
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Books4 = () => {
  return (
    <>
      <div className={`container-fluid mt-3`}>
        <div className={`container d-flex align-items-center`}>
          {/* Book 4 Section */}
          <div className={`container`}>
            <div className="row align-items-center justify-content-center gx-md-5">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-4">
                <Image
                  className={`img-fluid d-block mx-auto ${styles.img}`}
                  src={Book4}
                  alt=""
                />
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex mt-3 order-lg-first order-md-first order-xl-last">
                <div className="col w-100">
                  <p
                    className={`d-block text-center text-md-start text-lg-start ${styles.p}`}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ratione accusantium beatae libero nihil aut accusamus
                    impedit autem quasi. In placeat totam neque tenetur, itaque
                    dicta dolores cupiditate quia mollitia illo!
                  </p>
                  <div
                    className={`col justify-content-center justify-content-md-start justify-content-lg-start ${styles.booklink}`}
                  >
                    <Link
                      className={`nav-link active me-2 ${styles.underlineColor}`}
                      aria-current="page"
                      href="/books/thirdbook"
                    >
                      Read More
                    </Link>
                    <Link
                      className={`nav-link active ${styles.underlineColor} `}
                      aria-current="page"
                      href=""
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
