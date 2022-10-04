import React, { useState, useEffect } from "react";
import styles from "../styles/ArticleBlockTemplate.module.css";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import getFullDate from "../hooks/getDate";

const ArticleBlockTemplate = (props) => {
  const { article } = props;
  let totalLength = 0;
  article.content.forEach((e) => {
    totalLength += e.children[0].text.length;
  });
  return (
    <div className={styles.articleBlock} key={article.slug}>
      <div className={styles.articleDate}>
        {getFullDate(article.date)} / {article.category}
      </div>
      <div className={styles.articleTitle}>{article.title}</div>
      <div className={styles.articleDescp}>{article.description}...</div>
      <div className="text-gray-400 my-2 font-semibold text-sm tracking-wider">
        Minutes Read -{" "}
        <b className="mr-2 text-white">{(totalLength / 300).toFixed(2)}</b>
      </div>
      <Link href={article.link}>
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
