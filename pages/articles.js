import React,{useState , useEffect} from 'react'
import ArticleBlockTemplate from '../Components/ArticleBlockTemplate'
import Heading from '../Components/Heading'
import styles from "../styles/Articles.module.css"
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Articles = () => {
  const { data, error } = useSWR("/api/getBlogs", fetcher);
  const [articles, setArticles] = useState([]);
  const [isOk, setIsOk] = useState("true");
  useEffect(() => {
    if (error) {
      setIsOk("false");
    }
    if (!data) {
      setIsOk("Loading...");
    }
    if (data) {
      setIsOk("true");
      setArticles(data.data);
    }
  }, [error, data]);
  return (
    <div className={styles.articles}>
      <Heading name="The Essence of Learning" tagLine="The best way to experience other's life , Is to READ them" img="articles" note="I am a 18 years old boy, I am not someone the age of say 40+ or something so that , I could be able to share my experince but the day we are born we start experincing and learning things. These artiles will act as a medium for me to share my journey , learning and specially my mistakes to try and help you perform a bit better in you life. Hope you will enjoy !" />
      <div className={styles.articleWrapper}>
      {isOk == "false" ? (
          <div className="w-full text-2xl text-center my-5 text-yellow-500">
            Some Issue Occured!
          </div>
        ) : (
          <>
          {isOk == 'Loading...' ? <div className="w-full text-2xl text-center my-5 text-yellow-500">
            Loading...
          </div> : ""}
          {
          articles.map((k) => {
            return <><ArticleBlockTemplate article={k} /></>
          })}
        </>)}
      </div>
    </div>
  )
}

export default Articles
