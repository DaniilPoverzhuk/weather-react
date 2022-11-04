import styles from "./currentInfo.module.scss";

function CurrentInfoItem({ title }) {
  return (
    <li className={styles.currentInfo__list_item}>
      <p className={styles.currentInfo__list_title}>{title}</p>
      <p className={styles.currentInfo__list_value}>20 - ощущается как 17</p>
    </li>
  );
}

export default CurrentInfoItem;
