import ExtLink from "./ExtLink";

const Hero = () => {
  return (
    <div
      className="min-h-[100vh] flex flex-col justify-center md:flex-row-reverse md:justify-evenly md:mx-auto"
    >
      <div 
        className="absolute -z-10 triangle rotate-45 h-10 w-10 top-[16%] left-[10%] bg-gradient-to-tr opacity-50 from-transparent from-0% to-accent-100 md:h-14 md:w-14 md:left-[15%]"
      ></div>
      <div 
        className="absolute -z-10 triangle rotate-45 h-7 w-7 bottom-[15%] right-[12%] bg-gradient-to-tr opacity-50 from-transparent from-0% to-accent-100 md:h-10 md:w-10 md:bottom-[17%] md:right-[15%]"
      ></div>
      <div
        className="absolute -z-10 top-[23%] right-[15%] h-20 w-20 rotate-45 rounded-lg bg-gradient-to-tr from-transparent from-10% to-bg-200 md:h-36 md:w-36 md:right-[25%]"
      ></div>
      <div
        className="absolute -z-10 bottom-[8%] left-[12%] h-36 w-36 opacity-60 rounded-full bg-gradient-to-l from-transparent from-10% to-bg-200 md:h-48 md:w-48 md:left-[18%]"
      ></div>
      {/* <div className="mx-6 md:my-auto md:mx-12 animate-fade-in-up">
        <div className="absolute">
          <svg>
            <filter className="abosolute" id="noise" x='0%' y='0%' width='100%' height='100%'>
                <feTurbulence className="animate-turbulance" baseFrequency= "0 0" result="NOISE" numOctaves="1" id="turbulence" >
                  <animate attributeName="baseFrequency" values="0.015 0.015;0 0" dur="0.7s" fill="forwards"/>
                </feTurbulence>
                  
                <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="0">
                  <animate attributeName="scale" values="30;0" dur="0.7s" fill="forwards"/>
                </feDisplacementMap>
            </filter>
          </svg>
        </div>
        <div className="bg-primary-100 my-12 mx-auto rounded-full h-60 w-60 overflow-hidden border-solid border-accent-100 md:w-80 md:h-80 [filter:url('#noise')]">
          <img className="saturate-50" src="/netrakamal-removebg.png" alt="" />
        </div>
      </div> */}

      <div className="mx-6 md:my-auto md:max-w-2xl">
        <div
          className="text-accent-100 text-base my-3 translate-y-8 opacity-0 animate-fade-in-up md:text-lg md:my-6"
        >Hi! my name is </div>
        <div className=" my-0.5 animate-fade-in-up delay-150 md:my-2">
          <span
            className="text-text-200 text-opacity-50 text-4xl font-bold bg-gradient-to-r to-text-200 from-text-200 bg-clip-text bg-no-repeat animate-text-fill delay-150 md:text-7xl"
          >
            Netrakamal.
          </span>
        </div>
        <div className="translate-y-8 opacity-0 animate-fade-in-up delay-300">
          <span
            className="text-accent-200 text-opacity-50 text-2xl font-bold bg-gradient-to-r to-accent-200 from-accent-200 bg-clip-text bg-no-repeat animate-text-fill delay-300 md:text-5xl"
          >
            Software Engineer
          </span>
        </div>
        <div
          className="text-text-200 text-sm text-opacity-70 my-4 translate-y-8 opacity-0 animate-fade-in-up delay-450 md:text-base md:my-8"
        >
          I am a software engineer and full-stack developer from Assam, India, with a degree in Computer Science and Engineering from NIT Silchar. I'm deeply passionate about development, having honed my skills through various projects, including web applications, games, and Discord bots. I have also gained valuable experience as an SDE intern at Amazon.
        </div>

        <div className="my-6 translate-y-8 opacity-0 animate-fade-in-up delay-600">
          <ExtLink
            title="Resume"
            href={import.meta.env.VITE_RESUME_LINK}
            containerStyles="text-base px-3 md:text-lg md:px-4"
          />
        </div>
      </div>
    </div>
  );
}
 
export default Hero;