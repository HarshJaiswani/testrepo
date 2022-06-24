import React from "react";
import styles from "../styles/Testimonial.module.css";
import { HiStar } from "react-icons/hi";

const Testimonials = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.head}>
        <div className={styles.name}>Abcd is my name</div>
        <div className={styles.position}>master in css</div>
        <div className={styles.img}></div>
      </div>
      <div className={styles.abtUs}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        rerum sunt obcaecati minus quas earum eos distinctio voluptatem nostrum
        voluptatum, temporibus error ad sequi maxime!
      </div>
      <div className={styles.stars}>
        <HiStar className="text-yellow-400 inline-block mx-1" />
        <HiStar className="text-yellow-400 inline-block mx-1" />
        <HiStar className="text-yellow-400 inline-block mx-1" />
        <HiStar className="text-gray-300 inline-block mx-1" />
        <HiStar className="text-gray-300 inline-block mx-1" />
      </div>
    </div>
  );
};

export default Testimonials;
