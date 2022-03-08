import React from "react";
import styles from "./hideCard.module.css";

const ExpandCard = ({ onHide }) => {
  return (
    <div className={styles.Container} onClick={onHide}>
      <div className={styles.Arrow} />
    </div>
  );
};

export default ExpandCard;
