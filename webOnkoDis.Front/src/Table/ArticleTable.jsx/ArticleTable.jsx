import styles from "./Article.module.scss";
import ArticlePost from "../../Api/ArticlePost";
import { useEffect, useState } from "react";
import ArticleModal from "../../Modal/ArticleModal/ArticleModal";

function ArticleTable() {
  const [articlePosts, setArticlePosts] = useState([]);
  const [modelActive, setModelActive] = useState(false);
  const [idActive, setIdActive] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await ArticlePost.getAll();
    setArticlePosts(res);
  }

  async function DeletePostById(id) {
    console.log(id);
    await ArticlePost.DeleteById(id);
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <ArticleModal
        active={modelActive}
        setActive={setModelActive}
        idActive={idActive}
        setIdActive={setIdActive}
      ></ArticleModal>
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
          {articlePosts.map((articlePost) => (
            <tr>
              <td>{articlePost.id}</td>
              <td>{articlePost.title}</td>
              <td>{articlePost.description}</td>
              <td className={styles.last_td}>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => {
                    setModelActive(true);
                    setIdActive(articlePost.id);
                  }}
                >
                  Редактировать
                </button>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => DeletePostById(articlePost.id)}
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

export default ArticleTable;
