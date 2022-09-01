/* eslint-disable @next/next/no-img-element */
// Solve Key Props error
import React from "react";
import styles from "../styles/ProjectTemplate.module.css";
import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

const ProjectTemplate = (props) => {
  return (
    <div className={styles.project}>
      {props.direction == "right" && (
        <div className={styles.projectImg}>
          <Link href={props.getDetails.liveLink}>
            <a>
              <img src={props.getDetails.imgUrl} alt="" />
            </a>
          </Link>
        </div>
      )}
      <div
        className={styles.projectDetails}
        style={
          props.direction == "left"
            ? { alignItems: "flex-start" }
            : { alignItems: "flex-end" }
        }
      >
        <div className={styles.projectNum}>{props.getDetails.projectNum < 10 ? "#0" : "#"}{props.getDetails.projectNum}</div>
        <div className={styles.projectName}>
          <Link href={props.getDetails.liveLink}>
            <a>{props.getDetails.projectName}</a>
          </Link>
        </div>
        <div
          className={styles.projectDescp}
          style={
            props.direction == "right"
              ? { textAlign: "right" }
              : { textAlign: "left" }
          }
        >
          {props.getDetails.projectDescp}
        </div>
        <div className={styles.projectTech}>
          {props.getDetails.projectTech.map((k) => {
            return <span key={props.getDetails.projectNum}>{k}</span>;
          })}
        </div>
        <div className={styles.projectLinks}>
          {props.getDetails.githubLink != "" && (
            <Link href={props.getDetails.githubLink}>
              <a>
                <TbBrandGithub className="mx-2" />
              </a>
            </Link>
          )}
          <Link href={props.getDetails.liveLink}>
            <a>
              <HiOutlineExternalLink className="mx-2" />
            </a>
          </Link>
        </div>
      </div>
      {props.direction == "left" && (
        <div className={styles.projectImg}>
          <Link href={props.getDetails.liveLink}>
            <a>
              <img src={props.getDetails.imgUrl} alt="" />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;
