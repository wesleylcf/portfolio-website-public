import React from "react";
import styles from "./expandCard.module.css";

const ExpandCard = ({ onExpand }) => {
  return (
    <div className={styles.Container} onClick={onExpand}>
      <div className={styles.Arrow} />
    </div>
  );
};

export default ExpandCard;
