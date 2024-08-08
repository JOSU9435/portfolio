import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-8 fixed h-full flex-col gap-y-4 text-3xl text-text-200 items-center">
      <a className="mt-auto duration-300 hover:text-accent-100 hover:-translate-y-1" href="https://github.com/JOSU9435/" target="_blank">
        <FaGithub />
      </a>
      <a className="duration-300 hover:text-accent-100 hover:-translate-y-1" href="https://www.linkedin.com/in/netrakamal-barua/" target="_blank">
        <FaLinkedin />
      </a>
      <a className="duration-300 hover:text-accent-100 hover:-translate-y-1" href="mailto:kamalnetra702@gmail.com" target="_blank">
        <MdEmail />
      </a>
      <div className="bg-accent-100 w-0.5 h-72"></div>
    </div>
  );
}
 
export default Socials;