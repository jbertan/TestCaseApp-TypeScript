import Button from "../ui/button";
import style from "../../styles/Home.module.scss";
import { useRouter } from "next/router";
interface func {
  screenHandler: () => void;
}
const SquareCardCongratulations: React.FC = () => {
  const router = useRouter();
  return (
    <div className={style.container}>
      <div className={style.container_wrapper}>
        <div className={style.container_gratz}>
          <div className={style.frame_gratz}>
            <div className={style.icon_gratz}>
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2525 62.5517C24.2447 62.5515 23.2782 62.1509 22.5656 61.4382L1.06682 39.9394C0.374543 39.2226 -0.00851522 38.2626 0.000143664 37.2662C0.00880255 36.2697 0.408486 35.3165 1.11311 34.6119C1.81773 33.9073 2.77092 33.5076 3.76737 33.499C4.76382 33.4903 5.72381 33.8734 6.44057 34.5656L25.2525 53.3776L65.5594 13.0668C66.2762 12.3745 67.2362 11.9915 68.2326 12.0001C69.2291 12.0088 70.1823 12.4085 70.8869 13.1131C71.5915 13.8177 71.9912 14.7709 71.9999 15.7674C72.0085 16.7638 71.6255 17.7238 70.9332 18.4406L27.9394 61.4382C27.2268 62.1509 26.2603 62.5515 25.2525 62.5517Z"
                  fill="black"
                />
              </svg>
            </div>
            <h1 className={style.frame_h1_gratz}>
              Lorem ipsum dolor sit amet.
            </h1>
          </div>
          <p className={style.frame_p_gratz}>
            You&apos;ve earned points for your participation! Keep Up the great
            work!
          </p>
        </div>
        <div className={style.container_footer}>
          <div className="button_group">
            <Button
              onClick={() => {
                router.push("./home");
              }}
            >
              close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SquareCardCongratulations;
