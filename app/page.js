// import Header from "./components/Header";
import About from "./components/about";
import Ban from "./components/ban";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="min-h-screen p-7">
      <Ban />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
