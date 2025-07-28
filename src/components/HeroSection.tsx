import { Button } from "@/components/ui/button";
import { ArrowDown, Github, ExternalLink } from "lucide-react";
import workflowImage from "@/assets/n8n-workflow.jpg";
import discordImage from "@/assets/discord-alert.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            Live Trading Automation
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Automated Trading!
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Signals, Straight to
            </span>
            <span className="block text-primary">Your Discord</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            A showcase of an n8n workflow that monitors stock tickers, calculates moving averages, 
            and sends real-time "Golden Cross" and "Death Cross" alerts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('how-it-works')}
              className="group"
            >
              See How It Works
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group"
            >
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View on GitHub
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Right Visual */}
        <div className="relative animate-slide-up">
          <div className="grid gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <img 
                  src={workflowImage} 
                  alt="n8n workflow canvas" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">n8n Workflow Canvas</p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-success rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <img 
                  src={discordImage} 
                  alt="Discord alert notification" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Live Discord Alert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
