import { useEffect } from "react";
import { useState } from "react";
import ReviewPost from "../Table/ReviewTable/ReviewTable";
import AboutTable from "../Table/AboutTable.jsx/AboutTable";
import ArticleTable from "../Table/ArticleTable.jsx/ArticleTable";
import DoctorTable from "../Table/DoctorTable/DoctorTable";
import HomeTable from "../Table/HomeTable/HomeTable";
import styles from "./Admin.module.scss";
import RequestTable from "../Table/RequestTable/RequestTable";

function Admin() {
  const [ActiveTab, setActiveTab] = useState(0);

  useEffect(() => {}, [ActiveTab]);

  return (
    <div className={styles.patients}>
      <div className={styles.patients_list}>
        <ul className={styles.patients_list_info}>
          <li
            className={ActiveTab === 0 ? styles.selected : ""}
            onClick={() => setActiveTab(0)}
          >
            Информация
          </li>
          <li
            className={ActiveTab === 1 ? styles.selected : ""}
            onClick={() => setActiveTab(1)}
          >
            О Нас
          </li>
          <li
            className={ActiveTab === 2 ? styles.selected : ""}
            onClick={() => setActiveTab(2)}
          >
            Врачи
          </li>
          <li
            className={ActiveTab === 3 ? styles.selected : ""}
            onClick={() => setActiveTab(3)}
          >
            Статьи
          </li>
          <li
            className={ActiveTab === 4 ? styles.selected : ""}
            onClick={() => setActiveTab(4)}
          >
            Заявки
          </li>
          <li
            className={ActiveTab === 5 ? styles.selected : ""}
            onClick={() => setActiveTab(5)}
          >
            Отзывы
          </li>
        </ul>
      </div>
      {ActiveTab === 0 && <HomeTable></HomeTable>}
      {ActiveTab === 1 && <AboutTable></AboutTable>}
      {ActiveTab === 2 && <DoctorTable></DoctorTable>}
      {ActiveTab === 3 && <ArticleTable></ArticleTable>}
      {ActiveTab === 4 && <RequestTable></RequestTable>}
      {ActiveTab === 5 && <ReviewPost></ReviewPost>}
    </div>
  );
}

export default Admin;
