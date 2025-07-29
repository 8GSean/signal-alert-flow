import { CheckCircle, TrendingUp, TrendingDown } from "lucide-react";
import discordImage from "/lovable-uploads/735e0481-1683-46a4-b89e-134ada18a6ce.png";

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            The Solution
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            An Automation-Powered
            <span className="block text-success">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            This workflow automates the entire process from data fetching to analysis and notification. 
            It runs reliably every day, ensuring you never miss a crossover event for your chosen stocks.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-success/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Golden Cross Detection</h3>
                <p className="text-muted-foreground">
                  Automatically detects when the 60-day SMA crosses above the 120-day SMA, 
                  signaling potential bullish momentum.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-danger/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-danger/20 transition-colors">
                <TrendingDown className="h-6 w-6 text-danger" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Death Cross Alerts</h3>
                <p className="text-muted-foreground">
                  Instantly notifies when the 60-day SMA drops below the 120-day SMA, 
                  indicating potential bearish trends.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Never Miss a Signal</h3>
                <p className="text-muted-foreground">
                  Real-time notifications delivered directly to your Discord channel, 
                  keeping you informed 24/7.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-success rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50">
              <img 
                src={discordImage} 
                alt="Discord notification examples" 
                className="w-full rounded-xl shadow-lg mb-6"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2 text-foreground">Real-Time Alerts</h4>
                <p className="text-muted-foreground">
                  Clear, actionable notifications with all the details you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};