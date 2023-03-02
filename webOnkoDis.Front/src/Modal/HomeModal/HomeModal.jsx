import styles from "./Home.module.scss";
import HomePost from "../../Api/HomePost";
import { useEffect, useState } from "react";

const HomeModal = ({ active, setActive, idActive, setIdActive }) => {
  const [homePost, setHomePost] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [idActive]);

  async function fetchPosts() {
    if (idActive !== 0) {
      const res = await HomePost.getById(idActive);
      setHomePost(res);
      setId(res.id);
      setTitle(res.title);
      setDescription(res.description);
    }
    {
      setHomePost([]);
    }
  }

  const Post = () => {
    const newPost = {
      id: id,
      title: title,
      description: description,
    };
    const jsonPost = JSON.stringify(newPost);
    if (idActive === 0) {
      HomePost.post(jsonPost);
      alert("Успешно добавлен");
    } else {
      HomePost.put(jsonPost);
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
                    id="title"
                    value={homePost.id}
                    disabled
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
              )}
              <div className={styles.mb_20}>
                <label>Заголовок</label>
                <input
                  type="text"
                  id="title"
                  value={homePost.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label for="name">Описание</label>
                <input
                  type="text"
                  id="description"
                  value={homePost.description}
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

export default HomeModal;
