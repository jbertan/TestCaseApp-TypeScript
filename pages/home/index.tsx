import Layout from "../../components/layout/layout";
import style from "../../styles/Home.module.scss";
import Action from "../../components/actionItem/actions";
const Home = () => {
  return (
    <div className={style.layout_white}>
      <Layout>
        <div className={style.center_relative}>
          <h1 className={style.action_heading_text}>Actions to be completed</h1>
          <Action />
          <Action />
        </div>
      </Layout>
    </div>
  );
};
export default Home;
