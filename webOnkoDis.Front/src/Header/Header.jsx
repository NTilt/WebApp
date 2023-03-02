import ReactFullpage from "@fullpage/react-fullpage";
import { NavLink } from "react-router-dom";
import ModalSubmit from "../ModalSubmit/ModalSubmit";
import ModelFind from "../ModelFind/ModelFind";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [modalVis, setModalVis] = useState(false);
  const [modalFindVis, setModalFindVis] = useState(false);

  useEffect(() => {}, [modalVis, modalFindVis]);
  return (
    <>
      <ModelFind visible={modalVis} setVisible={setModalVis} />
      <ModalSubmit visible={modalFindVis} setVisible={setModalFindVis} />

      <div className={styles.header}>
        <NavLink to="/">
          <img src="/images/logo.png" className={styles.header_logo_icon} />
        </NavLink>
        <img
          onClick={() => setModalVis(true)}
          src="/images/logo_find.png"
          className={styles.header_logo_find}
        />
        <ul className={styles.header_header_ul}>
          <li>
            <NavLink to="/about" className={({ isActive }) =>(isActive ? `${styles.header_link} ${styles.selected}` : styles.header_link)}>
              О Нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" className={({ isActive }) =>(isActive ? `${styles.header_link} ${styles.selected}` : styles.header_link)}>
              Врачи
            </NavLink>
          </li>
          <li>
            <NavLink to="/patients" className={({ isActive }) =>(isActive ? `${styles.header_link} ${styles.selected}` : styles.header_link)}>
              Пациентам
            </NavLink>
          </li>
          <li>
            <NavLink
              id="contacts"
              to="/contacts"
              className={({ isActive }) =>(isActive ? `${styles.header_link} ${styles.selected}` : styles.header_link)}
            >
              Контакты
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" className={({ isActive }) =>(isActive ? `${styles.header_link} ${styles.selected}` : styles.header_link)}>
              Отзывы
            </NavLink>
          </li>
        </ul>
        <img src="/images/logo_eye.png" className={styles.header_logo_eye} />
        <div className={styles.header_contactsBlock}>
          <p className={styles.header_contactsBlock_phone}>8 (8452) 38-44-28</p>
          <p className={styles.header_contactsBlock_mail}>saratov@ood2.ru</p>
        </div>
        <button onClick={() => setModalFindVis(true)} className="enroll">
          Записаться
        </button>
      </div>
    </>
  );
};

export default Header;
