import React from 'react'
import styles from "../styles/LGSGames.module.css"
import { BsEyeglasses } from "react-icons/bs"
import Link from 'next/link'

const LGSGames = () => {
  return (
    <div className={styles.lgsgames}>
      <h1>LGS Games <BsEyeglasses className='text-9xl inline text-yellow-500' /></h1>
      <Link href="/games"><a className={styles.btn}>Explore</a></Link>
    </div>
  )
}

export default LGSGames