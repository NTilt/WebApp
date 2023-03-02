import { useEffect, useState } from "react";
import AboutPost from "../../Api/AboutPost";
import styles from "./About.module.scss";

const AboutModal = ({ active, setActive, idActive, setIdActive }) => {
  const [aboutPost, setAboutPost] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [idActive]);

  async function fetchPosts() {
    if (idActive !== 0) {
      const res = await AboutPost.getById(idActive);
      setAboutPost(res);
      setId(res.id);
      setTitle(res.title);
      setDescription(res.description);
    }
    {
      setAboutPost([]);
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
      AboutPost.post(jsonPost);
      alert("Успешно добавлен");
    } else {
      AboutPost.put(jsonPost);
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
                    value={aboutPost.id}
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
                  value={aboutPost.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label for="name">Описание</label>
                <input
                  type="text"
                  id="description"
                  value={aboutPost.description}
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

export default AboutModal;
