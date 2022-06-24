import React from 'react'
import ArticleBlockTemplate from '../Components/ArticleBlockTemplate'
import Heading from '../Components/Heading'
import styles from "../styles/Articles.module.css"

const Articles = () => {
  const article = {
    title: 'My First Tech Article',
    descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic repellendus, maxime, eius perspiciatis nisi ipsum ut nihil sit beatae cumque incidunt officia odio est?",
    link: "/",
    date: '25th september 2022',
    category: "Technology"
  }
  return (
    <div className={styles.articles}>
      <Heading name="The Essence of Learning" tagLine="The best way to experience other's life , Is to READ them" img="articles" note="I am a 18 years old boy, I am not someone the age of say 40+ or something so that , I could be able to share my experince but the day we are born we start experincing and learning things. These artiles will act as a medium for me to share my journey , learning and specially my mistakes to try and help you perform a bit better in you life. Hope you will enjoy !" />
      <div className={styles.articleWrapper}>
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
        <ArticleBlockTemplate article={article} />
      </div>
    </div>
  )
}

export default Articles
