import styles from "./RequestPost.module.scss";
import RequestPost from "../../Api/RequestPost";
import { useEffect, useState } from "react";
import RequestModal from "../../Modal/RequestModal/RequestModal";

function RequestPostTable() {
  const [requestPosts, setRequestPosts] = useState([]);
  const [modelActive, setModelActive] = useState(false);
  const [idActive, setIdActive] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await RequestPost.getAll();
    setRequestPosts(res);
  }

  async function DeletePostById(id) {
    console.log(id);
    await RequestPost.DeleteById(id);
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <RequestModal
        active={modelActive}
        setActive={setModelActive}
        idActive={idActive}
        setIdActive={setIdActive}
      ></RequestModal>
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
            <th>Имя</th>
            <th>Телефон</th>
            <th>Почта</th>
            <th>Отзыв</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {requestPosts.map((requestPost) => (
            <tr>
              <td>{requestPost.id}</td>
              <td>{requestPost.name}</td>
              <td>{requestPost.phone}</td>
              <td>{requestPost.email}</td>
              <td>{requestPost.sms}</td>
              <td className={styles.last_td}>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => {
                    setModelActive(true);
                    setIdActive(requestPost.id);
                  }}
                >
                  Редактировать
                </button>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => DeletePostById(requestPost.id)}
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

export default RequestPostTable;
