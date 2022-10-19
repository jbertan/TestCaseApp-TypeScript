import styles from "../../styles/Home.module.scss";
import Button from "../ui/button";
const squareCardReclaim = () => {
  return (
    <div className="styles.container">
      <div className="Wrapper">
        <div className="container-body">
          <div className="frame-1831">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="36" cy="36" r="36" fill="#FF6DAA" />
            </svg>
            <h1 className="points"></h1>
            <p className="points-heading"></p>
          </div>
          <h1 className="container-body-comment"></h1>
        </div>
        <div className="container-footer">
          <Button>Earn Points</Button>
        </div>
      </div>
    </div>
  );
};
export default squareCardReclaim;
