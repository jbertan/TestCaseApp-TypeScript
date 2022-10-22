import React from "react";
import SquareCardReclaim from "../../components/card/squareCardReclaim";
import SquareCardCongratulations from "../../components/card/squareCardCongratulations";
import style from "../../styles/Home.module.scss";
import Layout from "../../components/layout/layout";
import { Data } from "../../pages/home";
import { useState, useEffect } from "react";
import { DataContext } from "../../store/data-context";
import { useContext } from "react";
import { useRouter } from "next/router";

const Action: React.FC<Data> = (props) => {
  const dataCtx = useContext(DataContext);
  const router = useRouter();
  const [screen, setScreen] = useState(false);
  const screenHandler = () => {
    setScreen(!screen);
  };
  useEffect(() => {
    if (dataCtx.lastData.id === 0) {
      router.push("./intro");
    }
  });
  return (
    <div className={style.layout_yellow}>
      <Layout>
        <div className={style.center}>
          {screen ? (
            <SquareCardCongratulations />
          ) : (
            <SquareCardReclaim screenHandler={screenHandler} />
          )}
        </div>
      </Layout>
    </div>
  );
};
export default Action;
