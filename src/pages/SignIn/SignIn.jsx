import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <main className={styles["sign-in-page"]}>
      <section className={styles["sign-in-popup"]}>
        <div>
          <div>
            <label></label>
            <input />
          </div>
          <div>
            <label></label>
            <input />
          </div>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
