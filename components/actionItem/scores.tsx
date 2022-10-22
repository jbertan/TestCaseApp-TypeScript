import style from "../../styles/Home.module.scss";
import { myPoint } from "../../pages/mypoints";
import React from "react";

const Scores: React.FC<myPoint> = (props) => {
  return (
    <div className={style.frame1832}>
      <h1 className={style.points_text}>{props.text}</h1>
      <p className={style.points_points}>+{props.point}</p>
    </div>
  );
};
export default Scores;
