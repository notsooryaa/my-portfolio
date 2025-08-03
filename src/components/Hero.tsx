import { Mail, Terminal, Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="neon-glow ascii-art mb-8 hidden sm:block" style={{ color: 'var(--accent)' }}>
{`    ██████╗  ███████╗ ██╗   ██╗
    ██╔══██╗ ██╔════╝ ██║   ██║
    ██║  ██║ █████╗   ██║   ██║
    ██║  ██║ ██╔══╝   ╚██╗ ██╔╝
    ██████╔╝ ███████╗  ╚████╔╝ 
    ╚═════╝  ╚══════╝   ╚═══╝`}
        </div>
        <div className="retro-border p-8" style={{ backgroundColor: 'var(--card)' }}>
          <div className="flex items-center justify-center mb-4">
            <Terminal className="mr-2" size={24} style={{ color: 'var(--secondary)' }} />
            <span style={{ color: 'var(--secondary)' }}>INITIALIZING...</span>
          </div>
          <h1 className="mb-4 text-4xl md:text-6xl font-bold" style={{ color: 'var(--primary)' }}>SOORYAA V R</h1>
          <h2 className="mb-6 text-2xl font-semibold" style={{ color: 'var(--secondary)' }}>Full Stack Developer</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg" style={{ color: 'var(--muted-foreground)' }}>
            &gt; Crafting high-traffic mobile and web applications<br/>
            &gt; Specializing in React Native, Next.js, Node.js & RESTful APIs<br/>
            &gt; Delivering scalable end-to-end solutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="retro-button inline-flex items-center justify-center gap-2 h-12 px-8 py-3 font-bold rounded-md text-black uppercase tracking-wider" onClick={() => window.open('https://github.com/notsooryaa', '_blank')}>
              <Code className="mr-2" size={16} />
              VIEW PROJECTS
            </button>
            <button className="inline-flex items-center justify-center gap-2 h-12 px-8 py-3 font-bold rounded-md border-2 bg-transparent uppercase tracking-wider transition-all outline-none hover:bg-white/10" 
                    style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)' }} onClick={() => window.location.href = 'mailto:stunsooryaa@gmail.com'}>
              <Mail className="mr-2" size={16} />
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}