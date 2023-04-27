import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen flex flex-col items-center space-y-5 px-4 py-8 justify-between bg-slate-200">
      <div className="w-full flex flex-col bg-white rounded-xl py-10 px-5 space-y-2 md:w-1/3 md:items-center md:py-4 md:space-y-5 md:absolute md:shadow-shadow-big md:left-[35%]">
        <h1 className="text-[26px]">Sign Up</h1>
        <button className="w-56 rounded-lg bg-black py-2 text-white text-sm hover:bg-gray-900 md:py-3">
          Sign Up
        </button>
        <p className="text-sm text-gray-500">
          our agent will contact you as soon as possible.
        </p>
      </div>
      <section className="p-3 w-full flex flex-col space-y-10 border-b-2 border-gray-300">
        <div className="space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="130.74"
            height="32.708"
            viewBox="0 0 130.74 32.708"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_8091"
                  data-name="Rectangle 8091"
                  width="32.707"
                  height="32.707"
                  transform="translate(0 0)"
                  fill="#fff"
                />
              </clipPath>
            </defs>
            <g
              id="Group_16321"
              data-name="Group 16321"
              transform="translate(880 4218)"
            >
              <g
                id="Group_16320"
                data-name="Group 16320"
                transform="translate(-880 -4218)"
                clipPath="url(#clip-path)"
              >
                <path
                  id="Path_11556"
                  data-name="Path 11556"
                  d="M93.3,18.928a6.322,6.322,0,0,0,1.008.672,3.435,3.435,0,0,1-.243.3c-.355.093-.709.168-1.064.261a8.663,8.663,0,0,0-6.418,8.34,8.545,8.545,0,0,0,3.135,6.81,16.368,16.368,0,0,0,8.1-14.124V5.625a.788.788,0,0,0-.784-.784H81.474a15.882,15.882,0,0,0-2.127.131,3.3,3.3,0,0,0,.261.3C84.2,9.8,88.732,14.376,93.3,18.928Z"
                  transform="translate(-65.111 -4.842)"
                  fill="#373737"
                />
                <path
                  id="Path_11557"
                  data-name="Path 11557"
                  d="M8.783,83.7a16.383,16.383,0,0,0,9.2,3.4,17.965,17.965,0,0,1-5.224-4.553,15.763,15.763,0,0,1-3.526-9.683,2.831,2.831,0,0,0-.952-2.2c-1.7-1.66-3.377-3.339-5.056-5.019a16.564,16.564,0,0,0-.8,5.112,16.28,16.28,0,0,0,3.34,9.89A26,26,0,0,0,8.783,83.7Z"
                  transform="translate(-2.421 -54.385)"
                  fill="#cfae26"
                />
                <path
                  id="Path_11558"
                  data-name="Path 11558"
                  d="M47.461,26.375c.317.317.784.541.392,1.157a10.942,10.942,0,0,0-1.642,6.941,11.548,11.548,0,0,0,6.139,9.7c.466-.168.933-.355,1.381-.56a6.458,6.458,0,0,1-1.866-1.53,11.7,11.7,0,0,1-2.612-6.736,10.093,10.093,0,0,1,2.855-7.78c.373-.373.41-.616,0-.97a16.867,16.867,0,0,1-2.09-1.9c-1.7-2.07-3.769-3.768-5.6-5.708-1.567-1.679-3.228-3.247-4.851-4.87A14.605,14.605,0,0,0,36.9,15.8C40.445,19.3,43.953,22.83,47.461,26.375Z"
                  transform="translate(-30.519 -12.401)"
                  fill="#cfae26"
                />
                <path
                  id="Path_11559"
                  data-name="Path 11559"
                  d="M21.343,44.607a1.763,1.763,0,0,1,.56,1.511,16.775,16.775,0,0,0,.522,6.661,16.885,16.885,0,0,0,3.3,5.84,16.256,16.256,0,0,0,4.217,3.172c.093.056.187.093.28.149a17.161,17.161,0,0,0,1.959-.336,14.3,14.3,0,0,1-5.411-5.019A13.158,13.158,0,0,1,24.8,51.38a12.622,12.622,0,0,1,.56-5.989,1.389,1.389,0,0,0-.41-1.679c-2.967-2.929-5.9-5.877-8.844-8.825a15.664,15.664,0,0,0-1.885,2.63C16.6,39.848,18.955,42.256,21.343,44.607Z"
                  transform="translate(-12.033 -29.326)"
                  fill="#cfae26"
                />
              </g>
              <path
                id="Path_11560"
                data-name="Path 11560"
                d="M10.44-18.785h3.232c-.047-2.843-2.383-4.806-5.935-4.806-3.5,0-6.06,1.932-6.044,4.829-.008,2.352,1.651,3.7,4.346,4.346l1.737.436c1.737.421,2.7.919,2.711,1.994-.008,1.168-1.114,1.963-2.827,1.963-1.753,0-3.014-.81-3.123-2.407H1.273C1.358-8.979,3.828-7.195,7.7-7.195c3.895,0,6.185-1.862,6.192-4.783-.008-2.656-2.01-4.066-4.782-4.689l-1.433-.343c-1.386-.319-2.547-.833-2.524-1.978,0-1.028.911-1.784,2.563-1.784C9.327-20.771,10.316-20.039,10.44-18.785ZM18.526-7.421l1.184-3.638h5.756L26.65-7.421h3.614l-5.5-15.952H20.418L14.911-7.421Zm2.041-6.27,1.963-6.037h.125l1.963,6.037ZM32.18-7.421h3.373v-6.59h6.488v-2.781H35.553v-3.8h7.189v-2.781H32.18Zm26.9-10.367c-.444-3.684-3.232-5.8-6.924-5.8-4.214,0-7.431,2.975-7.431,8.194,0,5.2,3.162,8.194,7.431,8.194a6.592,6.592,0,0,0,6.924-5.655l-3.412-.016a3.257,3.257,0,0,1-3.458,2.687c-2.422,0-4.066-1.8-4.066-5.211,0-3.318,1.62-5.211,4.089-5.211a3.228,3.228,0,0,1,3.435,2.82ZM66.9-7.187c2.96,0,4.954-1.441,5.421-3.661l-3.069-.2a2.253,2.253,0,0,1-2.3,1.386,2.6,2.6,0,0,1-2.711-2.882v-.008h8.147v-.911c0-4.066-2.461-6.075-5.624-6.075-3.521,0-5.8,2.5-5.8,6.192C60.961-9.555,63.212-7.187,66.9-7.187ZM64.24-14.61a2.527,2.527,0,0,1,2.578-2.454,2.358,2.358,0,0,1,2.446,2.454ZM74.553-7.421h3.318v-6.769a2.416,2.416,0,0,1,2.539-2.485,5.581,5.581,0,0,1,1.4.179v-2.944a4.98,4.98,0,0,0-1.044-.117A2.906,2.906,0,0,0,77.894-17.3h-.125v-2.087H74.553ZM90.481-19.385H88.23v-2.866H84.912v2.866H83.276v2.493h1.636v6.231c-.016,2.345,1.581,3.505,3.988,3.4a6.454,6.454,0,0,0,1.8-.312l-.522-2.469a4.533,4.533,0,0,1-.826.109c-.662,0-1.122-.249-1.122-1.168v-5.8h2.251Z"
                transform="translate(-839.959 -4186.589)"
                fill="#373737"
              />
            </g>
          </svg>
          <p className="text-gray-800 text-sm">
            Simplify the process of requesting documents and validating them
            through research and improving user experience.
          </p>
          <div className="flex space-x-5 pt-5">
            <span className="w-7 h-7 bg-yellow-400 rounded-lg"></span>
            <span className="w-7 h-7 bg-yellow-400 rounded-lg"></span>
            <span className="w-7 h-7 bg-yellow-400 rounded-lg"></span>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="py-5 text-xl font-semibold">Features</h1>
          <p className="flex flex-col text-gray-800 text- space-y-2">
            <a href="">Support</a>
            <a href="">Help</a>
            <a href="">Contact Us</a>
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="py-5 text-xl font-semibold">Quick Links</h1>
          <p className="flex flex-col text-gray-800 text- space-y-2">
            <a href="">Articles & Blog</a>
            <a href="">documentaton</a>
            <a href="">Learn More</a>
            <a href="">Tutorials</a>

          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="py-5 text-xl font-semibold">Company</h1>
          <p className="flex flex-col text-gray-800 text- space-y-2">
            <a href="">About Us</a>
            <a href="">Team</a>
            <a href="">Press</a>
          </p>
        </div>
      </section>
      <div className="w-full flex flex-col">
        <p>2022 FlexiSAF Edusoft</p>
      </div>
    </footer>
  );
};

export default Footer;
