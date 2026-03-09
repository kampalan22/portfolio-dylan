import { Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'GigHub',
      description: 'Full-stack local service provider platform connecting users with skilled professionals for various services.',
      techStack: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Cloud Functions'],
      github: '#',
      demo: '#',
      featured: true,
      gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by LLMs with context-aware responses and multi-turn conversations.',
      techStack: ['Python', 'OpenAI API', 'FastAPI', 'React', 'WebSocket'],
      github: '#',
      demo: '#',
      featured: false,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
    },
    {
      title: 'Security Audit Tool',
      description: 'Automated vulnerability scanner for web applications with detailed reporting and remediation suggestions.',
      techStack: ['Python', 'Flask', 'SQLite', 'Docker', 'OWASP'],
      github: '#',
      demo: '#',
      featured: false,
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time analytics platform with interactive visualizations and customizable metrics tracking.',
      techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
      github: '#',
      demo: '#',
      featured: false,
      gradient: 'from-slate-600 via-gray-700 to-zinc-700',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building innovative solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${project.featured ? 'lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                <div className="relative z-10">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                      Flagship Project
                    </span>
                  )}

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className={`transition-all duration-300 ${hoveredProject === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg border border-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
