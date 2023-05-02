import React from "react";
import { motion } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Secure Payment",
    svg: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
    text: `Payments are processed via secure payment gateways and easily traceable with acknowledgement.`,
  },
  {
    id: 2,
    title: "Process Request",
    svg: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
    text: `With SAF E-Transcripts, your transcript request and issuance process becomes simple and straightforward blocking all the opportunity bad actors use for chua chua`,
  },
  {
    id: 3,
    title: "Save Cost",
    svg: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z",
    text: `Protect the revenue your institution is supposed to receive from transcript payments from bad actors who would cause leakages in the system`,
  },
  {
    id: 4,
    title: "Real-Time Updates",
    svg: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    text: `The privilege based access allows information to be shown to its real audience, Email Alerts, Notifications, Real-time status updates`,
  },
];

const ForInstitution = () => {
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

export default ForInstitution;
