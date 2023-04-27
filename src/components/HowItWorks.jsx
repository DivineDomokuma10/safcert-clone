import React from "react";


const HowItWorks = () => {
  return (
    <section
      id="HIW"
      className="max-w-full p-5 flex flex-col space-y-5 items-center bg-slate-50 md:px-12"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center p-6">How it Work</h1>
        <p className="text-center p-4 md:w-[55%]">
          Based on the option the requester submitted, the Institution admin can
          either upload the transcript on the platform for the requester to
          download or ship it to the requester's delivery address
        </p>
      </div>
      <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5">
        <div className="w-full flex flex-col space-y-9 bg-white rounded-xl hover:shadow-shadow-big p-9 md:bg-transparent">
          <div className="w-[90px] h-[90px] flex items-center justify-center rounded-2xl shadow-shadow-small bg-yellow-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-yellow-300 font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </div>
          <h1 className="font-bold text-2xl">1. Sign Up</h1>
          <p className="text-gray-800 leading-7">
            Alumni of institution log on to the school's{" "}
            <span className="font-bold">SAFCerts</span> portal, make their
            transcript payments and submit their requests.
          </p>
        </div>
        <div className="w-full flex flex-col space-y-9 bg-white rounded-xl hover:shadow-shadow-big p-9 md:bg-transparent">
          <div className="w-[90px] h-[90px] flex items-center justify-center rounded-2xl shadow-shadow-small bg-yellow-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-yellow-300 font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </div>
          <h1 className="font-bold text-2xl">2. Admin Reviews</h1>
          <p className="text-gray-800 leading-7">
            The institution's Admin is notified when new requests are made they
            can log into the <span className="font-bold">SAFCerts</span> portal,
            to review transcript requests.
          </p>
        </div>
        <div className="w-full flex flex-col space-y-9 bg-white rounded-xl hover:shadow-shadow-big p-9 md:bg-transparent">
          <div className="w-[90px] h-[90px] flex items-center justify-center rounded-2xl shadow-shadow-small bg-yellow-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-yellow-300 font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </div>
          <h1 className="font-bold text-2xl">3. Get Certified</h1>
          <p className="text-gray-800 leading-7">
            The Admin updates the status of the requests as progress is made and
            the Alumni who requests would get an update on the status change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
