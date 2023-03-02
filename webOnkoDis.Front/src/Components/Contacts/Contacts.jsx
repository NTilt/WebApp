import styles from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_info}>
        <div className={styles.info}>
          <p>Областной клинический онкологический диспансер</p>
          <div className={styles.redline_new}>
            <img src="images/redline.png" className={styles.red_line} />
          </div>
          <h2>Контактные данные:</h2>
          <h2>pochta@mail.com</h2>
          <h2>8 (845) 239-44-21</h2>
          <div className={styles.icons}>
            <div className={styles.icons_left}>
              <img
                src="images/logo_telegram.png"
                className={styles.logo_tg}
              ></img>
              <img src="images/logo_vk.png" className={styles.logo_vk}></img>
              <img
                src="images/logo_youtube.png"
                className={styles.logo_yt}
              ></img>
            </div>
          </div>
        </div>
        <img src="images/photo.png" className={styles.photo} />
      </div>
      <div className={styles.map} />
    </div>
  );
}

export default Contacts;
