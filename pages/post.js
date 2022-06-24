// look what you can do with slider color in this page
import React from "react";
import Comment from "../Components/Comment";
import styles from "../styles/post.module.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { BsLinkedin , BsWhatsapp } from "react-icons/bs";
import { TbBrandMeta } from "react-icons/tb";
import Link from "next/link";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.head}>
        <div className={styles.title}>My First Tech Article</div>
        <div className={styles.date}>25th september 2022</div>
      </div>
      <div className={styles.blog}>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          obcaecati atque recusandae harum iusto id enim, cumque quia ipsum
          totam sed quisquam vel adipisci molestias?
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat
          accusantium blanditiis illum. Soluta corrupti quis accusantium nobis
          corporis aliquid voluptatum sequi veritatis quaerat repellendus?
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          veritatis odit, veniam error adipisci est commodi odio, harum corrupti
          repellendus ducimus ullam recusandae laudantium nulla!
        </span>
        <div className={styles.blogQuote}>
          <span className={styles.quoteLeft}><FaQuoteLeft className="inline-block text-lg mx-2 " /></span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nam!
          <span className={styles.quoteRight}><FaQuoteRight className="inline-block text-lg mx-2 " /></span>
          <div className="text-lg mx-2 my-2">-Author</div>
        </div>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          non. At molestiae quae mollitia quaerat ex veritatis vitae! A numquam,
          similique alias eligendi nulla voluptatibus!
        </span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          non. At molestiae quae mollitia quaerat ex veritatis vitae! A numquam,
          similique alias eligendi nulla voluptatibus!
        </span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          non. At molestiae quae mollitia quaerat ex veritatis vitae! A numquam,
          similique alias eligendi nulla voluptatibus!
        </span>
        <div className={styles.ending}>
          <div className={styles.posted}>
            Posted in
            <span><Link href="/"><a> Design</a></Link></span>,
            <span><Link href="/"><a>Technology</a></Link></span>
            by <em className="text-gray-500">admin</em>
          </div>
          <div className={styles.share}>
            Spread a word :<span><Link href="/"><a><FiLink className="inline-block" /></a></Link></span>
            <span><Link href="/"><a><BsLinkedin className="inline-block" /></a></Link></span>
            <span><Link href="/"><a><BsWhatsapp className="inline-block" /></a></Link></span>
            <span><Link href="/"><a><TbBrandMeta className="inline-block" /></a></Link></span>
          </div>
        </div>
      </div>
      <div className={styles.feedBack}>
        <div>Did You Enjoyed Reading ? <br/><span>(Kindly Give Us The Genuine Opinion)</span></div>
        <button>Yes!</button>
        <button>Nope!</button>
      </div>
      <Comment />
      <div className={styles.postNavigate}>
        <span>
            <Link href="/"><a>
          <BiChevronLeft className={`inline-block text-2xl ${styles.prev}`} /> Previous
          </a></Link>
        </span>
        <div>All Posts</div>
        <span>
        <Link href="/"><a>
          Next <BiChevronRight className={`inline-block text-2xl ${styles.next}`} />
          </a></Link>
        </span>
      </div>
    </div>
  );
};

export default Post;
