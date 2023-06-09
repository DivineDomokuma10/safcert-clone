import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real-Time Validation",
    svg: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    text: `Validation feature makes it secure for movement of documents as they can be validated anytime`,
  },
  {
    id: 2,
    title: "Bulk Validation",
    svg: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    text: `[short infrmation here] lem ipsum cnsequat duis minim velit lipsum dolor sit amat querbec`,
  },
  {
    id: 3,
    title: "Secure and accessible records",
    svg: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    text: `You can request and get your documents as much as possible i the event of loss.`,
  },
  {
    id: 4,
    title: "Document authenticity",
    svg: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
    text: `Each document can be verified of its authenticity thereby buying you more confidence and credibility from the public`,
  },
];

const Employer = () => {
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

export default Employer;
