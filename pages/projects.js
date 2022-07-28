/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Heading from "../Components/Heading";
import ProjectBlockTemplate from "../Components/ProjectBlockTemplate";
import ProjectTemplate from "../Components/ProjectTemplate";
import styles from "../styles/Projects.module.css";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Projects = () => {
  const [show, setShow] = useState();
  const { data, error } = useSWR("/api/getProjects", fetcher);
  const [projects, setProjects] = useState([]);
  const [isOk, setIsOk] = useState("true");
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setShow(false);
    } else {
      setShow(true);
    }
    if (error) {
      setIsOk("false");
    }
    if (!data) {
      setIsOk("Loading...");
    }
    if (data) {
      setIsOk("true");
      setProjects(data.data);
    }
  }, [show, error, data]);
  const project1 = {
    projectNum: "#01",
    projectName: "Service Based Website",
    imgUrl: "/Assets/projects/project1.PNG",
    projectDescp:
      "This is the website for a legal or organisation firm to display their services and about them to get custmers online",
    projectTech: ["javascript", "html", "css"],
    githubLink: "https://github.com/HarshJaiswani/Service-Website",
    liveLink: "https://harshjaiswani.github.io/Service-Website/",
  };
  const project2 = {
    "projectNum": "#02",
    "projectName": "LGS-Old",
    "imgUrl": "/Assets/projects/project2.PNG",
    "projectDescp": "This is the older version of the web app of LeGroSh",
    "projectTech": ["ReactJs", "JavaScript", "Css" , "HTML"],
    "githubLink": "https://github.com/HarshJaiswani/LeGroSh-old",
    "liveLink": "https://harshjaiswani.github.io/LeGroSh-old/"
  }
  // const project3 = {
  //   "projectNum": "#03",
  //   "projectName": "",
  //   "imgUrl": "/Assets/project3.PNG",
  //   "projectDescp": "",
  //   "projectTech": ["", "", ""],
  //   "githubLink": "",
  //   "liveLink": ""
  // }
  return (
    <div className={styles.projects}>
      <Heading
        name="Some things I&#39;ve Built"
        img="projects"
        tagLine="A way to present examples to encourage you. &#39;Not to ShowOff&#39;"
        note="Being a learner and currently in my 1st semester of pursuing Btech , I have made only a few projects. Out of which some major ones are shared here."
      />
      <div className={styles.projectWrapper}>
        {show && project1 && (
          <ProjectTemplate direction="right" getDetails={project1} />
        )}
        {show && project2 && <ProjectTemplate direction="left" getDetails={project2} />}
        {/* {show && project3 && <ProjectTemplate direction="right" getDetails={project3} />} */}
        {!show && (
          <>
            <ProjectBlockTemplate getDetails={project1} />
            <ProjectBlockTemplate getDetails={project2} />
            {/* <ProjectBlockTemplate getDetails={project3} />{" "} */}
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
            projects.map((k) => {
              return (
                <>
                  <ProjectBlockTemplate getDetails={k} />
                </>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Projects;
