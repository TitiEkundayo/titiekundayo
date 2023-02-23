import Image from "next/image";
import { ConsultNavTitle } from "@/components/Navbar";
import { ConsultingPageHero } from "@/components/Hero";
import UnderConstruction1 from "../underconstruction1";
import Footer from "@/components/Footer";
import whatourclientsaskedfor from "../../public/images/ConsultingImgs/whatourclientsaskedfor.png";
import howwesolveit from "../../public/images/ConsultingImgs/howwesolveit.png";
import irwlogo from "../../public/images/ConsultingImgs/irwlogo.png";
import consultingstyles from "../../styles/componentstyles/consulting.module.scss";

const Consulting = () => {
  return (
    <div>
      <div>
        <ConsultNavTitle />
      </div>
      <div>
        <ConsultingPageHero />
      </div>
      <div>
        <WhatOurClientsAskFor />
      </div>
      <div>
        <HowDoWeSolveIt />
      </div>
      <div>
        <WhoWeHaveSolvedItFor />
      </div>
      <div>
        <OurApproach />
      </div>

<<<<<<< HEAD
			<div>
				<UnderConstruction1 />
			</div>
		</div>
	);
=======
      <div>{/* <UnderConstruction1 /> */}</div>

      <div className="bg-dark mt-5 pt-5">
        <Footer />
      </div>
    </div>
  );
>>>>>>> 35e78296826922bc2ee6166a69c06ddc51bcae00
};

const WhatOurClientsAskFor = () => {
  return (
    <div
      className={`container-fluid py-5 px-2 text-white bg-black ${consultingstyles.WhatOurClientsAskFor}`}
    >
      <div className={`row mx-5 d-flex align-items-center`}>
        <div className={`col-lg-6 col-md-6 col-sm-12`}>
          <h3 className={`${consultingstyles.ConsultingHeaderText}`}>
            What most of our clients ask for
          </h3>
        </div>
        {/* <div className={`col-lg-2 col-md-6 col-sm-12`}>
          <Image
            src={whatourclientsaskedfor}
            className={`card-img-top img-fluid p-5 mx-auto`}
            alt="..."
          />
        </div> */}
        <div className={`col-lg-6 col-md-6 col-sm-12`}>
          <div className={`col`}>
            <h5 className={`${consultingstyles.SubHeaderText}`}>Lorem ipsum</h5>
            <p>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem{" "}
            </p>
          </div>
          <div className={`col`}>
            <h5 className={`${consultingstyles.SubHeaderText}`}>Lorem ipsum</h5>
            <p>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem{" "}
            </p>
          </div>
          <div className={`col`}>
            <h5 className={`${consultingstyles.SubHeaderText}`}>Lorem ipsum</h5>
            <p>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem{" "}
            </p>
          </div>
          <div className={`col`}>
            <h5 className={`${consultingstyles.SubHeaderText}`}>Lorem ipsum</h5>
            <p>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const HowDoWeSolveIt = () => {
  return (
    <div className={`container-fluid py-5 px-2 bg-black`}>
      <h3 className={`mb-5 ps-5 ${consultingstyles.ConsultingHeaderText}`}>
        How do we solve it
      </h3>
      <div
        className={`row mx-5 d-flex align-items-center justify-content-center`}
      >
        <div
          className={`col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch`}
        >
          {" "}
          <div className={`card mb-5 text-center`}>
            <Image
              src={howwesolveit}
              className={`card-img-top img-fluid p-5 mx-auto`}
              alt="..."
            />

            <h5 className={`card-title `}>Lorem Ipsum</h5>
            <div className={`card-body`}>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor lorem.
            </div>
          </div>
        </div>
        <div
          className={`col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch`}
        >
          {" "}
          <div className={`card mb-5 text-center`}>
            <Image
              src={howwesolveit}
              className={`card-img-top img-fluid p-5 mx-auto`}
              alt="..."
            />

            <h5 className={`card-title `}>Lorem Ipsum</h5>
            <div className={`card-body`}>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor lorem.
            </div>
          </div>
        </div>
        <div
          className={`col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch`}
        >
          {" "}
          <div className={`card mb-5 text-center`}>
            <Image
              src={howwesolveit}
              className={`card-img-top img-fluid p-5 mx-auto`}
              alt="..."
            />

            <h5 className={`card-title `}>Lorem Ipsum</h5>
            <div className={`card-body`}>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor lorem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhoWeHaveSolvedItFor = () => {
  return (
    <div
      className={`container-fluid py-5 px-2 text-white bg-black ${consultingstyles.WhoWeHaveSolvedItFor}`}
    >
      <div className={`row mx-5 d-flex align-items-center`}>
        <div className={`col-lg-6 col-md-6 col-sm-12`}>
          <h3 className={`${consultingstyles.ConsultingHeaderText}`}>
            Who we have solved it for
          </h3>
          <p>
            Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lorem.{" "}
          </p>
        </div>
        <div className={`col-lg-2 col-md-3 col-sm-12`}>
          <div className={`col`}>
            <Image
              src={irwlogo}
              className={`card-img-top img-fluid p-3`}
              alt="..."
            />
          </div>
          <div className={`col`}>
            <Image
              src={irwlogo}
              className={`card-img-top img-fluid p-3`}
              alt="..."
            />
          </div>
        </div>
        <div className={`col-lg-2 col-md-3 col-sm-12`}>
          <div className={`col`}>
            <Image
              src={irwlogo}
              className={`card-img-top img-fluid p-3`}
              alt="..."
            />
          </div>
          <div className={`col`}>
            <Image
              src={irwlogo}
              className={`card-img-top img-fluid p-3`}
              alt="..."
            />
          </div>
        </div>
        <div className={`col-lg-2 col-md-3 col-sm-12`}>
          <div className={`col`}>
            <Image
              src={irwlogo}
              className={`card-img-top img-fluid p-3`}
              alt="..."
            />
          </div>
          <div className={`col`}>
            <Image
              src={irwlogo}
              className={`card-img-top img-fluid p-3`}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OurApproach = () => {
  return (
    <div className={`container-fluid py-5 px-2 bg-black text-white`}>
      {" "}
      <div
        className={`row mx-5 d-flex align-items-center justify-content-center`}
      >
        <div
          className={`col-lg-3 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch`}
        >
          <h3 className={`${consultingstyles.ConsultingHeaderText}`}>
            Our Approach
          </h3>
        </div>
        <div
          className={`col-lg-3 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch`}
        >
          {" "}
          <div className="mb-5">
            <h2 className={``}>01</h2>
            <h5 className={`card-title`}>Lorem Ipsum</h5>
            <div className={`card-body`}>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor lorem.
            </div>
          </div>
        </div>
        <div
          className={`col-lg-3 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch`}
        >
          {" "}
          <div className="mb-5">
            <h2 className={``}>02</h2>
            <h5 className={`card-title`}>Lorem Ipsum</h5>
            <div className={`card-body`}>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor lorem.
            </div>
          </div>
        </div>
        <div
          className={`col-lg-3 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch`}
        >
          {" "}
          <div className="mb-5">
            <h2 className={``}>03</h2>
            <h5 className={`card-title`}>Lorem Ipsum</h5>
            <div className={`card-body`}>
              Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor lorem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// ${styles.LandingPageBg}

export default Consulting;
