import React, { useRef, useEffect, useState } from "react";
import htmlIcon from "../assets/html-5.svg";
import cssIcon from "../assets/css3.svg";
import jsIcon from "../assets/javascript.svg";
import tsIcon from "../assets/typescript.svg";
import tailwindIcon from "../assets/tailwind.svg";
import gitIcon from "../assets/git.svg";
import reactIcon from "../assets/react.svg";

// Mapeamento dos ícones e cores das skills
const skillIcons = {
  HTML: { src: htmlIcon, color: "#E44D26" },
  CSS: { src: cssIcon, color: "#1172B8" },
  JavaScript: { src: jsIcon, color: "#f7df1e" },
  TypeScript: { src: tsIcon, color: "#007ACC" },
  "Tailwind CSS": { src: tailwindIcon, color: "#44a8b3" },
  Git: { src: gitIcon, color: "#EE513B" },
  "React JS": { src: reactIcon, color: "#00D8FF" },
};
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "TypeScript", percent: 80 },
  { name: "Tailwind CSS", percent: 80 },
  { name: "Git", percent: 75 },
  { name: "React JS", percent: 85 },
];

function useInView(ref: React.RefObject<HTMLDivElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const inView = useInView(sectionRef as React.RefObject<HTMLDivElement>);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Hook para animar o número da barra
  function useAnimatedNumber(target: number, trigger: boolean, duration = 1000) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      if (!trigger) {
        setValue(0);
        return;
      }
      let current = 0;
      const increment = target / (duration / 16);
      const animate = () => {
        current += increment;
        if (current >= target) {
          setValue(target);
        } else {
          setValue(Math.round(current));
          requestAnimationFrame(animate);
        }
      };
      animate();
    }, [trigger, target, duration]);
    return value;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center gap-" ref={sectionRef} id="skills">
      <h2 className="text-3xl font-bold section-title-shadow" data-aos-duration="1000" data-aos="fade-up">Skills</h2>
      <div className="w-full flex flex-col gap-6 items-center">
        {skills.map((skill, idx) => {
          const animatedPercent = useAnimatedNumber(skill.percent, inView, 1000);
          const icon = skillIcons[skill.name as keyof typeof skillIcons];
          return (
            <div key={skill.name} className="w-full max-w-4xl flex flex-col " data-aos="fade-right" data-aos-delay={idx * 100}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1">
                  {icon && (
                    <img src={icon.src} alt={skill.name + ' icon'} className="w-5 h-5" style={{minWidth: 20}} />
                  )}
                  <span className="font-medium text-sm text-(--color-react-text)">{skill.name}</span>
                </div>
                <span className="font-medium text-sm text-(--color-react-blue)">{animatedPercent}%</span>
              </div>
              <div className="w-full h-4 bg-(--color-react-dark) rounded-full overflow-hidden flex items-center">
                <div
                  className="h-4 rounded-full transition-all duration-1000"
                  style={{
                    width: inView ? `${skill.percent}%` : "0%",
                    background: icon ? icon.color : 'var(--color-react-blue)',
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
