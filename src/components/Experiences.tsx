import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import experience from "../assets/local-json/experiences.json"
import Experience from "./Experience";

const Experiences = () => {

  const [reveal, setReveal] = useState(false);

  const {ref, inView} = useInView();

  useEffect(() => {
    setReveal((prev) => prev || inView)
  },[inView])

  return (
    <div
      id="experience"
      className="min-h-[100vh] bg-bg-100 px-4 pt-20 md:max-w-6xl md:mx-auto"
    >
      <div
        className="flex"
      >
        <div className="text-text-200 text-3xl font-semibold relative overflow-hidden md:text-5xl">
          <div ref={ref} className={`relative duration-300 ${reveal ? 'translate-y-0' : 'translate-y-full'}`}>EXPERIENCE</div>
        </div>
        <div className={`flex-1 bg-accent-100 h-0.5 duration-300 origin-left rounded-full ml-2 my-auto ${reveal ? 'scale-100' : 'scale-0'}`}></div>
      </div>
      <div className="mt-12">
        {experience.map((exp, idx) => (
          <Experience
            key={idx}
            company={exp.company}
            designation={exp.designation}
            description={exp.description}
            duration={exp.duration}
          />
        ))}
      </div>
    </div>
  );
}
 
export default Experiences;