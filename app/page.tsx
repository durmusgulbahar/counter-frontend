"use client";
import styles from "./page.module.css";

import ButtonComponent from "./components/ButtonComponent";
import ValueComponent from "./components/ValueComponent";
import { useStore } from "./middleware/useStore";

export default function Home() {
  const {increment, decrement} = useStore();

  return (
    <main className={styles.main}>
      <h1>Unnecessary Counter App</h1>
      <ValueComponent />
      <div className={styles.buttonContainer}>
        <ButtonComponent label="Increment" func={increment} />
        <ButtonComponent label="Decrement" func={decrement} />
      </div>
      <a href="/logs">GO TO LOGS</a>
    </main>
  );
}
