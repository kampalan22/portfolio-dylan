import { Brain, Code, Shield, Database, Cpu, Award, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Brain,
      title: 'Large Language Models',
      description: 'Advanced LLM integration and prompt engineering',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Code,
      title: 'Python',
      description: 'Backend development, data processing, and automation',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'React',
      description: 'Modern web applications with React and TypeScript',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security best practices and vulnerability assessment',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'SQL, NoSQL, and cloud database solutions',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Cpu,
      title: 'System Architecture',
      description: 'Scalable full-stack application design',
      color: 'from-slate-600 to-slate-800',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI Engineer</h3>
                  <p className="text-blue-100">for Developers Associate</p>
                </div>
              </div>
              <p className="text-blue-50 leading-relaxed">
                Certified in building and deploying AI-powered applications with modern frameworks and best practices.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">NSBE Member</h3>
                <p className="text-gray-300">National Society of Black Engineers</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Active member committed to increasing the number of culturally responsible Black engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
