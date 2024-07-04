import styles from "./page.module.css";
import ButtonComponent from "./components/ButtonComponent";
import ValueComponent from "./components/ValueComponent";
import AlertDialog from "./components/Dialog";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Unnecessary Counter App</h1>
      <ValueComponent />
      <div className={styles.buttonContainer}>
        <ButtonComponent label="Increment" />
        <ButtonComponent label="Decrement" />
      </div>
    </main>
  );
}
