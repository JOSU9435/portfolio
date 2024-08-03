import Links from "./Links";

const Nav = () => {
  return (
    <div
      className="fixed bg-bg-200 px-2 justify-evenly flex rounded-full left-1/2 -translate-x-1/2 top-4"
    >
      <Links text={"About"} />
      <Links text={"Projects"} />
      <Links text={"Experience"} />
      <Links text={"Skills"} />
    </div>
  );
}
 
export default Nav;