import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {

  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    setReveal(true)
  },[])

  return (
    <div className="hidden xl:flex ml-8 fixed h-full flex-col gap-y-4 text-3xl text-text-200 items-center">
      <a className={`mt-auto delay-600 duration-300 ${reveal ? '-translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} href={import.meta.env.VITE_GITHUB_LINK} target="_blank">
        <FaGithub className="duration-300 hover:text-accent-100 hover:-translate-y-1"/>
      </a>
      <a className={`delay-500 duration-300 ${reveal ? '-translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} href={import.meta.env.VITE_LINKEDIN_LINK} target="_blank">
        <FaLinkedin className="duration-300 hover:text-accent-100 hover:-translate-y-1"/>
      </a>
      <a className={`delay-400 duration-300 ${reveal ? '-translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} href={import.meta.env.VITE_MAIL_LINK} target="_blank">
        <MdEmail className="duration-300 hover:text-accent-100 hover:-translate-y-1"/>
      </a>
      <div className={`bg-accent-100 origin-bottom duration-500 w-0.5 h-72 ${reveal ? 'scale-100' : 'scale-0'}`}></div>
    </div>
  );
}
 
export default Socials;