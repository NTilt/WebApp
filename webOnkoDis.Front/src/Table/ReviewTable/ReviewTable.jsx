import styles from "./ReviewPost.module.scss";
import ReviewPost from "../../Api/ReviewPost";
import { useEffect, useState } from "react";
import ReviewModal from "../../Modal/ReviewModal/ReviewModal";

function ReviewPostTable() {
  const [reviewPosts, setReviewPosts] = useState([]);
  const [modelActive, setModelActive] = useState(false);
  const [idActive, setIdActive] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await ReviewPost.getAll();
    setReviewPosts(res);
  }

  async function DeletePostById(id) {
    await ReviewPost.DeleteById(id);
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <ReviewModal
        active={modelActive}
        setActive={setModelActive}
        idActive={idActive}
        setIdActive={setIdActive}
      ></ReviewModal>
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
            <th>Дата</th>
            <th>Отзыв</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {reviewPosts.map((reviewPost) => (
            <tr>
              <td>{reviewPost.id}</td>
              <td>{reviewPost.name}</td>
              <td>{reviewPost.dateOnly}</td>
              <td>{reviewPost.description}</td>
              <td className={styles.last_td}>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => {
                    setModelActive(true);
                    setIdActive(reviewPost.id);
                  }}
                >
                  Редактировать
                </button>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => DeletePostById(reviewPost.id)}
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

export default ReviewPostTable;
