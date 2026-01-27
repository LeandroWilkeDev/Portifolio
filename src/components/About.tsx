

export default function About() {
  return (
    <section data-aos-duration="1000" data-aos="zoom-in" id="about" className="flex flex-col items-center text-center w-full max-w-7xl mx-auto px-6  overflow-x-hidden box-border">
      <div className="relative mb-4 mt-4 w-full max-w-full flex justify-center items-center">
        <img
          src="https://avatars.githubusercontent.com/u/107521352?v=4"
          alt="Avatar de Leandro Wilke"
          className="w-36 h-36 max-w-full rounded-full border-4 border-cyan-400 shadow-xl object-cover transition-transform duration-500 hover:scale-105 shadow-purple-400/40 "
        />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-(--color-react-blue) via-(--color-react-cyan) to-(--color-react-purple) bg-clip-text text-transparent mb-0" style={{textShadow: '0 2px 4px #0ff1fc, 0 1px 1px #0ff1fc'}}>Leandro Wilke</h2>
      <h3 className="text-xl md:text-2xl font-semibold text-(--color-react-purple) mb-2 tracking-wide uppercase" style={{textShadow: '0 2px 4px #7f53ac, 0 1px 1px #7f53ac'}}>Desenvolvedor Frontend</h3>
      <p className="max-w-2xl px-4 text-(--color-react-text) mb-4 leading-relaxed">
        Sou apaixonado por criar interfaces <span className="text-(--color-react-blue) font-semibold">modernas</span>, <span className="text-(--color-react-blue) font-semibold">responsivas</span> e <span className="text-(--color-react-blue) font-semibold">acessíveis</span>. Tenho experiência com <span className="text-(--color-react-cyan)">React</span>, <span className="text-(--color-react-cyan)">TypeScript</span> e <span className="text-(--color-react-cyan)">Tailwind CSS</span>. Estou sempre aprendendo novas tecnologias para entregar soluções inovadoras. Curioso, colaborativo e movido por desafios que me fazem evoluir como profissional e pessoa.
      </p>
      <a
        href="/LeandroWilkeCV.pdf"
        download
        className="mb-4 inline-block px-8 py-3 rounded-xl bg-linear-to-r from-(--color-react-blue) via-(--color-react-cyan) to-(--color-react-purple) text-white font-bold shadow-lg hover:from-(--color-react-cyan) hover:to-(--color-react-purple) transition-all duration-300 text-lg mt-2"
      >
        <span className="inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3m-9 5.25V19a2.25 2.25 0 002.25 2.25h9A2.25 2.25 0 0021 19v-1.75M3 15.75V5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 5v10.75" />
          </svg>
          Baixar CV
        </span>
      </a>
    </section>
  );
}
