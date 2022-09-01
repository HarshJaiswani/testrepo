import React, { useEffect, useState } from "react";
// import Comment from "../../Components/Comment";
import styles from "../../styles/post.module.css";
// import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Post = (props) => {
  const [blog, setBlog] = useState(props.article);
  const [status, setStatus] = useState("true");
  //   const [postNo, setPostNo] = useState();
  useEffect(() => {
    if (!blog) {
      setStatus("true");
    }
    if(blog){
      setBlog(blog);
    }
    }, [blog]);
//   const fetchBlog = async (no) => {
//     if (postNo == 1) {
//         toast('You are on first article!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             });
//     }
//     else if (postNo == props.blogs.length){
//         toast('You are on last article!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             });
//     }
//     else{
//         props.blogs.forEach((k) => {
//           if (k.sno == no) {
//             router.push(`/post/${k.slug}`);
//           }
//         });
//     }
//   };
  const copyFunc = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link Copied!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
   <div className={styles.post}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <ToastContainer />
    <div className={styles.head}>
      <div className={styles.title}>{blog && blog.title}</div>
      <div className={styles.date}>{blog && blog.date}</div>
    </div>
    <div className={styles.blog}>
      <div className={styles.blogQuote}>
        <span className={styles.quoteLeft}>
          <FaQuoteLeft className="inline-block text-lg mx-2 " />
        </span>
        {blog && blog.quote}
        <span className={styles.quoteRight}>
          <FaQuoteRight className="inline-block text-lg mx-2 " />
        </span>
        <div className="text-lg mx-2 my-2">-{blog && blog.quoteAuthor}</div>
      </div>
      {blog && blog.parts &&
        blog.parts.map((e,idx) => (
          <span key={idx}>{e}</span>
        ))}
        <span>Learn - Grow - Share</span>
      <div className={styles.ending}>
        <div className={styles.posted}>
          Posted in
          <span>
            <Link href="/">
              <a>{blog && blog.category}</a>
            </Link>
          </span>
          by <em className="text-gray-500">{blog && blog.author}</em>
        </div>
        <div className="flex justify-between flex-wrap">
        <div className={styles.share} onClick={copyFunc}>
          Spread a word <IoCopyOutline className="text-2xl ml-5" />
        </div>
        <Link href="/articles"><a className={`${styles.share} tracking-wider`}>Explore More Articles &rarr;</a></Link>
        </div>
      </div>
    </div>
    <div className={styles.feedBack}>
      <div>
        Did You Enjoyed Reading ? <br />
        <span>(Kindly Give Us The Genuine Opinion)</span>
      </div>
      <button
        onClick={() => {
          toast.success("Happy! You Liked It!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        Yes!
      </button>
      <button
        onClick={() => {
          toast.info("Thanks for feedback , we'll Improve!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        Nope!
      </button>
    </div>
    {/* <Comment /> */}
    {/* <div className={styles.postNavigate}>
      <span onClick={() => fetchBlog(--postNo)}>
        <BiChevronLeft
          className={`inline-block text-2xl ${styles.prev} cursor-pointer`}
        />
        Previous
      </span>
      <div>All Posts</div>
      <span onClick={() => fetchBlog(++postNo)}>
        Next
        <BiChevronRight
          className={`inline-block text-2xl ${styles.next} cursor-pointer`}
        />
      </span>
    </div> */}
  </div>
  );
};

export default Post;

export async function getServerSideProps(context) {
  let {slug} = context.query
  let data = await fetch(`https://legrosh.vercel.app/api/getBlog?slug=${slug}`);
  let article = await data.json();
  return {
    props: {article}, // will be passed to the page component as props
  }
}