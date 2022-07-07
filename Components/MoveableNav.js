/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "../styles/MoveableNav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MoveableNav = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  let path = router.pathname;
  if (path == "/") path = "hash";
  return (
    <>
      <div
        className={styles.navClick}
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      >
        <img src={`public/Assets/3d/nav.png`} alt="" />
      </div>
      <div className={styles.moveableNav}>
        <div
          style={
            !show
              ? { transform: "translateY(70px)", boxShadow: "none" }
              : {
                  transform: "translateY(0px)",
                }
          }
        >
          <Link href="/projects">
            <a onClick={() => setShow(false)}>
              <img src="public/Assets/3d/projects.png" alt="" />
            </a>
          </Link>
        </div>
        <div
          style={
            !show
              ? { transform: "translateY(140px)", boxShadow: "none" }
              : {
                  transform: "translateY(0px)",
                }
          }
        >
          <Link href="/utilities">
            <a onClick={() => setShow(false)}>
              <img src="public/Assets/3d/utilities.png" alt="" />
            </a>
          </Link>
        </div>
        <div
          style={
            !show
              ? { transform: "translateY(210px)", boxShadow: "none" }
              : { transform: "translateY(0px)" }
          }
        >
          <Link href="/articles">
            <a onClick={() => setShow(false)}>
              <img src="public/Assets/3d/articles.png" alt="" />
            </a>
          </Link>
        </div>
        <div
          style={
            !show
              ? { transform: "translateY(280px)", boxShadow: "none" }
              : {
                  transform: "translateY(0px)",
                }
          }
        >
          <Link href="/about">
            <a onClick={() => setShow(false)}>
              <img src="public/Assets/3d/about.png" alt="" />
            </a>
          </Link>
        </div>
        <div
          style={
            !show
              ? { transform: "translateY(350px)", boxShadow: "none" }
              : {
                  transform: "translateY(0px)",
                }
          }
        >
          <Link href="/">
            <a onClick={() => setShow(false)}>
              <img src="public/Assets/3d/hash.png" alt="" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MoveableNav;
