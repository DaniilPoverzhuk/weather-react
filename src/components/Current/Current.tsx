import React from "react";
import styles from "./current.module.scss";
import weatherIcon from "../../assets/img/sun-weather.svg";
import { useCustomSelector } from "../../hooks/store";
import { format } from "date-fns";

export const Current: React.FC = () => {
  const { weather } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );
  const date = new Date();
  const getCurrentTime = (): string => format(date.getTime(), "p");

  return (
    <div className={styles.current__left}>
      <div className={styles.current__left_temp}>
        {Math.floor(weather.main.temp)}
      </div>
      <div className={styles.current__left_title}>Сегодня</div>
      <div className={styles.current__left_info}>
        <div className={styles.current__left_time}>
          Время: {getCurrentTime()}
        </div>
        <div className={styles.current__left_city}>Город: {weather.name}</div>
      </div>
      <img
        src={weatherIcon}
        className={styles.current__left_image}
        alt="sun"
      ></img>
    </div>
  );
};

export default Current;
