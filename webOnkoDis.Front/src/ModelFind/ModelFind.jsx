import React from "react";
import styles from "./ModelFind.module.scss";
import { useState, useEffect } from "react";

function ModelFind({ visible, setVisible }) {
  return (
    visible && (
      <div className={styles.model_find}>
        <div className={styles.container}>
          <input placeholder="Что ищем?" />
          <button className={styles.container_find}>НАЙТИ</button>
          <button
            onClick={() => {
              setVisible(false);
            }}
            className={styles.container_close}
          >
            X
          </button>
          <div className={styles.info}>
            <div className={styles.info_h}>
              <div className={styles.info_h_f}>
                <p>О диспансере</p>
                <ul>
                  <li>Лента событий</li>
                  <li>Руководство</li>
                  <li>Структура</li>
                  <li>История</li>
                  <li>Документы</li>
                </ul>
              </div>
              <div className={styles.info_h_s}>
                <p>Контакты</p>
                <ul>
                  <li>Областной клинический онкологический диспансер</li>
                  <li>Лечебно-диагностический отдел №1</li>
                  <li>Лечебно-диагностический отдел №2</li>
                  <li>Лечебно-диагностический отдел №3</li>
                </ul>
              </div>
              <div className={styles.info_h_t}>
                <p>Отзывы</p>
                <ul>
                  <li>Оставить отзыв</li>
                </ul>
              </div>
            </div>
            <div className={styles.info_h}>
              <div className={styles.info_h_f}>
                <p>Пациентам</p>
                <ul>
                  <li>Диагностика</li>
                  <li>Лечение</li>
                  <li>Реабилитация</li>
                  <li>
                    Амбулаторное<br></br> лечение
                  </li>
                  <li>
                    Стационарное<br></br> лечение
                  </li>
                </ul>
              </div>
              <div className={styles.info_h_f}>
                <p>Доп. информация</p>
                <ul>
                  <li>Задать вопрос</li>
                  <li>Полезно знать (статьи)</li>
                  <li>Паллиативная помощь</li>
                  <li>Ответы на вопросы (FAQ)</li>
                  <li>Онкологическая служба</li>
                </ul>
              </div>
              <div className={styles.info_h_t}>
                <p>Доп. информация</p>
                <ul>
                  <li>
                    Бесплатная медицинская помощь и платные<br></br> услуги
                  </li>
                  <li>Информация пациентам и их родственникам</li>
                  <li>Порядок приема и госпитализации</li>
                </ul>
              </div>
              <div>
                <p>Врачи</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ModelFind;
