import React from "react";
import { BsEyeglasses } from "react-icons/bs";
import Link from "next/link";

const GameComp = () => {
  return (
    <Link href="/games">
      <a className="w-full">
        <div
          className={`cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:via-indigo-500 hover:to-purple-500 hover:transition-all bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md flex justify-between items-center w-full px-5 py-4`}
        >
          <div>
            <span className="text-2xl text-white font-bold">Game Center</span>{" "}
            <br />{" "}
            <span className="text-gray-300 tracking-wide">
              (Relaxing is an important part of the journey to make it lively)
            </span>
          </div>
          <div>
            <span className="text-lg text-white font-semibold">LGS Games</span>
            <BsEyeglasses className="text-yellow-400 text-5xl inline mx-2" />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default GameComp;
