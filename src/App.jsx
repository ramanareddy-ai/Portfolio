import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";

// ...
<Certifications />
// ...

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* same gradient look as hers */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,.25),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-6">
        <Navbar />
        <section className="pt-24"><Hero /></section>
        <section className="border-b border-neutral-900 pb-16"><About /></section>
        <section className="border-b border-neutral-900 pb-16"><Technologies /></section>
        <section className="border-b border-neutral-900 pb-16"><Experience /></section>
        <section className="border-b border-neutral-900 pb-16"><Projects /></section>
        <section className="pb-20"><Contact /></section>
      </div>
    </div>
  );
};
export default App;
