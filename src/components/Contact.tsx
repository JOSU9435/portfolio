import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ExtLink from "./ExtLink";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Contact = () => {

  const [reveal, setReveal] = useState(false)

  const {ref, inView} = useInView({
    threshold: 1,
  })

  useEffect(() => {
    setReveal(prev => prev || inView)
  },[inView])

  return (
    <div className="min-h-[100vh] flex flex-col items-center">
      <div ref={ref} className="my-auto flex flex-col gap-6 items-center md:gap-8">

        <div className={`text-accent-200 text-3xl duration-300 font-semibold md:text-5xl ${reveal ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Get in Touch
        </div>
        <div className={`text-text-200 mx-4 duration-300 delay-150 text-center text-base md:text-lg md: max-w-lg ${reveal ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed veniam, ullam ipsum quia consequuntur laborum eos minima perspiciatis ipsam.
        </div>
        <ExtLink
          title={'Say Hi!'}
          href={import.meta.env.VITE_MAIL_LINK}
          containerStyles={`md:text-lg delay-300 duration-300 ${reveal ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        />
      </div>
      
      <div className="flex gap-x-8 text-3xl text-text-200 xl:hidden mb-8">
        <a className="mt-auto duration-300 hover:text-accent-100 hover:-translate-y-1" href="https://github.com/JOSU9435/" target="_blank">
          <FaGithub />
        </a>
        <a className="duration-300 hover:text-accent-100 hover:-translate-y-1" href="https://www.linkedin.com/in/netrakamal-barua/" target="_blank">
          <FaLinkedin />
        </a>
        <a className="duration-300 hover:text-accent-100 hover:-translate-y-1" href="mailto:kamalnetra702@gmail.com" target="_blank">
          <MdEmail />
        </a>
      </div>
    </div>
  );
}
 
export default Contact
