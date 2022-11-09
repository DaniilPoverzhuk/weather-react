import React from "react";
import styles from "./weatherTabs.module.scss";
import weather from "../../assets/img/weather.svg";

const WeatherTabItem: React.FC = () => {
  return (
    <div className={styles.weather_tabs__list_item}>
      <div className={styles.weather_tabs__list_dayWeek}>Сегодня</div>
      <div className={styles.weather_tabs__list_day}>28 авг</div>
      <img
        src={weather}
        className={styles.weather_tabs__list_day}
        alt="weather"
      />
      <div className={styles.weather_tabs__list_max}>+18</div>
      <div className={styles.weather_tabs__list_min}>+15</div>
      <div className={styles.weather_tabs__list_weather}>Облачно</div>
    </div>
  );
};

export default WeatherTabItem;
