import { useEffect, useState } from "react";
import RequestPost from "../../Api/RequestPost";
import styles from "./Request.module.scss";

const RequestModal = ({ active, setActive, idActive, setIdActive }) => {
  const [requestPost, setRequestPost] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sms, setSms] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [idActive]);

  async function fetchPosts() {
    if (idActive !== 0) {
      const res = await RequestPost.getById(idActive);
      setRequestPost(res);
      setId(res.id);
      setName(res.name);
      setPhone(res.phone);
      setEmail(res.email);
      setSms(res.sms);
    }
    {
      setRequestPost([]);
    }
  }

  const Post = () => {
    const newPost = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      sms: sms,
    };
    const jsonPost = JSON.stringify(newPost);
    if (idActive === 0) {
      RequestPost.post(jsonPost);
      alert("Успешно добавлен");
    } else {
      RequestPost.put(jsonPost);
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
                    id="name"
                    value={requestPost.id}
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
                  value={requestPost.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label for="name">Почта</label>
                <input
                  type="text"
                  id="email"
                  value={requestPost.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label>Телефон</label>
                <input
                  type="text"
                  id="phone"
                  value={requestPost.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label>СМС</label>
                <input
                  type="text"
                  id="sms"
                  value={requestPost.sms}
                  onChange={(e) => setSms(e.target.value)}
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

export default RequestModal;
