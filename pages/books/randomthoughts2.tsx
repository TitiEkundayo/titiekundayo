import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/componentstyles/books.module.scss";
import Book3 from "../../public/images/BooksImgs/Book3.png";
import Ini from "../../public/images/BooksImgs/ini.png";
import { RandomThoughtsV2NavTitle } from "@/components/Navbar";
import { ScrollUpIcon } from "@/components/icons.js/ScrollUpIcon";
import { YouTubeIcon } from "@/components/icons.js/YoutubeIcon";
import { OrderBookIcons } from "@/components/icons.js/OrderBookIcons";
import { PaginationIcons } from "@/components/icons.js/PaginationIcons";

export default function AbegWhoSendPage() {
  return (
    <div>
      <div>
        <RandomThoughtsV2NavTitle />
      </div>

      <div>
        <Hero />
      </div>

      <div>
        <OrderBookSection />
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <FeedbackForm />
      </div>

      <div className="">
        <ScrollUpIcon />
      </div>
    </div>
  );
}

export const Hero = () => {
  return (
    <>
      <div
        className={`bg-image container-fluid d-flex align-items-center justify-content-center ${styles.BookHeroBg}`}
      >
        <div className="container-fluid d-flex align-items-center">
          <div className="col">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const OrderBookSection = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 mb-3 align-items-center justify-content-center">
            <Image
              className={`img-fluid d-block mx-auto ${styles.img}`}
              src={Book3}
              alt=""
            />
          </div>
        </div>
        <div className="col">
          <p className={`text-center d-block ${styles.ordertext}`}>
            Order your book today
          </p>
          <OrderBookIcons />
        </div>

        <div className="container mt-3 text-center text-md-start text-lg-start ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime
            rerum consequuntur necessitatibus nostrum molestiae, non culpa nulla
            doloremque accusantium. Quisquam cumque iusto quaerat, eaque minus
            labore voluptates, in laboriosam quae hic rem dolores illum quod
            voluptate perspiciatis sunt reprehenderit dicta! Quam quaerat
            reiciendis earum nobis quas est, esse assumenda.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            maxime repellat illum numquam fugiat ratione aliquam recusandae
            voluptatibus impedit dolores repellendus, magnam ab obcaecati saepe
            nemo soluta deleniti iure itaque cupiditate odit architecto iste
            enim! Ad dolorem provident alias! Minima libero tempore doloremque
            aliquam! Nisi autem beatae illo hic exercitationem!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            voluptatum minus dolores qui aliquid, facilis omnis! Minima dolorem,
            asperiores ducimus saepe beatae nulla non quo error incidunt
            voluptate enim illo nostrum aspernatur sed ab deleniti voluptatibus
            molestiae placeat quidem iure itaque? Repudiandae perferendis, porro
            sunt officia accusantium quam sequi laboriosam?
          </p>
        </div>
      </div>
    </>
  );
};

export const Testimonials = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row align-items-center justify-content-center gx-md-5">
            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="d-flex flex-column align-items-start mb-3">
                <h3 className={`mb-0 ${styles.testimonials}`}>Testimonials</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                eius pariatur tenetur dolor perferendis eveniet?
              </p>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7 mt-3">
              <div className="col">
                <div className="card h-100 w-auto text-center">
                  <div className="card-body">
                    <p className="card-text text-dark text-start">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      A ipsam autem possimus illo tenetur asperiores, eius nihil
                      eum quis numquam nisi, neque veniam ea ut!
                    </p>
                    <h3 className={`card-title ${styles.underlineColor}`}></h3>
                    <div className="d-flex align-items-center">
                      <Image
                        src={Ini}
                        className="rounded-circle me-3"
                        alt="..."
                      />
                      <div className="text-start">
                        <h5>NAME</h5>
                        <p className="card-text text-dark">Lorem ipsum dolor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <PaginationIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const FeedbackForm = () => {
  return (
    <>
      <div className="mt-5">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h3 className={`text-center mb-3 ${styles.feedbackform}`}>
              Feedback Form
            </h3>
            {/* Form */}
            <form className="bg-white p-4 w-100">
              <div className="form-floating mb-3">
                <input
                  type="name"
                  className="form-control"
                  id="floatingInputName"
                  placeholder="Titi Ekundayo"
                />
                <label htmlFor="floatingName">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating">
                <textarea
                  className={`form-control`}
                  placeholder="Leave a message here"
                  id="floatingTextarea"
                  style={{ height: 200 }}
                ></textarea>
                <label htmlFor="floatingTextarea">Message</label>
              </div>
            </form>
            <div className="text-center mt-3">
              <button type="submit" className={`btn ${styles.btnbgcolor}`}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
