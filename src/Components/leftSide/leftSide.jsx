import React, { useEffect, useState } from "react";
import styles from "./leftSide.module.css";

function LeftSide() {
  const [showAfterClass, setShowAfterClass] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAfterClass(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
       <div className={`${styles.LeftSide} ${showAfterClass ? styles.LeftSideAfter : ''}`}>
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
