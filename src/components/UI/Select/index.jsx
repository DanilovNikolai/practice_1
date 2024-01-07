import React from "react";
import styles from "./Select.module.scss";

export default function Select({ options, defaultValue, value, onChange }) {
  return (
    <select
      className={styles.mySelect}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
