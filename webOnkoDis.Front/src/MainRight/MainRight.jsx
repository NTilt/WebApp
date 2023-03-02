import React from "react";
import styles from "./MainRight.module.scss";

const MainRight = ({ homePost }) => {
  return homePost === undefined ? (
    <div className={styles.main}>
      <div className={styles.main_info}>
        <div className={styles.main_info_header}>
          <div className={styles.main_info_header_text}>
            Онкологическая служба
            <br />
            Саратовской области
          </div>
        </div>
        <div className={styles.redline}>
          <img src="/images/redline.png" className={styles.red_line} />
        </div>
        <div className={styles.main_info_text}>
          История онкологической службы Саратовской области начинается с
          создания первого Областного онкологического диспансера,
          организованного на территории г. Энгельса в сентябре 1945 года по
          распоряжению Совета Народных Комиссаров СССР специальным
          постановлением «О мероприятиях по улучшению онкологической помощи
          населению».С 8 февраля 1946 года диспансер стал выполнять функции
          Саратовского областного онкологического диспансера.
        </div>
        <button className={styles.more}>Подробнее</button>
      </div>
    </div>
  ) : (
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

export default MainRight;
