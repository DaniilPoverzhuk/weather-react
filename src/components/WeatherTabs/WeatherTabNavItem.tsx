import React from "react";
import styles from "./weatherTabs.module.scss";

interface PropsWeatherTabNavItem {
  value: string;
}

const WeatherTabNavItem = ({ value }: PropsWeatherTabNavItem) => {
  return <li className={styles.weather_tabs__item}>{value}</li>;
};

export default WeatherTabNavItem;
