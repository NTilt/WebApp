import { useEffect, useState } from "react";
import styles from "./Patients.module.scss";
import ArticlePost from "../Api/ArticlePost";

function ForPatients() {
  const [ActiveTab, setActiveTab] = useState();
  const [articlePosts, setArticlePosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await ArticlePost.getAll();
    setArticlePosts(res);
    if (res !== null) {
      setActiveTab(res[0].id);
    }
  }

  return (
    <div className={styles.patients}>
      <div className={styles.patients_list}>
        <ul className={styles.patients_list_info}>
          {articlePosts.map((articlePost) => (
            <li
              className={ActiveTab === articlePost.id ? styles.selected : ""}
              onClick={() => setActiveTab(articlePost.id)}
            >
              {articlePost.title}
            </li>
          ))}
        </ul>
      </div>
      {articlePosts.map(
        (articlePost) =>
          ActiveTab == articlePost.id && (
            <div className={styles.patients_info}>
              <span>
                <h2>{articlePost.title}</h2>
              </span>
              <p>{articlePost.description}</p>
            </div>
          )
      )}
      <img src="/images/photo_doctor.png" className={styles.photo_doctor}></img>
    </div>
  );
}

export default ForPatients;
