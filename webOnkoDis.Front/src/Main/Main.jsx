import React from "react";
import styles from "./Main.module.scss";

const Main = ({ homePost }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main_info}>
        <div className={styles.main_info_header}>
          <div className={styles.main_info_header_text}>{homePost.title}</div>
        </div>
        <div className={styles.redline}>
          <img src="/images/redline.png" className={styles.red_line} />
        </div>
        <div className={styles.main_info_text}>{homePost.title}</div>
        <button className={styles.more}>Подробнее</button>
      </div>
    </div>
  );
};

export default Main;
