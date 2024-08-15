import { useEffect, useState } from "react";
import { LiaExternalLinkAltSolid, LiaGithub } from "react-icons/lia";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string,
  description: string,
  techstack: string[],
  image: string,
  links: {gitHub: string, live: string}
}

const Project = ({title, description, techstack, links, image} : Props) => {

  const [reveal, setReveal] = useState(false);

  const {ref, inView} = useInView({
    threshold: 0.9
  })

  useEffect(() => {
    setReveal((prev) => prev || inView)
  },[inView])

  return (
    <div ref={ref} className="flex flex-col gap-y-6 mb-16">
      <div className="overflow-hidden">
        <div className={`relative duration-300 ${reveal ? 'translate-y-0' : 'translate-y-full'}`}>
          <a
            className="text-accent-200 font-semibold text-2xl duration-200 hover:text-accent-100 md:text-4xl" 
            href={links.live} target="_blank"
          >
            {title}
          </a>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className={`hidden md:bg-bg-200 md:block md:flex-1 md:h-80 md:mr-[-10%] duration-300 md:relative md:overflow-hidden ${reveal ? 'opacity-100 md:translate-x-0' : 'opacity-0 md:-translate-x-32'}`}>
          <img className="w-full h-full object-cover opacity-70 duration-300 hover:opacity-100" src={`/project-imgs/${image}`} alt="project" />
        </div>
        
        <div className={`flex-1 bg-gradient-to-tl from-bg-200 to-bg-300 text-text-200 min-h-80 p-4 text-base font-light rounded-md duration-300 md:text-base md:min-h-48 md:relative ${reveal ? 'opacity-100 md:translate-x-0' : 'opacity-0 md:translate-x-32'}`}>
          {description}
        </div>
      </div>
      <div className="flex text-accent-100 flex-wrap gap-x-3 text-base md:text-lg">
        {techstack.map((tech, idx) => (
          // if techstack array has more items then add custom delays to acomodate it.
          <span key={idx} className={`duration-300 delay-${idx*100} ${reveal ? 'translate-x-0 opacity-100':'-translate-x-12 md:-translate-x-16 opacity-0'}`}>
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-x-4 text-text-200 text-3xl">
        <a href={links.gitHub} target="_blank" className={`relative duration-300 ${reveal ? 'translate-x-0 opacity-100':'-translate-x-12 md:-translate-x-16 opacity-0'}`}>
          <LiaGithub className="hover:text-accent-100 duration-200"/>
        </a>
        <a href={links.live} target="_blank" className={`relative duration-300 delay-100 ${reveal ? 'translate-x-0 opacity-100':'-translate-x-12 md:-translate-x-16 opacity-0'}`}>
          <LiaExternalLinkAltSolid className="hover:text-accent-100 duration-200"/>
        </a>
      </div>
    </div>
  );
}
 
export default Project;