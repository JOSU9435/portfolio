import { GoArrowRight } from "react-icons/go";

interface Props {
  title: string,
  href: string,
  containerStyles?: string,
}

const ExtLink = ({title, href, containerStyles}: Props) => {
  
  return (
    <a
      target="_blank"
      href={href}
    >
      <button className={`relative flex items-center gap-3 text-center duration-300 p-2 text-text-200 text-base min-w-24 before:absolute before:top-0 before:left-0 before:border-t-2 before:border-r-2 before:border-accent-100 before:opacity-0 after:absolute after:bottom-0 after:right-0 after:border-b-2 after:border-l-2 after:border-accent-100 after:opacity-0 hover:before:animate-border-fill-tr hover:after:animate-border-fill-bl hover:text-accent-100 before:z-10 ${containerStyles}`}>
        <div className="absolute top-0 left-0 border-text-200 border-2 h-full w-full"></div>
        {title}
        <GoArrowRight className=""/>
      </button>
    </a>
  );
}
 
export default ExtLink;