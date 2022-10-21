import Layout from "../../components/layout/layout";
import style from "../../styles/Home.module.scss";
import Action from "../../components/actionItem/actions";
import { DataContext } from "../../store/data-context";
import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import Router from "next/router";
export interface Data {
  id: number;
  title: string;
  description: string;
  point: number;
  image: string;
}
export interface data {
  data: Data[];
}

const Home: React.FC = () => {
  const dataCtx = useContext(DataContext);

  console.log(dataCtx);
  useEffect(() => {
    if (dataCtx.lastData.id === 0 && dataCtx.data.length === 0) {
      Router.push("./intro");
    }
  }, []);
  return (
    <div className={style.layout_white}>
      <Layout>
        <div className={style.center_relative}>
          <h1 className={style.action_heading_text}>Actions to be completed</h1>
          {dataCtx.data.map((data) => (
            <Action
              key={data.id}
              id={data.id}
              point={data.point}
              description={data.description}
              title={data.title}
              image={data.image}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
