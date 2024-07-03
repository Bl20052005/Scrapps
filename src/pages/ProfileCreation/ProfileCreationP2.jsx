import styles from "./ProfileCreationP2.module.css";
function ProfileCreationP2() {
  return (
    <div className={styles.first}>
      <p>Select the adjectives that describe you!</p>

      <ul className={styles.buttons}>
        <li>
          <button className={styles.button}>Cool</button>
        </li>
        <li>
          <button className={styles.button}>Awesome</button>
        </li>
        <li>
          <button className={styles.button}>Pog</button>
        </li>
        <li>
          <button className={styles.button}>Cringe</button>
        </li>
        <li>
          <button className={styles.button}>Gamer</button>
        </li>
      </ul>

      <button className={styles.nextButton}>Next</button>
    </div>
  );
}

export default ProfileCreationP2;
