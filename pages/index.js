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

export default function Home() {
  return (
    <>
    {/* <NavBar /> */}
    <Header />
    <MyWork />
    <Read />
    <WorkWeb />
    {/* <Recommendations /> */}
    <Ask />
    <div className='w-[100%] text-white text-center text-lg bg-[#050d22]'> <Link href="https://www.freepik.com/"><a >Illustration By FreePik</a></Link></div>
    <Footer />
    </>
  )
}