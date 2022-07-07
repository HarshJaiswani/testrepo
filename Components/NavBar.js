import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <span className={`${styles.navIcons}`}>
              <Image
                src="/Assets/3d/hash.png"
                alt="info"
                priority="true"
                width={30}
                height={30}
              />
              <span>Home</span>
            </span>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <span className={styles.navIcons}>
              <Image
                src="/Assets/3d/about.png"
                alt="about"
                priority="true"
                width={30}
                height={30}
              />
              <span>About Us</span>
            </span>
          </a>
        </Link>
        <Link href="/articles">
          <a>
            <span className={`${styles.navIcons}`}>
              <Image
                src="/Assets/3d/articles.png"
                alt="articles"
                priority="true"
                width={30}
                height={30}
              />
              <span>Articles</span>
            </span>
          </a>
        </Link>
        <Link href="/utilities">
          <a>
            <span className={styles.navIcons}>
              <Image
                src="/Assets/3d/utilities.png"
                alt="utilities"
                priority="true"
                width={30}
                height={30}
              />
              <span>Utilities</span>
            </span>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <span className={styles.navIcons}>
              <Image
                src="/Assets/3d/projects.png"
                alt="projects"
                priority="true"
                width={30}
                height={30}
              />
              <span>Projects</span>
            </span>
          </a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
