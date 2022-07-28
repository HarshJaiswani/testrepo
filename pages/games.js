import React , { useState , useEffect } from "react";
import Heading from "../Components/Heading";
import styles from "../styles/Games.module.css";
import GameTemplate from "../Components/GameTemplate";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Games = () => {
  const { data, error } = useSWR("/api/getGames", fetcher);
  const [games, setGames] = useState([]);
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
      setGames(data.data);
    }
  }, [error, data]);
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
    </div>
  );
};

export default Games;
