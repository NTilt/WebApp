import styles from "./Doctor.module.scss";
import DoctorPost from "../../Api/DoctorPost";
import { useEffect, useState } from "react";
import DoctorModal from "../../Modal/DoctorModal/DoctorModal";

function DoctorTable() {
  const [doctorPosts, setDoctorPosts] = useState([]);
  const [modelActive, setModelActive] = useState(false);
  const [idActive, setIdActive] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await DoctorPost.getAll();
    setDoctorPosts(res);
  }

  async function DeletePostById(id) {
    console.log(id);
    await DoctorPost.DeleteById(id);
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <DoctorModal
        active={modelActive}
        setActive={setModelActive}
        idActive={idActive}
        setIdActive={setIdActive}
      ></DoctorModal>
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
            <th>Ф.И.О</th>
            <th>Стаж</th>
            <th>Роль</th>
            <th>Ученая степень</th>
            <th>Телефон</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {doctorPosts.map((doctorPost) => (
            <tr>
              <td>{doctorPost.id}</td>
              <td>
                {doctorPost.surname}&nbsp;
                {doctorPost.name}&nbsp;
                {doctorPost.patronymic}
              </td>
              <td>{doctorPost.stage}</td>
              <td>{doctorPost.role}</td>
              <td>{doctorPost.academicDegree}</td>
              <td>{doctorPost.phone}</td>
              <td className={styles.last_td}>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => {
                    setModelActive(true);
                    setIdActive(doctorPost.id);
                  }}
                >
                  Редактировать
                </button>
                <button
                  className={styles.custom_btn + " " + styles.btn_2}
                  onClick={() => DeletePostById(doctorPost.id)}
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

export default DoctorTable;
