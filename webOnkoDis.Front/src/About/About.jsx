import { useEffect, useState } from "react";
import styles from "./About.module.scss";
import AboutPost from "../Api/ArticlePost";

function About() {
  const [ActiveTab, setActiveTab] = useState();
  const [aboutPosts, setAboutPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await AboutPost.getAll();
    setAboutPosts(res);
    if (res !== null) {
      setActiveTab(res[0].id);
    }
  }

  return (
    <div className={styles.about}>
      <div className={styles.about_list}>
        <ul className={styles.about_list_info}>
          {aboutPosts.map((aboutPost) => (
            <li
              className={ActiveTab === aboutPost.id ? styles.selected : ""}
              onClick={() => setActiveTab(aboutPost.id)}
            >
              {aboutPost.title}
            </li>
          ))}
        </ul>
      </div>
      {aboutPosts.map(
        (aboutPost) =>
          ActiveTab == aboutPost.id && (
            <div className={styles.about_info}>
              <span>
                <h2>{aboutPost.title}</h2>
              </span>
              <p>{aboutPost.description}</p>
            </div>
          )
      )}
      <img
        src="/images/photo_doctor_sec.png"
        className={styles.photo_doctor_sec}
      ></img>
    </div>
  );
}

export default About;
