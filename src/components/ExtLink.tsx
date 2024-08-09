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
      className={`relative text-center duration-300 bg-bg-300 p-2 text-text-100 text-base min-w-24 before:absolute before:top-0 before:left-0 before:border-t-2 before:border-r-2 before:border-accent-100 before:opacity-0 after:absolute after:bottom-0 after:right-0 after:border-b-2 after:border-l-2 after:border-accent-100 after:opacity-0 hover:before:animate-border-fill-tr hover:after:animate-border-fill-bl hover:text-accent-100 ${containerStyles}`}
    >
      {title}
    </a>
  );
}
 
export default ExtLink;