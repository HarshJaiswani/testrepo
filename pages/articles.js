import React, { useState, useEffect } from "react";
import ArticleBlockTemplate from "../Components/ArticleBlockTemplate";
import Heading from "../Components/Heading";
import Footer from "../Components/Footer";
import styles from "../styles/Articles.module.css";
import client from "../hooks/sanityClient";

const Articles = (props) => {
  const { articles } = props;
  const [isOk, setIsOk] = useState("true");
  useEffect(() => {
    if (!articles) {
      setIsOk("Loading...");
    }
    if (articles) {
      setIsOk("true");
    }
  }, [articles]);
  return (
    <div className={styles.articles}>
      <Heading
        name="The Essence of Learning"
        tagLine="The best way to experience other's life , Is to READ them"
        img="articles"
        note="I am a 18 years old boy, I am not someone the age of say 40+ or something so that , I could be able to share my experience but the day we are born we start experiencing and learning things. These artiles will act as a medium for me to share my journey , learning and specially my mistakes to try and help you perform a bit better in you life. Hope you will enjoy !"
      />
      <div className={styles.articleWrapper}>
        {isOk == "false" ? (
          <div className="w-full text-2xl text-center my-5 text-yellow-500">
            Some Issue Occured!
          </div>
        ) : (
          <>
            {isOk == "Loading..." ? (
              <div className="w-full text-2xl text-center my-5 text-yellow-500">
                Loading...
              </div>
            ) : (
              ""
            )}
            {articles &&
              articles.map((k, index) => {
                return !k.category.includes("Book") ? (
                  <ArticleBlockTemplate article={k} key={index} />
                ) : (
                  ""
                );
              })}
          </>
        )}
        <div className={styles.bookTitle}>Book Summaries</div>
        {isOk == "true" &&
          articles &&
          articles.map((k, index) => {
            return k.category.includes("Book") ? (
              <ArticleBlockTemplate article={k} key={index} />
            ) : (
              ""
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Articles;

// export async function getServerSideProps(context) {
//   let data = await fetch(`https://legrosh.vercel.app/api/getBlogs`);
//   let articles = await data.json();
//   return {
//     props: { articles }, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps(context) {
  const query = `*[_type == "articles"]`;
  const articles = await client.fetch(query);
  const getTime = (date) => {
    let time = new Date(date).getTime();
    return time;
  };
  const finalArticles = articles.sort(
    (a, b) => getTime(a._createdAt) - getTime(b._createdAt)
  );
  return {
    props: {
      articles: finalArticles,
    },
  };
}
