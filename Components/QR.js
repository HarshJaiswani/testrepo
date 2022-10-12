/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import styles from "../styles/QR.module.css";
import { IoCopyOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const QR = () => {
  useEffect(() => {
    AOS.init();
  });
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
    <>
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
      <div className={styles.container}>
        <div className={styles.qrWrap}>
          <img src="/Assets/qrCode.png" alt="qrCode" />
        </div>
        <div data-aos="fade-left">
          <h3>Share It</h3>
          <p>
            If you feel like this thing could help someone or just wanna show
            your friends! you can share it using the below links!
          </p>
          <div className={styles.btnWrap}>
            <a href="/Assets/qrCode.png" download>
              <button>
                Get this QR Code <IoCopyOutline className="text-2xl ml-5" />
              </button>
            </a>
            <button onClick={copyFunc}>
              Get Website Link <IoCopyOutline className="text-2xl ml-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QR;
