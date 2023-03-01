import React from "react";
import styles from "./righrSide.module.css";
function RightSide() {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
                <h2> Sumary</h2> 
        </div>
   
        <div className={`${styles.first} ${styles.style}`}></div>
        <div className={`${styles.second} ${styles.style}`}></div>
        <div className={`${styles.thirty} ${styles.style}`}></div>
        <div className={`${styles.fourty} ${styles.style}`}></div>
        <button className={`${styles.btn} ${styles.style}`}> Continue</button>
      </div>
    </>
  );
}

export default RightSide;
