import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import NavBar from "../Components/NavBar"
import WorkWeb from '../Components/WorkWeb'
import Ask from '../Components/Ask'
import MyWork from '../Components/MyWork'
import Read from '../Components/Read'
import Footer from "../Components/Footer"
import Link from "next/link"
import Recommendations from '../Components/Recommendations'

export default function Home(props) {
  const blog = {
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
  return (
    <>
    {/* <NavBar /> */}
    <Header />
    <MyWork />
    <Read blog={blog} />
    <WorkWeb />
    {/* <Recommendations /> */}
    <Ask />
    <div className='w-[100%] text-white text-center text-lg bg-[#050d22]'> <Link href="https://www.freepik.com/"><a >Illustration By FreePik</a></Link></div>
    <Footer />
    </>
  )
}