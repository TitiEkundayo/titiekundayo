import styles from "../styles/componentstyles/books.module.scss";

export const FeedbackForm = () => {
  return (
    <>
      <div>
        <form className={`bg-white p-4 rounded`}>
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

          <div className="text-center mt-3">
            <button type="submit" className={`btn ${styles.btnbgcolor}`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
