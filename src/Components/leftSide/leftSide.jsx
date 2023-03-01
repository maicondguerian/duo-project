import React from "react";
import styles from "./leftSide.module.css";

function LeftSide() {
  return (
    <>
      <div className={styles.LeftSide}>
        <h1>Your Result</h1>
        <div className={styles.container}>
          <h2>76</h2>
          <p>of 100</p>
        </div>
        <h3>Great</h3>
        <div className={styles.containerP}>
          <p>
            You scored higher than 65% of the people who haven taken these
            tests.
          </p>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
