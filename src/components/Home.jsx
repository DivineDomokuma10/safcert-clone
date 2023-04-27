import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="max-w-full h-[150vh] flex flex-col items-center mt-[73px] space-y-10 bg-yellow-500 bg-[url('/logo.png/')] bg-top  bg-contain bg-no-repeat rounded-bl-[280px] sm:h-[70vh] sm:bg-left sm:space-y-0 sm:flex-row sm:mt-[82.5px] sm:relative"
    >
      <motion.div
        className="flex flex-col items-center space-y-5 sm:items-start sm:w-[42%] sm:pl-20"
        initial={{ x: -700 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-50 pt-10 flex flex-col items-center sm:text-6xl sm:items-start">
          <span className="text-center sm:text-left">
            Discover the best way to process
          </span>
          <span className="text-black mt-2">Transcript</span>
        </h1>
        <p className="w-[90%] text-center text-lg px-3 text-gray-50 sm:text-start sm:px-0">
          <span className="font-bold">SAFCerts</span> is a simple but powerful
          platform that help institutions to easily recieve payments for
          transcripts, statements of results, certificates and process the
          requests in a secure, easy to use and convenient way
        </p>
        <button className="px-5 py-2 text-sm text-white rounded-md bg-black hover:bg-gray-900">
          Sign Up
        </button>
      </motion.div>
      <motion.div
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-80 h-[40%] relative bg-[url('/guy_with_pc.png')] bg-cover bg-no-repeat bg-right rounded-lg sm:h-[450px] sm:w-[500px] sm:absolute sm:right-24 sm:-bottom-20"
      >
        <div className="w-fit flex flex-col p-3 rounded-lg space-y-4 bg-white border-[3px] absolute -bottom-4 left-3 sm:space-y-6 sm:-left-10 sm:bottom-5">
          <div className="w-full flex items-center space-x-12 sm:space-x-16">
            <span className="font-bold sm:text-xl">Total institutions</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-5">
            <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-yellow-500 sm:w-12 sm:h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
            </div>
            <span className="font-bold text-[30px] sm:text-[35px]">100+</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
