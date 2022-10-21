import Layout from "../../components/layout/layout";
import style from "../../styles/Home.module.scss";
import Action from "../../components/actionItem/actions";
import { DataContext } from "../../store/data-context";
import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
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

const Home: React.FC<data> = ({ data }) => {
  let softStarter = true;
  const dataCtx = useContext(DataContext);

  console.log(dataCtx.data);

  useEffect(() => {
    if (softStarter) {
      data.map((data) => {
        dataCtx.addData(data);
      });
    }

    softStarter = false;
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://cdn.mallconomy.com/testcase/actions.json"
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
    revalidate: 600,
  };
};
export default Home;
