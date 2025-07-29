import { Button } from "@/components/ui/button";
import { Github, FileText, Copy, ExternalLink } from "lucide-react";

export const ExploreSection = () => {
  return (
    <section id="explore" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get the Code,
            <span className="block text-primary">Run it Yourself</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the complete workflow, understand the implementation, 
            and adapt it for your own trading automation needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 group text-center animate-scale-in">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <Github className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
              View on GitHub
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Access the complete repository with the workflow.json file, 
              setup instructions, and detailed documentation.
            </p>
            <Button variant="outline" className="w-full group" asChild>
              <a 
                href="https://github.com/8GSean/signal-alert-flow" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Browse Repository
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 group text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-success rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-success transition-colors">
              Read the Explainer
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Deep dive into the technical implementation with a comprehensive 
              blog post explaining each component in detail.
            </p>
            <Button variant="outline" className="w-full group">
              <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Technical Guide
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 group text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-all duration-300">
              <Copy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
              Copy Workflow
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Import the workflow directly into your n8n instance and 
              start monitoring your own stock picks immediately.
            </p>
            <Button variant="outline" className="w-full group" asChild>
              <a 
                href="/Project_4.json" 
                download="Project_4.json"
              >
                <Copy className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Workflow
              </a>
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <span>Open source • MIT License • Built with</span>
            <span className="text-primary font-semibold">n8n</span>
          </div>
        </div>
      </div>
    </section>
  );
};