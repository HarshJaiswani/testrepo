/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Heading from "../Components/Heading";
import ProjectBlockTemplate from "../Components/ProjectBlockTemplate";
import ProjectTemplate from "../Components/ProjectTemplate";
import styles from "../styles/Projects.module.css";
import Footer from "../Components/Footer";

const Projects = (props) => {
  const [show, setShow] = useState();
  const [projects, setProjects] = useState(props.projects.data);
  const [isOk, setIsOk] = useState("true");
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setShow(false);
    } else {
      setShow(true);
    }
    if (!projects) {
      setIsOk("Loading...");
    }
    if (projects) {
      setIsOk("true");
      setProjects(projects.data);
    }
  }, [projects]);
  return (
    <div className={styles.projects}>
      <Heading
        name="Some things I&#39;ve Built"
        img="projects"
        tagLine="A way to present examples to encourage you. &#39;Not to ShowOff&#39;"
        note="Aspiring to Build Great Things"
      />
      <div className={styles.projectWrapper}>
        {show && (
          <ProjectTemplate direction="right" getDetails={projects[projects.length - 1]} />
        )}
        {show && project2 && <ProjectTemplate direction="left" getDetails={projects[projects.length - 2]} />}
        {show && project3 && <ProjectTemplate direction="right" getDetails={projects[projects.length - 3]} />}
        {!show && (
          <>
            <ProjectBlockTemplate getDetails={projects[projects.length - 1]} />
            <ProjectBlockTemplate getDetails={projects[projects.length - 2]} />
            <ProjectBlockTemplate getDetails={projects[projects.length - 3]} />{" "}
          </>
        )}
      </div>
      {projects.length > 0 && show ? (
        <h3 className={styles.heading2}>More Crazy Stuff</h3>
      ) : (
        ""
      )}
      {projects.length > 0 && (
        <div className={styles.otherProjects}>
          {isOk == "true" &&
            projects &&
            projects.splice(-3).map((k) => {
              return (
                <>
                  <ProjectBlockTemplate getDetails={k} />
                </>
              );
            })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Projects;

export async function getServerSideProps(context) {
  let data = await fetch(`https://legrosh.vercel.app/api/getProjects`);
  let projects = await data.json();
  return {
    props: {projects}, // will be passed to the page component as props
  }
}