import React, { useState, useEffect } from "react";
import Heading from "../Components/Heading";
import UtilityTemplate from "../Components/UtilityTemplate";
import styles from "../styles/Utilities.module.css";
import GameComp from "../Components/GameComp";
import Footer from "../Components/Footer";

const Utilities = (props) => {
  const [utilities, setUtilities] = useState(props.utilities.data);
  const [isOk, setIsOk] = useState("true");
  useEffect(() => {
    if (!utilities) {
      setIsOk("Loading...");
    }
    if (utilities) {
      setIsOk("true");
      setUtilities(utilities);
    }
  }, [utilities]);
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

export async function getServerSideProps(context) {
  let data = await fetch(`https://legrosh.vercel.app/api/getUtilities`);
  let utilities = await data.json();
  return {
    props: {utilities}, // will be passed to the page component as props
  }
}