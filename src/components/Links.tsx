interface Props {
  text: string,
  href: string, 
  containerStyle?: string,
}

const Links = ({text, href, containerStyle}: Props) => {

  return (  
    <div
    className={`relative flex justify-center mx-3 my-2 text-sm font-semibold text-text-200 md:my-1 md:mx-6 md:py-2 md:text-base ${containerStyle}`}
    >
      <a 
        href={href} 
        className="relative before:bg-accent-100 before:h-0.5 before:w-full before:absolute before:-bottom-0.5 before:origin-top-right before:transition-transform before:duration-200 before:scale-x-0 before:hover:scale-x-100 before:hover:origin-top-left"
      >
        {text}
      </a>
    </div>  
  );
}
 
export default Links;