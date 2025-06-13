import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Ramyasri Muthineni</h1>
      <p>
        <a href="mailto:ramya.muthinenii@gmail.com">ramya.muthinenii@gmail.com</a> | +1-656-214-3334
      </p>
      <p>
        <a href="https://www.linkedin.com/in/ramya-muthineni/" target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </a>
      </p>
    </header>
  );
}
