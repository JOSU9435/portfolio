import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiTypescript, SiExpress, SiHtml5, SiCss3, SiMongodb, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


const About = () => {

  const [reveal, setReveal] = useState(false)

  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    setReveal((prev) => prev || inView)
  },[inView])

  const skills = [
    {
      icon: SiTypescript,
      color: '#0177C6',
      name: 'TypeScript',
    },
    {
      icon: FaReact,
      color: '#01FEFF',
      name: 'React',
    },
    {
      icon: FaNodeJs,
      color: '#509840',
      name: 'NodeJS',
    },
    {
      icon: SiExpress,
      color: '#ffffff',
      name: 'Express',
    },
    {
      icon: SiTailwindcss,
      color: '#39BDF9',
      name: 'Tailwind',
    },
    {
      icon: FaSass,
      color: '#C66394',
      name: 'Sass',
    },
    {
      icon: SiMongodb,
      color: '#13A44F',
      name: 'MongoDB',
    },
    {
      icon: BiLogoPostgresql,
      color: '#31658D',
      name: 'Postgresql',
    },
    {
      icon: SiHtml5,
      color: '#E4532C',
      name: 'HTML5',
    },
    {
      icon: SiCss3,
      color: '#2C53E4',
      name: 'CSS3',
    },
  ]

  return (
    <div
      id="about"
      className="min-h-[100vh] bg-bg-100 px-4 pt-20 md:max-w-6xl md:mx-auto"
      ref={ref}
    >
      <div
        className="flex"
      >
        <div className="text-text-200 text-3xl font-semibold relative overflow-hidden md:text-5xl">
          <div className={`relative duration-300 ${reveal ? 'translate-y-0' : 'translate-y-full'}`}>About Me</div>
        </div>
        <div className={`flex-1 bg-accent-100 h-0.5 duration-300 origin-left rounded-full ml-2 my-auto ${inView ? 'scale-100' : 'scale-0'}`}></div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:max-w-3xl lg:mr-28">
          <div className={`text-sm leading-relaxed text-text-200 mt-4 md:text-lg md:mt-8 md:leading-7 duration-300 delay-200 ${reveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            I'm a passionate software engineer and full-stack developer from Assam, India, with a deep love for creating innovative and impactful solutions. I graduated from NIT Silchar with a degree in Computer Science and Engineering, where I developed a strong foundation in coding, problem-solving, and software development.
          </div>
          <div className={`text-sm leading-relaxed text-text-200 my-2 md:text-lg md:my-6 md:leading-7 duration-300 delay-300 ${reveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            I am a former SDE intern at Amazon, where I gained invaluable experience working on complex back-end systems, automating processes, and contributing to large-scale projects. Additionally, I served as the web moderator at GDSC NIT Silchar, where I had the opportunity to contribute technically to multiple projects, organize hackathons and technical workshops, and lead teams in developing innovative solutions.
          </div>
          <div className={`text-sm leading-relaxed text-text-200 my-2 md:text-lg md:my-6 md:leading-7 duration-300 delay-400 ${reveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Beyond my professional experience, I'm always exploring new technologies and frameworks. I've built a variety of projects, including web applications, games, and Discord bots. Here are some technologies I have worked with.
          </div>

          <div className="flex gap-4 justify-center flex-wrap my-6 md:my-8">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                style={{transitionDelay: `${400+idx*60}ms`}}
                className={`duration-300 ${reveal ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
              >
                <skill.icon className="text-3xl mx-auto md:text-4xl" style={{color: skill.color}}/>
                <div className="text-primary-300 mt-1 text-xs md:text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`overflow-hidden relative mx-auto max-w-64 max-h-64 rounded-lg mt-4 lg:mt-8 lg:m-0 lg:max-h-fit duration-500 ease-in-out ${reveal ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-4'}`}>
          <img className="-mt-16 rounded-lg" src="/netrakamal-barua.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
 
export default About;