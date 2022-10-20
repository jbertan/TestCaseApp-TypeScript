import React from "react";
import SquareCardReclaim from "../../components/card/squareCardReclaim";
import SquareCardCongratulations from "../../components/card/squareCardCongratulations";
import style from "../../styles/Home.module.scss";
import Layout from "../../components/layout/layout";
const Action: React.FC = () => {
  return (
    <div className={style.layout_yellow}>
      <Layout>
        <SquareCardCongratulations />
        {/*   <SquareCardReclaim /> */}
      </Layout>
    </div>
  );
};
export default Action;
