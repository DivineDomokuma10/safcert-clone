import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real-Time Updates",
    svg: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    text: `The privilege based access allows information to be shown to its real audience, Email Alerts, Notifications, Real-time status updates`,
  },
  {
    id: 2,
    title: "Convenience",
    svg: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    text: `Alumni does not worry about travels and cash payments anymore bringing convenience and encouragement to file application`,
  },
  {
    id: 3,
    title: "Electronic Delivery",
    svg: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9",
    text: `Electronic delivery maks life easier for dispatch and reciept documents.`,
  },
  {
    id: 4,
    title: "Secure",
    svg: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    text: `Validation feature makes it secure for movement of documents as they can be valiated anytime.`,
  },
];

const Alumni = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      className="w-full flex flex-col space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-12 md:space-y-0"
    >
      {items.map((item) => (
        <div key={item.id} className="flex space-x-7">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-7 h-7 text-yellow-400 font-semibold`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={item.svg} />
            </svg>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Alumni;
