import style from "../../styles/Home.module.scss";
import Layout from "../../components/layout/layout";
import { Fragment, useEffect } from "react";
import Scores from "../../components/actionItem/scores";
import { useContext } from "react";
import { DataContext } from "../../store/data-context";
import { useRouter } from "next/router";
export interface myPoint {
  id?: number;
  text: string;
  point: number;
}
const MyPoints = () => {
  const router = useRouter();
  const dataCtx = useContext(DataContext);
  useEffect(() => {
    if (dataCtx.lastData.id === 0) {
      router.push("./intro");
    }
  });
  return (
    <div className={style.layout_white}>
      <Layout>
        <div className={style.center_relative}>
          <div className={style.points_heading}>
            <h1 className={style.points_caption}>Completed Actions</h1>
          </div>
          {dataCtx.scoreData.map((data, index) => (
            <Scores key={index} text={data.title} point={data.point} />
          ))}
        </div>
      </Layout>
    </div>
  );
};
export default MyPoints;
