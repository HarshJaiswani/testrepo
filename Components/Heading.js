import React from "react";
import Image from "next/image";
import styles from "../styles/Heading.module.css";

const Heading = (props) => {
  return (
    <>
      <h2 className={styles.heading}>
        <span className="headImg"><Image src={`/Assets/3d/${props.img}.png`} alt="" width={50} height={50} /></span>
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
