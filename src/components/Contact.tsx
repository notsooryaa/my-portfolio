import { Mail, GithubIcon, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-primary neon-glow mb-4">&gt; CONTACT.EXE</h2>
        </div>
        
        <div className="retro-border p-8 bg-card">
          <h3 className="text-secondary mb-6">READY TO COLLABORATE?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <a href="mailto:stunsooryaa@gmail.com" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Mail size={20} />
              stunsooryaa@gmail.com
            </a>
            <a href="https://github.com/sooryaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
              <GithubIcon size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/notsooryaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          
          <a href="mailto:stunsooryaa@gmail.com" className="inline-flex items-center justify-center gap-2 h-10 px-6 py-2.5 font-medium rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition-all outline-none focus:ring-2 focus:ring-cyan-400/50">
            <Mail className="mr-2" size={16} />
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}