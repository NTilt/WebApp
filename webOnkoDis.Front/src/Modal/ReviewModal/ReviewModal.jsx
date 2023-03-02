import { useEffect, useState } from "react";
import styles from "./Review.module.scss";
import ReviewPost from "../../Api/ReviewPost";

const ReviewModal = ({ active, setActive, idActive, setIdActive }) => {
  const [reviewPost, setReviewPost] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [dateOnly, setDateOnly] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [idActive]);

  async function fetchPosts() {
    if (idActive !== 0) {
      const res = await ReviewPost.getById(idActive);
      setReviewPost(res);
      setId(res.id);
      setName(res.name);
      setDateOnly(res.dateOnly);
      setDescription(res.description);
    }
    {
      setReviewPost([]);
    }
  }

  const Post = () => {
    const newPost = {
      id: id,
      name: name,
      dateOnly: dateOnly,
      description: description,
    };
    const jsonPost = JSON.stringify(newPost);
    if (idActive === 0) {
      ReviewPost.post(jsonPost);
      alert("Успешно добавлен");
    } else {
      ReviewPost.put(jsonPost);
      alert("Успешно обновлен");
    }
    setActive(false);
    window.location.reload();
  };

  if (!active) {
    return null;
  } else {
    return (
      <div
        className={active ? styles.main_container + " " + styles.active : ""}
        onClick={() => setActive(false)}
      >
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
          <div className={styles.cont}>
            <div className={styles.title}>
              {idActive === 0 ? "Создание" : "Редактирование"} поста
            </div>
            <div className={styles.form}>
              {idActive !== 0 && (
                <div className={styles.mb_20}>
                  <label>ID</label>
                  <input
                    type="text"
                    id="ID"
                    value={reviewPost.id}
                    disabled
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
              )}
              <div className={styles.mb_20}>
                <label>Имя</label>
                <input
                  type="text"
                  id="name"
                  value={reviewPost.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label for="name">Дата</label>
                <input
                  type="date"
                  id="date"
                  value={reviewPost.dateOnly}
                  onChange={(e) => setDateOnly(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label for="name">Описание</label>
                <input
                  type="text"
                  id="description"
                  value={reviewPost.description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => Post()}
                >
                  {idActive === 0 ? "Cоздать" : "Обновить"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ReviewModal;
