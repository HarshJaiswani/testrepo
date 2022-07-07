/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/UtilityTemplate.module.css";
import Link from "next/link";

const UtilityTemplate = () => {
  return (
    <Link href="/">
      <a>
        <div className={styles.utilityBlock}>
          <div className={styles.head}>
            <img src="/Assets/3d/hash.png" alt="" />
          </div>
          <div className={styles.title}>Title 1 fro utility 1</div>
          <div className={styles.descp}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            accusantium possimus cumque molestias perspiciatis tenetur
            voluptatibus neque corporis quas dolores ullam fuga aliquid,
            asperiores atque?
          </div>
        </div>
      </a>
    </Link>
  );
};

export default UtilityTemplate;
