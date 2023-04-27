import { useState } from "react";
import Validator from "./subFeatures/Validator";
import ForInstitution from "./subFeatures/ForInstitution";
import Alumni from "./subFeatures/Alumni";
import Emloyer from "./subFeatures/Emloyer";

const Features = () => {
  const [features, setFeatures] = useState([
    {
      id: 1,
      active: false,
      title: "For Institutions",
      pathD:
        "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
    },
    {
      id: 2,
      active: false,
      title: "Alumni",
      pathD:
        "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    },
    {
      id: 3,
      active: false,
      title: "Employer",
      pathD:
        "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z",
    },
    {
      id: 4,
      active: true,
      title: "Validator",
      pathD:
        "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
    },
  ]);

  const [activeFeature, setActiveFeature] = useState("Validator");

  const handleActiveFeature = (id) => {
    const newVal = features.map((feature) => {
      if (feature.id !== id) {
        return { ...feature, active: false };
      }
      if (feature.id === id) {
        setActiveFeature(feature.title);
        return { ...feature, active: true };
      }
    });

    setFeatures(newVal);
  };

  const renderFeature = (str) => {
    if (str === "Validator") {
      return <Validator />;
    } else if (str === "For Institutions") {
      return <ForInstitution />;
    } else if (str === "Alumni") {
      return <Alumni />;
    } else {
      return <Emloyer />;
    }
  };

  return (
    <section
      id="feature"
      className="max-w-full bg-cover bg-top bg-no-repeat xl:bg-[url('/saf-cert-ripple.svg')] md:px-12"
    >
      <div className="flex flex-col items-center px-10 py-7 md:py-16">
        <div className="w-full flex flex-col space-y-8 items-center">
          <h1 className="text-6xl p-7">Features</h1>
          <p className="text-center md:w-[55%]">
            Give your alumni the comfort of an incredible experience when
            requesting their transcripts, email status updates, flexibility to
            choose between download and delivery options and transparency
            through the process
          </p>
        </div>
        <div className="w-full flex flex-col py-7 md:flex-row">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => handleActiveFeature(feature.id)}
              className={`features w-full flex items-center cursor-pointer justify-center space-x-4 py-7 border-b-2 ${
                feature.active ? "border-gray-400" : "border-gray-300"
              } hover:border-gray-400 md:flex-col md:items-start md:space-x-0 md:space-y-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-8 h-8 ${
                  feature.active ? "text-yellow-400" : "text-yellow-300"
                } font-semibold`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={feature.pathD}
                />
              </svg>
              <p
                className={`${
                  feature.active ? "text-black" : "text-gray-400"
                } text-xl font-semibold`}
              >
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col p-7 md:flex-row md:space-x-40">
        <div className="bg-yellow-500 rounded-md p-5 flex flex-col space-y-5 md:w-2/5">
          <h1 className="text-center text-3xl text-gray-200">Get Started</h1>
          <p className="text-center text-lg text-gray-200">
            The complete digital solution for the processing and issuance of
            important academic documents. Transcripts, Statements of Results and
            Certificates can be applied for, processed and delivered to anywhere
            in the world. Documents and information canbe verified using the
            solution when integrated
          </p>
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-slate-900">
            Sign Up
          </button>
        </div>
        <div className="w-full px-2 py-10 border-b-2 border-gray-300">
          {renderFeature(activeFeature)}
        </div>
      </div>
    </section>
  );
};

export default Features;
