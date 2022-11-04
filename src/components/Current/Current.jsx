import React from "react";
import styles from "./current.module.scss";
import weatherIcon from "../../assets/img/sun-weather.svg";

function Current() {
  return (
    <div className={styles.current__left}>
      <div className={styles.current__left_temp}>20</div>
      <div className={styles.current__left_title}>Сегодня</div>
      <div className={styles.current__left_info}>
        <div className={styles.current__left_time}>Время: 22:00</div>
        <div className={styles.current__left_city}>Город: Санкт-Петербург</div>
      </div>
      <img src={weatherIcon} className={styles.current__left_image} alt="123"></img>
    </div>
  );
}

export default Current;
