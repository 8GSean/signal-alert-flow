import { Github, Linkedin, Globe, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-card border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold mb-2">
              Created by <span className="text-primary">Talia, Yoav, Orad</span>
            </p>
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Built with <Heart className="h-4 w-4 text-danger" /> and automation in mind
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
            >
              <Globe className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            A project built with{" "}
            <a 
              href="https://n8n.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              n8n
            </a>
            {" "}• Showcasing workflow automation for financial markets
          </p>
        </div>
      </div>
    </footer>
  );
};
