import Header from "../Components/Header";
import styles from "../styles/Home.module.css";
import NavBar from "../Components/NavBar";
import WorkWeb from "../Components/WorkWeb";
import Ask from "../Components/Ask";
import MyWork from "../Components/MyWork";
import Read from "../Components/Read";
import Footer from "../Components/Footer";
import Link from "next/link";
import Recommendations from "../Components/Recommendations";
import QR from "../Components/QR";
import LGSGames from "../Components/LGSGames";
import client from "../hooks/sanityClient";

export default function Home(props) {
  return (
    <>
      {/* <NavBar /> */}
      <Header />
      <MyWork />
      <LGSGames />
      <Read articles={props.articles} />
      <WorkWeb />
      <Ask />
      {/* <Recommendations /> */}
      <QR />
      <div className="backdrop-blur-sm w-[100%] text-white text-center text-sm bg-[#050d22]">
        {" "}
        <Link href="https://www.freepik.com/">
          <a>Illustration By FreePik</a>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const query = `*[_type == "articles"][0...13]`;
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
