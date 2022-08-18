import React,{useState,useEffect} from "react";
import styles from "../styles/ArticleBlockTemplate.module.css";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const ArticleBlockTemplate = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    props.article.parts.forEach(element => {
      setCount(count + element.length);
    });
  }, [])
  
  return (
    <div className={styles.articleBlock} key={props.article.slug}>
      <div className={styles.articleDate}>
        {props.article.date} / {props.article.category}
      </div>
      <div className={styles.articleTitle}>{props.article.title}</div>
      <div className={styles.articleDescp}>{props.article.descp}...</div>
      <div className="text-gray-400 font-semibold text-sm tracking-wider">Minutes Read - <b className="mr-2 text-white">{(count/120).toFixed(2)}</b></div>
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
