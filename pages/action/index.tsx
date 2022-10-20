import React from "react";
import SquareCardReclaim from "../../components/card/squareCardReclaim";
import SquareCardCongratulations from "../../components/card/squareCardCongratulations";
import styles from "../../styles/Home.module.scss";
const Action: React.FC = () => {
  return (
    <div className={styles.action_view}>
      <SquareCardCongratulations />
    </div>
  );
};
export default Action;
