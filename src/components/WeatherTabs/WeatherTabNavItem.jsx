import React from "react";
import styles from "./weatherTabs.module.scss";

function WeatherTabNavItem({ value }) {
  return <li className={styles.weather_tabs__item}>{value}</li>;
}

export default WeatherTabNavItem;
