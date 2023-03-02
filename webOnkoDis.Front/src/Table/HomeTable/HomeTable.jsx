import styles from "./HomePost.module.scss";
import HomePost from "../../Api/HomePost";
import { useEffect, useState } from "react";
import HomeModal from "../../Modal/HomeModal/HomeModal";

function HomePostTable() {
  const [homePosts, setHomePosts] = useState([]);
  const [modelActive, setModelActive] = useState(false);
  const [idActive, setIdActive] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await HomePost.getAll();
    setHomePosts(res);
  }

  async function DeletePostById(id) {
    console.log(id);
    await HomePost.DeleteById(id);
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <HomeModal
        active={modelActive}
        setActive={setModelActive}
        idActive={idActive}
        setIdActive={setIdActive}
      ></HomeModal>
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
          {homePosts.map((homePost) => (
            <tr id={homePost.id}>
              <td>{homePost.id}</td>
              <td>{homePost.title}</td>
              <td>{homePost.description}</td>
              <td className={styles.last_td}>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => {
                    setIdActive(homePost.id);
                    setModelActive(true);
                  }}
                >
                  Редактировать
                </button>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => DeletePostById(homePost.id)}
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

export default HomePostTable;
