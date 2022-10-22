import React from "react";
import SquareCardReclaim from "../../components/card/squareCardReclaim";
import SquareCardCongratulations from "../../components/card/squareCardCongratulations";
import style from "../../styles/Home.module.scss";
import Layout from "../../components/layout/layout";
import { Data } from "../../pages/home";

const Action: React.FC<Data> = (props) => {
  return (
    <div className={style.layout_yellow}>
      <Layout>
        <div className={style.center}>
          <SquareCardCongratulations />
          <SquareCardReclaim />
        </div>
      </Layout>
    </div>
  );
};
export default Action;
