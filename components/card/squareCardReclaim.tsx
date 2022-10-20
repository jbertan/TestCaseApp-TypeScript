import styles from "../../styles/Home.module.scss";
import Button from "../ui/button";
const squareCardReclaim = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <div className={styles.container_body}>
          <div className={styles.frame_1831}>
            <div className={styles.container_svg}>
              <svg
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="36" cy="36" r="36" fill="#FF6DAA" />
              </svg>
            </div>

            <h1 className={styles.frame_h1}>Lorem ipsum</h1>
            <p className={styles.frame_p}>Lorem ipsum dolor sit amet.</p>
          </div>
          <h1 className={styles.container_h1}>Lorem, ipsum dolor sit amet </h1>
        </div>
        <div className={styles.container_footer}>
          <div className="button_group">
            <Button>Earn Points</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default squareCardReclaim;
