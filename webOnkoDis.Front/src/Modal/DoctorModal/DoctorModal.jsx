import styles from "./Doctor.module.scss";
import DoctorPost from "../../Api/DoctorPost";
import { useEffect, useState } from "react";

const DoctorModal = ({ active, setActive, idActive, setIdActive }) => {
  const [doctorPost, setDoctorPost] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [stage, setStage] = useState("");
  const [role, setRole] = useState("");
  const [academicDegree, setAcademicDegree] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [idActive]);

  async function fetchPosts() {
    if (idActive !== 0) {
      const res = await DoctorPost.getById(idActive);
      setDoctorPost(res);
      setId(res.id);
      setName(res.name);
      setSurname(res.surname);
      setPatronymic(res.patronymic);
      setStage(res.stage);
      setRole(res.role);
      setAcademicDegree(res.academicDegree);
      setPhone(res.phone);
    }
    {
      setDoctorPost([]);
    }
  }

  const Post = () => {
    const newPost = {
      id: id,
      name: name,
      surname: surname,
      patronymic: patronymic,
      stage: stage,
      role: role,
      academicDegree: academicDegree,
      phone: phone,
    };
    const jsonPost = JSON.stringify(newPost);
    if (idActive === 0) {
      DoctorPost.post(jsonPost);
      alert("Успешно добавлен");
    } else {
      DoctorPost.put(jsonPost);
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
                    value={doctorPost.id}
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
                  value={doctorPost.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label for="name">Фамилия</label>
                <input
                  type="text"
                  id="surname"
                  value={doctorPost.surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label>Отчество</label>
                <input
                  type="text"
                  id="patronymic"
                  value={doctorPost.patronymic}
                  onChange={(e) => setPatronymic(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label>Стаж</label>
                <input
                  type="text"
                  id="stage"
                  value={doctorPost.stage}
                  onChange={(e) => setStage(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label>Роль</label>
                <input
                  type="text"
                  id="role"
                  value={doctorPost.role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label>Ученая степерь</label>
                <input
                  type="text"
                  id="academicDegree"
                  value={doctorPost.academicDegree}
                  onChange={(e) => setAcademicDegree(e.target.value)}
                />
              </div>
              <div className={styles.mb_20}>
                <label>Телефон</label>
                <input
                  type="text"
                  id="phone"
                  value={doctorPost.phone}
                  onChange={(e) => setPhone(e.target.value)}
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

export default DoctorModal;
