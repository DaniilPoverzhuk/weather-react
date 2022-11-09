import WeatherTabNavItem from "./WeatherTabNavItem";
import styles from "./weatherTabs.module.scss";
import WeatherTabItem from "./WeatherTabItem";
import { weatherTabsNavValues } from "../../assets/data.js";

const arr = [1, 2, 3, 4, 5, 6, 7];

export const WeatherTabs: React.FC = () => {
  return (
    <div className={styles.weather_tabs}>
      <div className={styles.weather_tabs__top}>
        <nav className={styles.weather_tabs__nav}>
          <ul>
            {weatherTabsNavValues.map((item) => (
              <WeatherTabNavItem value={item} key={item} />
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.weather_tabs__list}>
        {arr.map((item) => (
          <WeatherTabItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default WeatherTabs;
