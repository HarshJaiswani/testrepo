/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/UtilityTemplate.module.css";
import Link from "next/link";

const UtilityTemplate = (props) => {
  return (
    <Link href={props.getDetail.utilLink} key={props.getDetail.utilLink}>
      <a>
        <div className={styles.utilityBlock}>
          <div className={styles.head}>
            <img src={props.getDetail.imgUrl} alt="" />
          </div>
          <div className={styles.title}>{props.getDetail.title}</div>
          <div className={styles.descp}>{props.getDetail.descp}</div>
        </div>
      </a>
    </Link>
  );
};

export default UtilityTemplate;
