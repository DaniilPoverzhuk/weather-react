import styles from "./currentInfo.module.scss";
import cloud from "../../assets/img/cloud.svg";
import { useCustomSelector } from "../../hooks/store";
import HomeSvgSelectors from "../HomeSvgSelectors";

function CurrentInfo() {
  const { weather } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );
  return (
    <div className={styles.currentInfo}>
      <ul className={styles.currentInfo__list}>
        <li className={styles.currentInfo__list_item}>
          <HomeSvgSelectors id="temp" />
          <p className={styles.currentInfo__list_title}>Температура</p>
          <p className={styles.currentInfo__list_value}>
            {Math.round(weather.main.temp)} - ощущается как{" "}
            {Math.round(weather.main.feels_like)}
          </p>
        </li>
        <li className={styles.currentInfo__list_item}>
          <HomeSvgSelectors id="pressure" />
          <p className={styles.currentInfo__list_title}>Давление</p>
          <p className={styles.currentInfo__list_value}>
            {weather.main.pressure} мм ртутного столба
          </p>
        </li>
        <li className={styles.currentInfo__list_item}>
          <HomeSvgSelectors id="wind" />
          <p className={styles.currentInfo__list_title}>Ветер</p>
          <p className={styles.currentInfo__list_value}>
            {weather.wind.speed} м/с
          </p>
        </li>
      </ul>
      <img className={styles.currentInfo__image} src={cloud} alt="Cloud" />
    </div>
  );
}

export default CurrentInfo;
