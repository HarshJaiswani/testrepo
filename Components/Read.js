import React from "react";
import styles from "../styles/Read.module.css";
import ArticleBlockTemplate from "../Components/ArticleBlockTemplate";

const Read = () => {
  const article = {
    title: "My First Tech Article",
    descp:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic repellendus, maxime, eius perspiciatis nisi ipsum ut nihil sit beatae cumque incidunt officia odio est?",
    link: "/",
    date: "25th september 2022",
    category: "Technology",
  };
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
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
      </div>
    </div>
  );
};

export default Read;
