// /components/ResponseDisplay.js

import React from "react";
import styles from "./ResponseDisplay.module.css";

const ResponseDisplay = ({ data, error, loading }) => {
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (data) {
    return (
      <div className={styles.responseContainer}>
        <div className={styles.responseDisplay}>
          <div className={styles.nameContainer}>
            <p><strong>Name:</strong> {data.result.vegetableInformation}</p>
          </div>
          <div className={styles.descriptionContainer}>
            <p><strong>Description:</strong> {data.result.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return null; // Return null if there's no data, error, or loading
};

export default ResponseDisplay;
