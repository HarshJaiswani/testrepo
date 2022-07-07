/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Header.module.css";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <div className={styles.mainHead}>
      <NavBar />
      <div className={styles.head}>
        <div className={styles.headSide1}>
          <span>
            <span className="text-yellow-500">Le</span>
            <span className="text-gray-500">arn</span>
          </span>
          <span>
            <span className="text-yellow-500">Gro</span>
            <span className="text-gray-500">w</span>
          </span>
          <span>
            <span className="text-yellow-500">Sh</span>
            <span className="text-gray-500">are</span>
          </span>
        </div>
        <div className={styles.headSide2}>
          <div className={styles.quotes}>
            <span className={styles.quoteLeft}>
              <FaQuoteLeft className="inline-block text-lg mx-2 " />
            </span>
            {props.quote.text}
            <span className={styles.quoteRight}>
              <FaQuoteRight className="inline-block text-lg mx-2 " />
            </span>
          </div>
          <div className={styles.quoteAuthor}>{props.quote.author}</div>
        </div>
      </div>
    </div>
  );
};


export default Header;
