/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Heading.module.css";

const Heading = (props) => {
  return (
    <>
      <h2 className={styles.heading}>
        <img src={`public/Assets/3d/${props.img}.png`} alt="" />
        <span>{props.name}</span>
      </h2>
      <div className={styles.tagLine}>{props.tagLine}</div>
      <div className={styles.note}>
        <div className={styles.author}>Harsh is Saying ... </div>
        <em>{props.note}</em>
      </div>
    </>
  );
};

export default Heading;
