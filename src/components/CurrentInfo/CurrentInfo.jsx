import styles from "./currentInfo.module.scss";
import cloud from '../../assets/img/cloud.svg'
import CurrentInfoItem from "./CurrentInfoItem";
import { currentInfoValues } from "../../assets/data.js";

function CurrentInfo() {
  return (
    <div className={styles.currentInfo}>
      <ul className={styles.currentInfo__list}>
        {currentInfoValues.map((item, index) => (
          <CurrentInfoItem {...item} index={index} key={index} />
        ))}
      </ul>
      <img className={styles.currentInfo__image} src={cloud} alt="Cloud" />
    </div>
  );
}


export default CurrentInfo;
