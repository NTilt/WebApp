import React from "react";
import ModelOk from "../ModalOk/ModelOk";
import styles from "./ModalSubmit.module.scss";
import { useState, useEffect } from "react";
import RequestPost from "../Api/RequestPost";

function ModelSumbit({ visible, setVisible }) {
  const [modalOkVis, setModalOkVis] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sms, setSms] = useState("");
  useEffect(() => {}, [modalOkVis]);

  const Post = () => {
    const newPost = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      sms: sms,
    };
    const jsonPost = JSON.stringify(newPost);
    RequestPost.post(jsonPost);
  };

  return (
    visible && (
      <>
        <ModelOk visible={modalOkVis} setVisible={setModalOkVis} />
        <div className={styles.model}>
          <div className={styles.container}>
            <div className={styles.container_header}>
              <div className={styles.container_header_left}>
                Заполните онлайн форму<br></br> и мы свяжемся с Вами
              </div>
              <div className={styles.container_header_right}>
                <button
                  onClick={() => {
                    setVisible(false);
                  }}
                  className={styles.container_header_right_close}
                >
                  X
                </button>
              </div>
            </div>
            <div className={styles.redline}></div>
            <div className={styles.container_form}>
              <div className={styles.dm}>
                <input
                  minLength={2}
                  placeholder="Имя"
                  className="data"
                  onChange={(e) => setName(e.target.value)}
                ></input>{" "}
                <span className={styles.form__error}>
                  Введите правильно имя
                </span>
              </div>
              <div className={styles.dm}>
                <input
                  type="tel"
                  placeholder="+7 (800) 555-35-35"
                  className="data"
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
                <span className={styles.form__error}>
                  Введите правильно номер в формате: +7 (800) 555-35-35
                </span>
              </div>
              <div className={styles.dm}>
                <input
                  placeholder="email"
                  className="data"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  minLength={2}
                  type="text"
                  style={{ marginLeft: "100px" }}
                  placeholder="Сообщение"
                  className="data"
                  onChange={(e) => setSms(e.target.value)}
                ></input>
                <span className={styles.form__error}>
                  Введите правильно E-main
                </span>
              </div>
              <div>
                <button
                  onClick={() => {
                    setModalOkVis(true);
                    Post();
                  }}
                  className={styles.submit}
                >
                  Отправить заявку
                </button>
              </div>
              <div className={styles.checkDiv}>
                <input type="checkbox" className={styles.checkInp} />Я
                соглашаюсь с
                <text style={{ color: "red" }}>
                  политикой конфиденциальности
                </text>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default ModelSumbit;
