import { useInView } from "react-intersection-observer";
import ExtLink from "./ExtLink";

const Hero = () => {

  const {ref, inView} = useInView({
    threshold: 0.7,
  })

  return (
    <div
      ref={ref}
      className="min-h-[100vh] max-w-[100vw] relative overflow-hidden flex flex-col justify-center md:flex-row-reverse md:justify-evenly md:mx-auto"
    >
      <div 
        className={`absolute duration-500 triangle rotate-45 h-10 w-10 top-[16%] left-[10%] bg-gradient-to-tr from-transparent from-0% to-accent-100 md:h-14 md:w-14 md:left-[15%] ${inView ? '-translate-x-0 opacity-50' : '-translate-x-12 opacity-0'}`}
      ></div>
      <div 
        className={`absolute delay-500 duration-500 triangle rotate-45 h-7 w-7 bottom-[15%] right-[12%] bg-gradient-to-tr from-transparent from-0% to-accent-100 md:h-10 md:w-10 md:bottom-[17%] md:right-[15%] ${inView ? '-translate-x-0 opacity-50' : 'translate-x-12 opacity-0'}`}
      ></div>
      <div
        className={`absolute delay-150 duration-500 top-[23%] right-[15%] h-20 w-20 rotate-45 rounded-lg bg-gradient-to-tr from-transparent from-10% to-bg-200 md:h-36 md:w-36 md:right-[25%] ${inView ? '-translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
      ></div>
      <div
        className={`absolute delay-300 duration-500 bottom-[8%] left-[12%] h-36 w-36 rounded-full bg-gradient-to-l from-transparent from-10% to-bg-200 md:h-48 md:w-48 md:left-[18%] ${inView ? '-translate-x-0 opacity-60' : '-translate-x-20 opacity-0'}`}
      ></div>

      <div className="mx-6 md:my-auto md:max-w-3xl">
        <div
          className="text-accent-100 text-base my-3 translate-y-8 opacity-0 animate-fade-in-up md:text-xl md:my-5"
        >Hi! my name is </div>
        <div className=" my-0.5 translate-y-8 opacity-0 animate-fade-in-up delay-150 md:my-2">
          <span
            className="text-text-200 text-opacity-50 text-5xl font-bold bg-gradient-to-r to-text-200 from-text-200 bg-clip-text bg-no-repeat animate-text-fill delay-150 md:text-8xl"
          >
            Netrakamal.
          </span>
        </div>
        <div className="translate-y-8 opacity-0 animate-fade-in-up delay-300">
          <span
            className="text-accent-200 text-opacity-50 text-3xl font-bold bg-gradient-to-r to-accent-200 from-accent-200 bg-clip-text bg-no-repeat animate-text-fill delay-300 md:text-6xl"
          >
            Software Engineer
          </span>
        </div>
        <div
          className="text-primary-300 text-sm my-4 translate-y-8 opacity-0 animate-fade-in-up delay-450 md:text-lg md:my-8"
        >
          I am a software engineer and full-stack developer from Assam, India, with a degree in Computer Science and Engineering from NIT Silchar. I'm deeply passionate about development, 
        </div>

        <div className="my-6 translate-y-8 opacity-0 animate-fade-in-up delay-600">
          <ExtLink
            title="Resume"
            href={import.meta.env.VITE_RESUME_LINK}
            containerStyles="text-base px-3 md:text-xl md:px-4"
          />
        </div>
      </div>
    </div>
  );
}
 
export default Hero;