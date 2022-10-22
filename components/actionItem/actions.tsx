import style from "../../styles/Home.module.scss";
import React, { Fragment } from "react";
import { Data } from "../../pages/home";
import Image from "next/image";
import { useContext, useState } from "react";
import { DataContext } from "../../store/data-context";
import { useRouter } from "next/router";
const Actions: React.FC<Data> = (props) => {
  const [page, setPage] = useState(false);
  const router = useRouter();
  const dataCtx = useContext(DataContext);
  const myImage = `"${props.image}"`;

  const pageChanger = () => {
    setPage(!page);
  };
  const buttonHandler = () => {
    dataCtx.addLastData({
      id: props.id,
      point: props.point,
      description: props.description,
      image: props.image,
      title: props.title,
    });
    router.push("./action");
  };
  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  return (
    <div onClick={buttonHandler} className={style.action_layout}>
      <div className={style.action_svg_container}>
        <Image
          loader={myLoader}
          src={props.image}
          width={36}
          height={36}
          alt="test"
          unoptimized={true}
        />
      </div>
      <div className={style.action_text_container}>
        <h1 className={style.action_text_caption}>{props.title}</h1>
        <p className={style.action_text_comment}>{props.description}</p>
      </div>

      <h1 className={style.action_points}>+${props.point}</h1>
    </div>
  );
};
export default Actions;
