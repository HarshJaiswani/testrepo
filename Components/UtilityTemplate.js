/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/UtilityTemplate.module.css";
import Link from "next/link";

const UtilityTemplate = (props) => {
  return (
    <Link href={props.getDetail.utilLink} key={props.getDetail.utilLink}>
      <a>
        <div className={styles.utilityBlock}>
          {props.getDetail.imgUrl != "" ? (
            <div className={styles.head}>
              <span className="bg-red-200/10">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill={props.getDetail.fill}
                    d={props.getDetail.imgUrl}
                  ></path>
                </svg>
              </span>
            </div>
          ) : (
            ""
          )}
          <div className={styles.title}>{props.getDetail.title}</div>
          <div className={styles.descp}>{props.getDetail.descp}</div>
        </div>
      </a>
    </Link>
  );
};

export default UtilityTemplate;
