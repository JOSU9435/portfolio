import { useInView } from "react-intersection-observer";
import Links from "./Links";
import { useCallback, useEffect, useRef, useState } from "react";

const Nav = () => {

  const [scrollUp, setScrollUp] = useState(true)
  const lastY = useRef(window.scrollY)
  const {ref, inView} = useInView()

  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    setReveal((prev) => prev || inView);
  },[inView])

  const handleScroll = useCallback(() => {
    if(lastY.current < window.scrollY && scrollUp===true) {
      setScrollUp(false)
    }else if(lastY.current > window.scrollY && scrollUp===false){
      setScrollUp(true)
    }
    lastY.current = window.scrollY
  },[scrollUp])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[handleScroll])

  return (
    <div
      ref={ref}
      className={`fixed z-50 bg-bg-200 px-2 justify-evenly flex rounded-full left-1/2 -translate-x-1/2 top-4 duration-200 ${scrollUp ? 'translate-y-0' : '-translate-y-[150%]'}`}
    >
      <Links 
        text={"About"} 
        href="#about"
        containerStyle={`duration-500 delay-0 ${reveal && scrollUp ? 'translate-x-0 opacity-100': '-translate-x-4 opacity-0 md:-translate-x-8'}`}
      />
      <Links 
        text={"Experience"}
        href="#experience"
        containerStyle={`duration-500 delay-100 ${reveal && scrollUp ? 'translate-x-0 opacity-100': '-translate-x-4 opacity-0 md:-translate-x-8'}`}
      />
      <Links 
        text={"Projects"} 
        href="#projects"
        containerStyle={`duration-500 delay-200 ${reveal && scrollUp ? 'translate-x-0 opacity-100': '-translate-x-4 opacity-0 md:-translate-x-8'}`}
      />
      <Links 
        text={"Contact"}
        href="#contact"
        containerStyle={`duration-500 delay-300 ${reveal && scrollUp ? 'translate-x-0 opacity-100': '-translate-x-4 opacity-0 md:-translate-x-8'}`}
      />
    </div>
  );
}
 
export default Nav;