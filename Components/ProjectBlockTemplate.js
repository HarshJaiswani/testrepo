import React from "react";
import styles from "../styles/ProjectBlockTemplate.module.css";
import { FiFolder } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

const ProjectBlockTemplate = (props) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectHead}>
        <FiFolder className="text-[#64ffda] text-3xl" />
        <div>
          {props.getDetails.githubLink != "" && (
            <Link href={props.getDetails.githubLink}>
              <a>
                <TbBrandGithub className="mx-2 text-2xl text-[#a8b2d1]" />
              </a>
            </Link>
          )}
          <Link href={props.getDetails.liveLink}>
            <a>
              <HiOutlineExternalLink className="ml-2 text-2xl text-[#a8b2d1]" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.projectTitle}>{props.getDetails.projectTitle}</div>
      <div className={styles.projectDescp}>{props.getDetails.projectDescp}</div>
      <div className={styles.projectTech}>
        {props.getDetails.projectTech.map((k) => {
          return <span key={props.getDetails.projectTitle}>{k}</span>;
        })}
      </div>
    </div>
  );
};

export default ProjectBlockTemplate;
