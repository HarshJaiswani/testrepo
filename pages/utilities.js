import React from 'react'
import Heading from '../Components/Heading';
import UtilityTemplate from '../Components/UtilityTemplate';
import styles from "../styles/Utilities.module.css";

const Utilities = () => {
  return (
    <div className={styles.utilities}>
      <Heading img="utilities" name="Tools" tagLine="Some special utilities to help you a bit in your journey!" note="I will be delighted if I can make your journey a little smoother by providing little tools for a bigger deed. Hope you like them!" />
      <div className={styles.utilityWrapper}>
        <UtilityTemplate />
        <UtilityTemplate />
        <UtilityTemplate />
        <UtilityTemplate />
        <UtilityTemplate />
        <UtilityTemplate />
        <UtilityTemplate />
        <UtilityTemplate />
      </div>
    </div>
  )
}

export default Utilities
