import React from "react";
import styles from "../styles/Comment.module.css";
// import { MdEmail , MdInsertComment } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.head}>Express Your Views</div>
      <div className={styles.form}>
        <textarea
          className={styles.commentBox}
          spellCheck="false"
          name="comment"
          id="comment"
          placeholder="Comments"
          cols="30"
          rows="3"
        ></textarea>
        <input
          className={styles.name}
          type="text"
          spellCheck="false"
          placeholder="Name"
        />
        <input
          className={styles.email}
          type="email"
          spellCheck="false"
          placeholder="Email"
        />
        <button>Say It</button>
      </div>
    </div>
  );
};

export default Comment;
