import React from "react";
import styles from "../../styles/Home.module.scss";

type props = {
  children: React.ReactNode;
  onClick?: () => void;
};
const Button: React.FC<props> = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      <h1>{props.children}</h1>
    </button>
  );
};

export default Button;
