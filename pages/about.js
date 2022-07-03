/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/About.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import Heading from "../Components/Heading";
import { TagCloud } from "react-tagcloud";
import Footer from "../Components/Footer";
import Link from "next/link";

const About = (props) => {
  const data = [
    { value: "JavaScript", count: 38 },
    { value: "ReactJs", count: 30 },
    { value: "NodeJs", count: 28 },
    { value: "Express.js", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "MongoDB", count: 18 },
    { value: "CSS3", count: 20 },
    { value: "NextJs", count: 20 },
    { value: "Mongoose", count: 20 },
  ];
  return (
    <>
      <div className={styles.about}>
        <Heading
          img="about"
          name="Who We Are"
          tagLine="It's always the team which builds a company!"
          note="People dont remeber how you treated them instead how you made them feel , so it will be our pleasure to make you feel good. Hope We Did ! "
        />
        <div className={styles.contact}>Mail Us at : <Link href="mailto:legrosh2021@gmail.com"><a>legrosh2021@gmail</a></Link></div>
        <div className={styles.abtCompany}>
          <span>
            Welcome Or Welcome back to the place , LeGroSh is the place where we
            are building a community to help people grow in diffrent ways
          </span>
          <ul>
            <li>By Writting Quality Content about Self Growth</li>
            <li>
              Developing People&#39;s identity By making Websites for them
            </li>
            <li>
              Helping Business grow their identity Online again by building Web
              Stores for them
            </li>
            <li>
              Being a Listners - You can{" "}
              <Link href="https://forms.gle/cxo8s44xseoEDAFi6"><a className={styles.call}>book a call</a></Link> with us where we can
              discuss whatever you want and we will try and help you as much as
              we can or you can just share whatever you want and feel lighter
            </li>
            <li>
              Explain Key Points from each chapters of books to help you grow in
              your life
            </li>
          </ul>
        </div>
        <div className={styles.team}>
          <div className={styles.abtCircle}>
            <div className={styles.circle}>
              <span>Meet the Team</span>
              <span className={styles.teamDescp}>
                Currently , I am working as one man army but I will be happily
                accepting my &#34;Hustlers&#34; If you are intrested in Joining
                Us
                <button>Contact Us</button>
              </span>
            </div>
          </div>
          <div className={styles.peoples}>
            <div className={styles.people}>
              <IoPersonCircle />
            </div>
            <div className={styles.people}>
              <IoPersonCircle />
            </div>
            <div className={styles.people}>
              <IoPersonCircle />
            </div>
            <div className={styles.people}>
              <IoPersonCircle />
            </div>
            <div className={styles.people}>
              <img src="/Assets/me.jpg" alt="" />
            </div>
            <div className={styles.people}>
              <IoPersonCircle />
            </div>
            <div className={styles.people}>
              <IoPersonCircle />
            </div>
            <div className={styles.people}>
              <IoPersonCircle />
            </div>
            <div className={styles.people}>
              <IoPersonCircle />
            </div>
          </div>
        </div>
          <div className={styles.abtMe}>
            <div>
              <img src="/Assets/meGuitar.jpg" alt="" />
            </div>
            <span>
              <FaQuoteLeft className={styles.leftQuote} />
              <FaQuoteRight className={styles.rightQuote} />
              And This is me , Harsh Jaiswani , This is one of my oldest photo
              of mine but the most beautiful one. I like to play guitar and I am
              an Tech and StartUp Entusiast , an Enterprenuer myself and My
              Final goal is to became an angle investor , support and be the
              part of all those wonders that will happen that I cant do alone. I
              want to add value to the community as much as I can , be it with
              my work or by money! <br />
              Reach me out on LinkedIn - HarshJaiswani(Founder of LeGroSh)
            </span>
          </div>
        <div className={styles.abtMeWrap}>
          <div className={styles.mySkills}>
            <div>
              Some of My Skills Inlcudes
            </div>
            <div>
              <TagCloud
                minSize={12}
                maxSize={35}
                tags={data}
              />
            </div>
          </div>
        <div className={styles.history}>
          <div className={styles.historyHead}>My History</div>
          <section className={`text-gray-600 body-font ${styles.historySec}`}>
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 relative z-10 title-font font-medium text-sm"></div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                      Jatan Devi Daga Hr. Sec. School
                    </h2>
                    <p className="leading-relaxed bg-[#112240] rounded-xl px-2 text-gray-500 w-fit">
                      April 2018 - May 2019
                    </p>
                    <p className="leading-relaxed mx-1">
                      Class 10th - 89%
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 relative z-10 title-font font-medium text-sm"></div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                      Jatan Devi Daga Hr. Sec. School
                    </h2>
                    <p className="leading-relaxed bg-[#112240] rounded-xl px-2 text-gray-500 w-fit">
                      April 2020 - May 2021
                    </p>
                    <p className="leading-relaxed mx-1">
                      Class 12th - 77%
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 relative z-10 title-font font-medium text-sm"></div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                      Shri Shankaracharya Institute of Professtional Management and Technology
                    </h2>
                    <p className="leading-relaxed bg-[#112240] rounded-xl px-2 text-gray-500 w-fit">
                      November 2022 - Present
                    </p>
                    <p className="leading-relaxed mx-1">
                      BTech In CS
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 relative z-10 title-font font-medium text-sm"></div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">
                      LeGroSh - Learn Grow Share
                    </h2>
                    <p className="leading-relaxed bg-[#112240] rounded-xl px-2 text-gray-500 w-fit">
                      September 2021 - Present
                    </p>
                    <p className="leading-relaxed mx-1">
                      Company
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {abcd:"hllo"}
  }
}

export default About;
