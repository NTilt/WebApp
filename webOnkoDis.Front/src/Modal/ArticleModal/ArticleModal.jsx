import { useEffect, useState } from "react";
import ArticlePost from "../../Api/ArticlePost";
import styles from "./Article.module.scss";

const ArticleModal = ({ active, setActive, idActive, setIdActive }) => {
  const [articlePost, setArticlePost] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [idActive]);

  async function fetchPosts() {
    if (idActive !== 0) {
      const res = await ArticlePost.getById(idActive);
      setArticlePost(res);
      setId(res.id);
      setTitle(res.title);
      setDescription(res.description);
    }
    {
      setArticlePost([]);
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
      ArticlePost.post(jsonPost);
      alert("Успешно добавлен");
    } else {
      ArticlePost.put(jsonPost);
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
                    value={articlePost.id}
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
                  value={articlePost.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label for="name">Описание</label>
                <input
                  type="text"
                  id="description"
                  value={articlePost.description}
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

export default ArticleModal;
