import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import "../styles/globals.css";
import Head from "next/head";
import Loding from "../Components/loding";
import Router from "next/router";
import MoveableNav from "../Components/MoveableNav";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setProgress(30);
      setLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setProgress(100);
      setLoading(false);
    });
  });
  return (
    <>
      <Head>
        <meta
          name="description"
          content="LeGroSh is a App to provide web services , self growth blogs , Tech related content and a Engine to communicate with all! , solve queries and doubts to provide a proper guidence to my juniors - An initiative by Harsh Jaiswani"
        />
        <noscript>
          Give Power of Javascript to Your Browser Engine to Have Embrase the
          Beauty of this App
        </noscript>
        <title>LeGroSh - Learn-Grow-Share</title>
      </Head>
      {loading && <Loding />}
      <LoadingBar
        color="rgb(234,179,8)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <MoveableNav />
      {!loading && <Component {...pageProps} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
    </>
  );
}

export default MyApp;
