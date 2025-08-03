import { Github, Linkedin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary neon-glow mb-4">&gt; ABOUT.EXE</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="retro-border p-8 bg-card">
            <h3 className="text-secondary mb-6">SYSTEM.INFO</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>&gt; Name: Sooryaa V R</div>
              <div>&gt; Location: Chennai, India</div>
              <div>&gt; Experience: 1+ Years</div>
              <div>&gt; Status: Full Stack Developer at Barberaa</div>
              <div>&gt; Education: B.Tech IT, Sri Sairam Engineering College</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-white leading-relaxed">
              Hi there! I'm a Full Stack Developer who loves building mobile and web apps that people 
              actually enjoy using. I work with React Native, Next.js, and Node.js to create seamless 
              digital experiences from start to finish.
            </p>
            <p className="text-white leading-relaxed">
              Currently at Barberaa startup, I'm building our mobile app and web platform from the ground up. 
              When I'm not coding, I'm probably exploring new tech or hitting the gym to destroy my body 💪🏻.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/sooryaa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-8 px-3 py-1.5 text-sm font-medium rounded-md border border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400/10 transition-all outline-none focus:ring-2 focus:ring-cyan-400/50">
                <Github className="mr-2" size={16} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/notsooryaa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-8 px-3 py-1.5 text-sm font-medium rounded-md border border-purple-400 bg-transparent text-purple-400 hover:bg-purple-400/10 transition-all outline-none focus:ring-2 focus:ring-purple-400/50">
                <Linkedin className="mr-2" size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}