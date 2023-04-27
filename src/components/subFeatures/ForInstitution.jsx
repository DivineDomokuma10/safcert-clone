import React from "react";
import { motion } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Secure Payment",
    svg: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
    text: `Payments are processed via secure payment gateways and easily traceable with acknowledgement.`,
  },
  {
    id: 2,
    title: "Process Request",
    svg: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
    text: `With SAF E-Transcripts, your transcript request and issuance process becomes simple and straightforward blocking all the opportunity bad actors use for chua chua`,
  },
  {
    id: 3,
    title: "Save Cost",
    svg: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
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
