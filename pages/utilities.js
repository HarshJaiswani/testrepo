import React, { useState, useEffect } from "react";
import Heading from "../Components/Heading";
import UtilityTemplate from "../Components/UtilityTemplate";
import styles from "../styles/Utilities.module.css";
import GameComp from "../Components/GameComp";
import useSWR from "swr";
import Footer from "../Components/Footer";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Utilities = () => {
  const { data, error } = useSWR("/api/getUtilities", fetcher);
  const [utilities, setUtilities] = useState([]);
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
      setUtilities(data.data);
    }
  }, [error, data]);
  return (
    <div className={styles.utilities}>
      <Heading
        img="utilities"
        name="Tools"
        tagLine="Some special utilities to help you a bit in your journey!"
        note="I will be delighted if I can make your journey a little smoother by providing little tools for a bigger deed. Hope you like them!"
      />
      <div className={styles.utilityWrapper}>
        <GameComp />
        {utilities.length == 0 ? (
          <div className="w-full text-center text-yellow-400 text-3xl">
            Tools are on the way!
          </div>
        ) : (
          ""
        )}
        {isOk == "true" &&
          utilities &&
          utilities.map((k,idx) => {
            return (
              <>
                <UtilityTemplate key={idx} getDetail={k} />
              </>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Utilities;
