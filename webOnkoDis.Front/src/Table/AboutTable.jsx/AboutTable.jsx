import styles from "./About.module.scss";
import AboutPost from "../../Api/AboutPost";
import { useEffect, useState } from "react";
import AboutModal from "../../Modal/AboutModal/AboutModal";

function AboutTable() {
  const [aboutPosts, setAboutPosts] = useState([]);
  const [modelActive, setModelActive] = useState(false);
  const [idActive, setIdActive] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await AboutPost.getAll();
    setAboutPosts(res);
  }

  async function DeletePostById(id) {
    await AboutPost.DeleteById(id);
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <AboutModal
        active={modelActive}
        setActive={setModelActive}
        idActive={idActive}
        setIdActive={setIdActive}
      ></AboutModal>
      <div className={styles.text_box}>
        <button
          className={styles.custom_btn + " " + styles.btn_2}
          onClick={() => {
            setModelActive(true);
            setIdActive(0);
          }}
        >
          Cоздать
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Идентификатор</th>
            <th>Заголовок</th>
            <th>Описание</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {aboutPosts.map((aboutPost) => (
            <tr>
              <td>{aboutPost.id}</td>
              <td>{aboutPost.title}</td>
              <td>{aboutPost.description}</td>
              <td className={styles.last_td}>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => {
                    setIdActive(aboutPost.id);
                    setModelActive(true);
                  }}
                >
                  Редактировать
                </button>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => DeletePostById(aboutPost.id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AboutTable;
