/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/GameTemplate.module.css";
import Link from "next/link";

const GameTemplate = ({ details , idx }) => {
  return (
    <Link href={details.liveLink} key={idx}>
      <a>
        <div className={styles.block}>
          {/* <img src={details.img} className="w-[400px] rounded-md" alt="" /> */}
          <img src="/Assets/games/tic-tac-toe.png" className="w-[400px] rounded-md" alt="" />
          <span className="bg-white inline-block w-full py-1 text-center font-semibold text-[#050d22]">
            {details.title}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default GameTemplate;
