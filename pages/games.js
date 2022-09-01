import React , { useState , useEffect } from "react";
import Heading from "../Components/Heading";
import styles from "../styles/Games.module.css";
import GameTemplate from "../Components/GameTemplate";
import Footer from "../Components/Footer";

const Games = (props) => {
  const [games, setGames] = useState(props.games.data);
  const [isOk, setIsOk] = useState("true");
  useEffect(() => {
    if (!games) {
      setIsOk("Loading...");
    }
    if (games) {
      setIsOk("true");
      setGames(games);
    }
  }, [games]);
  return (
    <div className={styles.games}>
      <Heading
        img="games"
        name="LGS Games"
        tagLine="Relaxing make the journey lively"
        note="Games are the best combo of the 'Learning' and 'Entertainment' as you learn alot of things while you make game or even when you play some"
      />
      <div className={styles.wrapper}>
        {isOk == "true" &&
          games &&
          games.map((k, idx) => <GameTemplate key={idx} details={k} idx={idx} />)}
      </div>
      <Footer />
    </div>
  );
};

export default Games;

export async function getServerSideProps(context) {
  let data = await fetch(`https://legrosh.vercel.app/api/getGames`);
  let games = await data.json();
  return {
    props: {games}, // will be passed to the page component as props
  }
}