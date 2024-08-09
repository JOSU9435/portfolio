import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Hero/>
      <Experiences/>
      <Projects/>
      <Contact/>
    </>
  );
}
 
export default Home;