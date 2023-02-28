import styles from "../../styles/generalstyles/colors.module.scss";

export const LeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`bi bi-caret-left-fill text-white`}
      viewBox="0 0 16 16"
    >
      <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
    </svg>
  );
};

export const RightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`bi bi-caret-right-fill ${styles.secColor}`}
      viewBox="0 0 16 16"
    >
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>
  );
};

export const PaginationIcons = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <LeftIcon />
        <RightIcon />
      </div>
    </>
  );
};
