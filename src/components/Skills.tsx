import { Code, Terminal, Zap } from 'lucide-react';
import { SkillCard } from './SkillCard';

const skillsData = [
  {
    category: "FRONTEND",
    icon: <Code className="text-primary" size={24} />,
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"]
  },
  {
    category: "BACKEND",
    icon: <Terminal className="text-accent" size={24} />,
    skills: ["Node.js", "Express", "MySQL", "RESTful APIs", "Python", "Java" , "Spring Boot"]
  },
  {
    category: "TOOLS & OTHERS",
    icon: <Zap className="text-accent" size={24} />,
    skills: ["Git", "AWS", "CI/CD", "Agile", "Cross-Platform"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary neon-glow mb-4">&gt; SKILLS.EXE</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <SkillCard
              key={index}
              category={skillGroup.category}
              icon={skillGroup.icon}
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}