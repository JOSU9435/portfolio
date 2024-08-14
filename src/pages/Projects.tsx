import Project from "../components/Project";
import { useInView } from "react-intersection-observer";
import projects from "../assets/local-json/projects.json"
import { useEffect, useState } from "react";

const Projects = () => {

  const [reveal, setReveal] = useState(false);

  const {ref, inView} = useInView();

  useEffect(() => {
    setReveal((prev) => prev || inView)
  },[inView])

  return (
    <div
      id="projects"
      className="min-h-[100vh] bg-bg-100 px-4 pt-20 md:max-w-6xl md:mx-auto"
    >
      <div
        className="flex"
      >
        <div className="text-text-200 text-3xl font-semibold relative overflow-hidden md:text-5xl">
          <div ref={ref} className={`relative duration-300 ${reveal ? 'translate-y-0' : 'translate-y-full'}`}>PROJECTS</div>
        </div>
        <div className={`flex-1 bg-accent-100 h-0.5 duration-300 origin-left rounded-full ml-2 my-auto ${inView ? 'scale-100' : 'scale-0'}`}></div>
      </div>

      <div className="mt-12">
        {
          projects.map(((project, idx) => (
            <Project
              key={idx}
              title={project.title} 
              description={project.description}
              techstack={project.teckstack}
              image={project.image}
              links={project.links}
            />
          )))
        }
      </div>
    </div>
  );
}
 
export default Projects;