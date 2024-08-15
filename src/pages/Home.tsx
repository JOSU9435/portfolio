import About from "../components/About";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Experiences/>
      <Projects/>
      <Contact/>
    </>
  );
}
 
export default Home;