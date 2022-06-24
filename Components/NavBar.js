/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <span className={`${styles.navIcons}`}>
              <img src="/Assets/3d/hash.png" alt="info" />
              <span>Home</span>
            </span>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <span className={styles.navIcons}>
              <img src="/Assets/3d/about.png" alt="about" />
              <span>About Us</span>
            </span>
          </a>
        </Link>
        <Link href="/articles">
          <a>
            <span className={`${styles.navIcons}`}>
              <img src="/Assets/3d/articles.png" alt="articles" />
              <span>Articles</span>
            </span>
          </a>
        </Link>
        <Link href="/utilities">
          <a>
            <span className={styles.navIcons}>
              <img src="/Assets/3d/utilities.png" alt="utilities" />
              <span>Utilities</span>
            </span>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <span className={styles.navIcons}>
              <img src="/Assets/3d/projects.png" alt="projects" />
              <span>Projects</span>
            </span>
          </a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
