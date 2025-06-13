import React from "react";
import styles from "./Card.module.css";

export default function Card({ title, subtitle, items = [] }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
