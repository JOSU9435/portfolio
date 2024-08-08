const Hero = () => {
  return (
    <div
      className="bg-bg-100 min-h-[100vh] flex flex-col justify-center md:flex-row-reverse md:justify-evenly md:mx-28"
    >
      <div className="mx-6 md:my-auto md:mx-12 animate-fade-in-up">
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
      </div>

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
          className="text-text-200 text-base text-opacity-80 my-4 translate-y-8 opacity-0 animate-fade-in-up delay-450 md:text-lg md:my-6"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, voluptas magnam itaque illo ex, minima similique debitis qui porro dignissimos repudiandae. Natus repellat, nulla itaque possimus suscipit saepe atque ipsum, iste laboriosam
        </div>
      </div>
    </div>
  );
}
 
export default Hero;