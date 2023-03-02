import React from "react";
import styles from "./ModalOk.module.scss";

function ModelOk({ visible, setVisible }) {
  return (
    visible && (
      <div className={styles.model}>
        <div className={styles.container}>
          <div className={`${styles.dj} ${styles.m}`}>
            <img className={styles.model_ok} src="/images/modelOk.png"></img>
          </div>
          <div className={`${styles.dj} ${styles.m} ${styles.text}`}>
            Сообщение<br></br> отправлено
          </div>
          <div className={`${styles.dj} ${styles.m_20} ${styles.text}`}>
            <button onClick={() => setVisible(false)} className={styles.enroll}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ModelOk;
