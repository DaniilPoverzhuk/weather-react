import { useEffect, useState } from "react";
import logo from '../../assets/img/logo.svg';
import themeSvg from "../../assets/img/theme.svg";
import s from './header.module.scss'

import {THEMES} from "../../assets/constants.js";
import storage from "../../Storage/storage";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../Store/thunks/fetchCurrentWeather";

function Header() {
  const [theme, setTheme] = useState(storage.getItem("theme") || THEMES.LIGHT);
  const [value, setValue] = useState('');

  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(state => state.currentWeatherSliceReducer);

  console.log(weather);

  useEffect(() => {
    dispatch(fetchCurrentWeather('paris'))
  }, [])

  const changeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  useEffect(() => {
    storage.setItem("theme", theme);
    const root = document.querySelector(":root");

    const components = [
      "--body-background-",
      "--valueInfo-",
      "--backgroundBlock-",
      "--backgroundTab-",
      "--colorTab-",
      "--colorCurrentDay-",
      "--colorButton-",
      "--backgroundOption-",
      "--colorSearch-"
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `${component}default`,
        `var(${component}${theme})`
      );
    });
  }, [theme]);

  return (
    <div className={s.header}>
      <div className="content header">
        <a href="/" className={s.header__logo}>
          <img src={logo} alt="logo" />
          <span>react weather</span>
        </a>
        <div className={s.header__choose}>
          <div className={s.header__theme} onClick={changeTheme}>
            <img src={themeSvg} alt="theme" />
          </div>
          <form className={`${s.header__form} active`}>
            <input value={value} onChange={(event) => setValue(event.target.value)} className={s.header__input} placeholder="Enter city..."/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
