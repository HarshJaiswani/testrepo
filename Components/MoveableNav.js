/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "../styles/MoveableNav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const MoveableNav = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  let path = router.pathname;
  if (path == "/") path = "hash";
  const navs = [
    {
      name: "Projects",
      href: "/projects",
      img: "/Assets/3d/projects.png",
    },
    {
      name: "Utilities",
      href: "/utilities",
      img: "/Assets/3d/utilities.png",
    },
    {
      name: "Articles",
      href: "/articles",
      img: "/Assets/3d/articles.png",
    },
    {
      name: "About Us",
      href: "/about",
      img: "/Assets/3d/about.png",
    },
    {
      name: "Home",
      href: "/",
      img: "/Assets/logo.png",
    },
  ];
  return (
    <>
      <button
        className={styles.navClick}
        onClick={() => {
          setShow(!show);
        }}
      >
        <Image
          src={`/Assets/3d/nav.png`}
          alt=""
          priority="true"
          width={40}
          height={40}
        />
      </button>
      <div className={styles.moveableNav}>
        {navs.map((_nav, index) => (
          <div
            key={index}
            style={
              !show
                ? {
                    transform: `translateY(${(index + 1) * 70}px)`,
                    boxShadow: "none",
                    width: "50px",
                    borderRadius: "50%",
                  }
                : {
                    transform: "translateY(0px)",
                    width: "150px",
                    borderRadius: "50px",
                  }
            }
          >
            <Link href={_nav.href}>
              <a onClick={() => setShow(false)}>
                <Image
                  src={_nav.img}
                  alt=""
                  priority="true"
                  width={40}
                  height={40}
                />
                <span
                  style={
                    show
                      ? {
                          display: "inline-block",
                        }
                      : {
                          display: "none",
                        }
                  }
                >
                  {_nav.name}
                </span>
              </a>
            </Link>
          </div>
        ))}
        {/* <div
          style={
            !show
              ? {
                  transform: "translateY(70px)",
                  boxShadow: "none",
                  width: "50px",
                  borderRadius: "50%",
                }
              : {
                  transform: "translateY(0px)",
                  width: "fit-content",
                  borderRadius: "10px",
                }
          }
        >
          <Link href="/utilities">
            <a onClick={() => setShow(false)}>
              <Image
                src="/Assets/3d/utilities.png"
                alt=""
                priority="true"
                width={40}
                height={40}
              />
            </a>
          </Link>
        </div>
        <div
          style={
            !show
              ? {
                  transform: "translateY(70px)",
                  boxShadow: "none",
                  width: "50px",
                  borderRadius: "50%",
                }
              : {
                  transform: "translateY(0px)",
                  width: "fit-content",
                  borderRadius: "10px",
                }
          }
        >
          <Link href="/articles">
            <a onClick={() => setShow(false)}>
              <Image
                src="/Assets/3d/articles.png"
                alt=""
                priority="true"
                width={40}
                height={40}
              />
            </a>
          </Link>
        </div>
        <div
          style={
            !show
              ? {
                  transform: "translateY(70px)",
                  boxShadow: "none",
                  width: "50px",
                  borderRadius: "50%",
                }
              : {
                  transform: "translateY(0px)",
                  width: "fit-content",
                  borderRadius: "10px",
                }
          }
        >
          <Link href="/about">
            <a onClick={() => setShow(false)}>
              <Image
                src="/Assets/3d/about.png"
                alt=""
                priority="true"
                width={40}
                height={40}
              />
            </a>
          </Link>
        </div>
        <div
          style={
            !show
              ? {
                  transform: "translateY(70px)",
                  boxShadow: "none",
                  width: "50px",
                  borderRadius: "50%",
                }
              : {
                  transform: "translateY(0px)",
                  width: "fit-content",
                  borderRadius: "10px",
                }
          }
        >
          <Link href="/">
            <a onClick={() => setShow(false)}>
              <Image
                src="/Assets/logo.png"
                alt=""
                priority="true"
                width={42}
                height={41}
              />
            </a>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default MoveableNav;
