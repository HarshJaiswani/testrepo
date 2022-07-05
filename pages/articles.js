import React from 'react'
import ArticleBlockTemplate from '../Components/ArticleBlockTemplate'
import Heading from '../Components/Heading'
import styles from "../styles/Articles.module.css"

const Articles = (props) => {
  return (
    <div className={styles.articles}>
      <Heading name="The Essence of Learning" tagLine="The best way to experience other's life , Is to READ them" img="articles" note="I am a 18 years old boy, I am not someone the age of say 40+ or something so that , I could be able to share my experince but the day we are born we start experincing and learning things. These artiles will act as a medium for me to share my journey , learning and specially my mistakes to try and help you perform a bit better in you life. Hope you will enjoy !" />
      <div className={styles.articleWrapper}>
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
        <ArticleBlockTemplate article={props.blog} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const data = await fetch(`http://localhost:3000/api/getBlog?slug=article`);
  const blog = await data.json();
  return{
    props : {blog}
  }
}

export default Articles
