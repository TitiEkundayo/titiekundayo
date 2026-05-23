import styles from "../../styles/generalstyles/colors.module.scss";

export const ScrollUpIcon = () => {
  return (
    <>
      <div className="d-flex justify-content-end mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          fill="currentColor"
          className={`bi bi-arrow-up-circle-fill ${styles.secColor}`}
          viewBox="0 0 48 48"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      </div>
    </>
  );
};
