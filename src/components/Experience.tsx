import { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface Props {
  company: string,
  designation: string,
  description: string[],
  duration: string,
}

const Experience = ({company, designation, description, duration}: Props) => {

  const [reveal, setReveal] = useState(false)

  const {ref, inView} = useInView({
    threshold: 1,
  })

  useEffect(() => {
    setReveal(prev => prev || inView)
  },[inView])

  return (
    <div ref={ref}>
      <div className="text-lg text-accent-200 md:text-2xl overflow-hidden">
        <div className={`relative duration-300 ${reveal ? 'translate-y-0' : 'translate-y-full'}`}>{designation}</div>
      </div>
      <div className="text-lg text-accent-100 font-semibold overflow-hidden md:text-2xl">
        <div className={`relative delay-200 duration-300 ${reveal ? 'translate-y-0' : 'translate-y-full'}`}>
          @{company}
        </div>
      </div>
      <div className={`text-sm text-text-200 mt-4 md:text-base duration-300 delay-400 ${reveal ? 'opacity-100' : 'opacity-0'}`}> 
        {duration}
        </div>
      <div className={`my-4 duration-300 delay-400 ${reveal ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        {description.map((desc, idx) => (
          <div key={idx} className="flex my-2">
            <div>
              <FaCaretRight className="text-accent-100 text-2xl mr-1"/>
            </div>
            <div className="text-text-200 text-base md:text-lg">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Experience;