const experienceData = [
  {
    title: "Full Stack Developer",
    description: "Leading development of flagship mobile app using React Native for iOS and Android. Built customer-facing web portal with Next.js and salon management dashboard. Designed unified backend with Node.js, Express, and MySQL.",
    tech: ["React Native", "Next.js", "Node.js", "Express", "MongoDB", "RESTful APIs"],
    status: "ACTIVE" as const,
    company: "Barberaa (Startup) - Chennai",
    period: "Oct 2024 – Present"
  },
  {
    title: "Data Research Analyst",
    description: "Automated data processing workflows using Python, reducing manual tasks. Validated and cleansed large datasets to ensure accuracy and compliance. Documented workflows and collaborated with stakeholders.",
    tech: ["Python", "Data Processing", "Automation", "Workflow Optimization", "Data Analysis"],
    status: "COMPLETED" as const,
    company: "Merit Data And Code - Chennai",
    period: "Nov 2023 – May 2024"
  },
  {
    title: "Full Stack Developer Intern",
    description: "Developed Hospital Management System modules with React.js and Spring Boot. Designed RESTful APIs for inventory management and integrated front-end components. Collaborated with QA and UX teams.",
    tech: ["React.js", "Spring Boot", "Java", "RESTful APIs", "Database Integration"],
    status: "COMPLETED" as const,
    company: "Virtusa - Chennai",
    period: "May – Aug 2023"
  }
];

export function Projects() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary neon-glow mb-4">&gt; EXPERIENCE.EXE</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {experienceData.map((experience, index) => (
            <div key={index} className="bg-gray-900 text-white border border-gray-700 rounded-xl hover:bg-gray-800/80 transition-all duration-300 group flex flex-col gap-6">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-purple-400 leading-none font-semibold">{experience.title}</h4>
                  <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap ${
                    experience.status === 'ACTIVE' ? 'bg-green-500 text-white border-transparent' : 'bg-blue-500 text-white border-transparent'
                  }`}>
                    {experience.status}
                  </span>
                </div>
                <div className="text-cyan-400 text-sm font-medium mb-2">{experience.company}</div>
                <div className="text-gray-400 text-sm mb-3">{experience.period}</div>
                <p className="text-gray-400 text-sm">
                  {experience.description}
                </p>
              </div>
              
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.tech.map((technology) => (
                    <span key={technology} className="inline-flex items-center justify-center rounded-md border border-cyan-400 text-cyan-400 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}