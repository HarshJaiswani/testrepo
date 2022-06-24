import React from "react";
import styles from "../styles/Recommendations.module.css";
import Testimonial from "./Testimonial";

const Recommendations = () => {
  return (
    <div className={styles.recommend}>
      <h1>Recommendations</h1>
      <div className={styles.container}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Recommendations;
