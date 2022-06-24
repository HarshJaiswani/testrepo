import React from "react";
import styles from "../styles/ArticleBlockTemplate.module.css";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const ArticleBlockTemplate = (props) => {
  return (
    <div className={styles.articleBlock}>
      <div className={styles.articleDate}>
        {props.article.date} / {props.article.category}
      </div>
      <div className={styles.articleTitle}>{props.article.title}</div>
      <div className={styles.articleDescp}>{props.article.descp}</div>
      <Link href={props.article.link}>
        <a className={styles.link}>
          Read More{" "}
          <span>
            <BiChevronRight className={styles.arrow} />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default ArticleBlockTemplate;
