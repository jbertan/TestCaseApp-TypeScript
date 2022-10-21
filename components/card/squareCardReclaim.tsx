import styles from "../../styles/Home.module.scss";
import Button from "../ui/button";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../store/data-context";
import { useRouter } from "next/router";
import Image from "next/image";
interface func {
  screenHandler: () => void;
}
const SquareCardReclaim: React.FC<func> = (props) => {
  const router = useRouter();
  const [screen, setScreen] = useState(false);
  const dataCtx = useContext(DataContext);
  const buttonHandler = () => {
    dataCtx.addPoint(dataCtx.lastData.point);
    dataCtx.removeData(dataCtx.lastData.id);
    dataCtx.addCompleted(dataCtx.lastData);
    props.screenHandler();
  };
  useEffect(() => {
    if (dataCtx.lastData.id === 0) {
      router.push("./home");
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <div className={styles.container_body}>
          <div className={styles.frame_1831}>
            <div className={styles.container_svg}>
              <Image
                src={dataCtx ? dataCtx.lastData.image : ""}
                alt="its image"
                width={72}
                height={72}
              />
            </div>

            <h1 className={styles.frame_h1}>+{dataCtx.lastData.point}</h1>
            <p className={styles.frame_p}>{dataCtx.lastData.title}</p>
          </div>
          <h1 className={styles.container_h1}>
            {dataCtx.lastData.description}{" "}
          </h1>
        </div>
        <div className={styles.container_footer}>
          <div className="button_group">
            <Button onClick={buttonHandler}>Earn Points</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SquareCardReclaim;
