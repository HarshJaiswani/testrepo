import React,{useEffect} from "react";
import styles from "../styles/Ask.module.css";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ask = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section id={styles.ask}>
      <h1>Sharing the Learning</h1>
      <div className={styles.askConatiner}>
        <div className={styles.askText}>
          <p style={{ color: "wheat" }}>
            Being a self learner myself I have realised that although learning
            by yourself without a mentor/guide is great fun as well as an
            immense learning , but it also frustartes you and sometimes (almost
            everytime) it costs you a alot of time to be devoted for a small
            problem. Lack of guidence and help sometimes escapes a opportunity
            for you
          </p>
          <p style={{ color: "#8193b2" }}>
            {" "}
            In the era of internet where there is no dearth of knowledge its
            extremely necessary to understand from where and what to learn , so
            i will be delighted to help you along your journey as much as i
            could you can fill the form with the correct crdentials and I will
            get back to you within 48 to 72 hours
          </p>
        </div>
        <Link href="https://forms.gle/cxo8s44xseoEDAFi6">
          <a className={styles.formlink}>Fill Form Here</a>
        </Link>
      </div>
    </section>
  );
};

export default Ask;
