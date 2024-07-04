"use client";
import styles from "./page.module.css";

import ButtonComponent from "./components/ButtonComponent";
import ValueComponent from "./components/ValueComponent";
import { useCountStore } from "./middleware/useStore";

export default function Home() {
  const value = useCountStore((state) => state.value);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  return (
    <main className={styles.main}>
      <h1>Unnecessary Counter App</h1>
      <ValueComponent value={value} />
      <div className={styles.buttonContainer}>
        <ButtonComponent label="Increment" func={increment} />
        <ButtonComponent label="Decrement" func={decrement} />
      </div>
    </main>
  );
}
