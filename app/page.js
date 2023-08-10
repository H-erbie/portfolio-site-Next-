// import Header from "./components/Header";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className='min-h-screen px-7'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </main>
  );
}
