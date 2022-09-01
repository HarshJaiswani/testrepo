import React, { useEffect, useState } from "react";
import styles from "../styles/Read.module.css";
import ArticleBlockTemplate from "../Components/ArticleBlockTemplate";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Read = () => {
  const { data, error } = useSWR("/api/getBlogs", fetcher);
  const [articles, setArticles] = useState([]);
  const [isOk, setIsOk] = useState("true");
  useEffect(() => {
    if (error) {
      setIsOk("false");
    }
    if (!data) {
      setIsOk("true");
    }
    if (data) {
      setArticles(data.data.sort((a, b) => a.sno - b.sno).slice(0, 6));
    }
    AOS.init();
  }, [error, data]);
  return (
    <div className={styles.read}>
      <div className={styles.head} data-aos="fade-down">
        <h1>Application of Knowledge is Power</h1>
        <p>
          You can learn anytime anywhere on your fingertips by reading the
          powerful essence of my journey till now.
        </p>
      </div>
      <div className={styles.articleCarousal}>
        {isOk == "false" ? (
          <div className="w-full text-2xl text-yellow-500">
            Some Issue Occured!
          </div>
        ) : (
          <>
            {articles.map((k, idx) => {
              return !k.category.includes("Book") ? (
                <ArticleBlockTemplate key={idx} article={k} />
              ) : (
                ""
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Read;
