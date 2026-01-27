
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;
      setShowFooter(scrollPosition >= pageHeight - 2);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      <Header />
      <main className="flex flex-col items-center pt-24 w-full">
        {/* Seção Sobre Mim */}
        <section id="about" className="mb-20 scroll-mt-30 mt-6 w-full">
          <About />
        </section>
        {/* Seção Skills */}
        <section id="skills" className="mb-20 scroll-mt-25  w-full">
          <Skills />
        </section>
        {/* Seção Projetos */}
        <section id="projects" className="mb-20 scroll-mt-24">
          <Projects />
        </section>
      </main>
      {/* Espaço para não sobrepor conteúdo pelo footer fixo */}
      <div className="h-20" />
      {showFooter && <Footer />}
    </div>
  );
}

export default App
