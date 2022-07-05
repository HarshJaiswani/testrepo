import React from "react";
import styles from "../styles/Read.module.css";
import ArticleBlockTemplate from "../Components/ArticleBlockTemplate";

const Read = (props) => {
  return (
    <div className={styles.read}>
      <div className={styles.head}>
        <h1>Application of Knowledge is Power</h1>
        <p>
          You can learn anytime anywhere on your fingertips by reading the
          powerful essence of my journey till now.
        </p>
      </div>
      <div className={styles.articleCarousal}>
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
      </div>
    </div>
  );
};

export default Read;
