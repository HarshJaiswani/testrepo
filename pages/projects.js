/* eslint-disable @next/next/no-img-element */
import React , { useState , useEffect } from 'react'
import Heading from '../Components/Heading';
import ProjectBlockTemplate from '../Components/ProjectBlockTemplate';
import ProjectTemplate from '../Components/ProjectTemplate';
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const [show , setShow] = useState();
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setShow(false);
    }
    else{
      setShow(true);
    }
  },[show])
  const project1 = {
    projectNum : "#01",
    projectName : "Service Based Website",
    imgUrl : '/Assets/project1.PNG',
    projectDescp: "This is the website for a legal or organisation firm to display their services and about them to get custmers online",
    projectTech: ["javascript" , "html" , "css"],
    githubLink: "https://harshjaiswani.github.io/ServiceBasedWebsite",
    liveLink: "https://harshjaiswani.github.io/ServiceBasedWebsite",
  }
  const project2 = {
    projectTitle : "Service Based Website",
    projectDescp: "This is the website for a legal or organisation firm to display their services and about them to get custmers online",
    projectTech: ["javascript" , "html" , "css"],
    githubLink: "https://harshjaiswani.github.io/ServiceBasedWebsite",
    liveLink: "https://harshjaiswani.github.io/ServiceBasedWebsite",
  }
  return (
    <div className={styles.projects}>
      <Heading name="Some things I&#39;ve Built" img="projects" tagLine="A way to present examples to encourage you. &#39;Not to ShowOff&#39;" note="Being a learner and currently in my 1st semester of pursuing Btech , I have made only a few projects. Out of which some major ones are shared here." />
      <div className={styles.projectWrapper}>
        {show ? <> <ProjectTemplate direction="right" getDetails={project1} />
        <ProjectTemplate direction="left" getDetails={project1} />
        <ProjectTemplate direction="right" getDetails={project1} /></> : ""}
      </div>
      {show ? <h3 className={styles.heading2}>More Crazy Stuff</h3> : ""}
      <div className={styles.otherProjects}>
        {!show ? <><ProjectBlockTemplate getDetails={project2} />
        <ProjectBlockTemplate getDetails={project2} />
        <ProjectBlockTemplate getDetails={project2} /></> : ""}
        <ProjectBlockTemplate getDetails={project2} />
        <ProjectBlockTemplate getDetails={project2} />
        <ProjectBlockTemplate getDetails={project2} />
      </div>
    </div>
  )
}

export default Projects
