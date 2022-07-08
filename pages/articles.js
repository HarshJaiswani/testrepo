import React from 'react'
import ArticleBlockTemplate from '../Components/ArticleBlockTemplate'
import Heading from '../Components/Heading'
import styles from "../styles/Articles.module.css"

const Articles = () => {
  const arr = [
    {
      "sno":1,
      "title": "My First Tech Article main",
      "descp": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic repellendus, maxime, eius perspiciatis nisi ipsum ut nihil sit beatae cumque incidunt officia odio est?",
      "link": "/post/article",
      "date": "25th september 2022",
      "category": "Technology",
      "slug":"article",
      "parts":["lor","mor","sor"],
      "quote":"lorem ipsum",
      "quoteAuthor":"me",
      "author":"mwww"
  },
  {
    "sno":1,
    "title": "My First Tech Article main",
    "descp": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic repellendus, maxime, eius perspiciatis nisi ipsum ut nihil sit beatae cumque incidunt officia odio est?",
    "link": "/post/article",
    "date": "25th september 2022",
    "category": "Technology",
    "slug":"article",
    "parts":["lor","mor","sor"],
    "quote":"lorem ipsum",
    "quoteAuthor":"me",
    "author":"mwww"
  },
  {
    "sno":1,
    "title": "My First Tech Article main",
    "descp": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic repellendus, maxime, eius perspiciatis nisi ipsum ut nihil sit beatae cumque incidunt officia odio est?",
    "link": "/post/article",
    "date": "25th september 2022",
    "category": "Technology",
    "slug":"article",
    "parts":["lor","mor","sor"],
    "quote":"lorem ipsum",
    "quoteAuthor":"me",
    "author":"mwww"
  }
  ]
  return (
    <div className={styles.articles}>
      <Heading name="The Essence of Learning" tagLine="The best way to experience other's life , Is to READ them" img="articles" note="I am a 18 years old boy, I am not someone the age of say 40+ or something so that , I could be able to share my experince but the day we are born we start experincing and learning things. These artiles will act as a medium for me to share my journey , learning and specially my mistakes to try and help you perform a bit better in you life. Hope you will enjoy !" />
      <div className={styles.articleWrapper}>
        {arr.map((e)=>{
          return <>
            <ArticleBlockTemplate article={e} />
          </>
        })}
      </div>
    </div>
  )
}

export default Articles
