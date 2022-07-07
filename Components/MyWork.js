import Image from "next/image";
import React from "react";
import styles from "../styles/MyWork.module.css";
import Link from "next/link";

const MyWork = () => {
  return (
    <section className={styles.NavSec}>
      <div>
        <div className={styles.design}></div>
      </div>
      <div className={styles.abt}>
        <Image
          src="public/Assets/illustration.jpg"
          width={230}
          height={225}
          alt="illustration"
        ></Image>
        <div>
          <p>
            Peers on one side create pressure , but also motivates and brings a
            sense of healthy competition into you , if their and your goals are
            aligned
          </p>
          <p>
            {" "}
            I am a College Student inclined towards technlogy and eager to learn
            it , if you also want to do the same , I will be posting my day to
            day achievements , in learning a skill . You can also follow along
            and do the same on social media of your choice with the tag{" "}
            <span style={{ color: "green" }}>#legrosh</span>
          </p>
          <Link href="https://www.linkedin.com/in/harsh-jaiswani-26108823b/">Today&#39;s Work</Link>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
