/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Heading from "../Components/Heading";
import ProjectBlockTemplate from "../Components/ProjectBlockTemplate";
import ProjectTemplate from "../Components/ProjectTemplate";
import styles from "../styles/Projects.module.css";
import Footer from "../Components/Footer";

const Projects = (props) => {
  const [projects, setProjects] = useState(props.projects.data);
  const [show, setShow] = useState();
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
      setProjects(projects.sort((a, b) => b.projectNum - a.projectNum));
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
        {show && projects[0] && (
          <ProjectTemplate direction="right" getDetails={projects[0]} />
        )}
        {show && projects[1] && (
          <ProjectTemplate direction="left" getDetails={projects[1]} />
        )}
        {show && projects[2] && (
          <ProjectTemplate direction="right" getDetails={projects[2]} />
        )}
        {!show && projects[0] && (
          <ProjectBlockTemplate getDetails={projects[0]} />
        )}
        {!show && projects[1] && (
          <ProjectBlockTemplate getDetails={projects[1]} />
        )}
        {!show && projects[2] && (
          <ProjectBlockTemplate getDetails={projects[2]} />
        )}
      </div>
      {projects.length > 3 ? (
        <h3 className={styles.heading2}>More Crazy Stuff</h3>
      ) : (
        ""
      )}
      {projects.length > 3 && (
        <div className={styles.otherProjects}>
          {isOk == "true" &&
            projects &&
            projects.map((k, index) => {
              return (
                index != 0 &&
                index != 1 &&
                index != 2 && (
                  <ProjectBlockTemplate getDetails={k} key={index} />
                )
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
    props: { projects }, // will be passed to the page component as props
  };
}
