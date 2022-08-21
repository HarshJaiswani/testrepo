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
                {props.getDetail.toShow === "svg" && <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height={props.getDetail.height}
                  width={props.getDetail.width}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill={props.getDetail.fill}
                    d={props.getDetail.imgUrl}
                  ></path>
                </svg>}
                {props.getDetail.toShow === "img" && <img style={{width:props.getDetail.width,height:props.getDetail.height}} src={props.getDetail.imgUrl} alt="" />}
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
