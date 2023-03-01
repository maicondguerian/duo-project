import React from "react";
import styles from "./leftSide.module.css";

function LeftSide() {
  return (
    <>
      <div className={styles.LeftSide}>
        <h1>your result</h1>
        <div className={styles.container}>
          <h2>76</h2>
          <p>of 100</p>
        </div>
        <h3>Great</h3>
        <p>
          You scored higher than 65% of the people who haven taken these test
        </p>
      </div>
    </>
  );
}

export default LeftSide;
