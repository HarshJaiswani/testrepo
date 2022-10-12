/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import styles from "../styles/WorkWeb.module.css";
import Link from "next/link";
// import AOS from "aos";
// import "aos/dist/aos.css";

const WorkWeb = () => {
  // useEffect(() => {
  //   AOS.init();
  // });
  return (
    <div id={styles.workweb}>
      <div className={styles.workwebbox}>
        <div className={styles.workwebhead}>Work With Us</div>
        <div className={styles.workwebbody}>
          <img
            className={styles.workweblogo}
            src="/Assets/linkIcon.png"
            alt=""
          />{" "}
          <div>
            We work only on the purpose of providing value in the community ,
            alothough we cannot neglect money it is an important aspect but ,
            Yes! It is secondary and We encourage learning attitude of peoples.
            Even if you have very little knoweldege but wanting to learn and
            work with dedication and has a vision alingned to us , You are most
            Welcome , We can work together
          </div>
          <div>If you are intrested you can fill the form below!</div>
        </div>
        <Link href="https://forms.gle/cxo8s44xseoEDAFi6">
          <a
            className={styles.formlink}
            style={{
              color: "black",
              marginBottom: "10px",
            }}
          >
            Fill Form Here
          </a>
        </Link>
      </div>
      <div className={styles.workwebbox}>
        <div className={styles.workwebhead}>Get Your Website</div>
        <div className={styles.workwebbody}>
          <img
            className={styles.workweblogo}
            src="/Assets/webIcon.png"
            alt=""
          />
          <div>
            In Today&#39;s World , where everything is being carried out online.
            It has been a kinda mandatory for organisations to have their
            wesbites , altogether it also becomes important for a individual to
            have their presence online & To which having a personl portfolio is
            option worth considering.
          </div>
          <div>
            So what would be better than getting a website for yourself without
            having to invest efforts in actually making it!
          </div>
          <div>
            If you want your website ready to be used in place of your visiting
            cards you can get now!
          </div>
        </div>
        <Link href="https://forms.gle/cxo8s44xseoEDAFi6">
          <a
            className={styles.formlink}
            style={{
              color: "black",
              marginBottom: "10px",
            }}
          >
            Fill Form Here
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WorkWeb;
