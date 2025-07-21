import { Clock, RotateCcw, Target } from "lucide-react";

export const ChallengeSection = () => {
  return (
    <section id="challenge" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The Manual Grind of 
            <span className="block text-primary">Technical Analysis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Manually tracking stock charts for key technical indicators like SMA crossovers is time-consuming, 
            repetitive, and prone to error. Missing a critical signal can mean missing a significant market opportunity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-card rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-glow transition-all duration-300">
                <Clock className="h-10 w-10 text-danger" />
              </div>
              <div className="absolute inset-0 bg-danger/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Time Consuming</h3>
            <p className="text-muted-foreground">
              Hours spent manually checking charts and calculating moving averages across multiple stocks
            </p>
          </div>
          
          <div className="text-center group animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-card rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-glow transition-all duration-300">
                <RotateCcw className="h-10 w-10 text-danger" />
              </div>
              <div className="absolute inset-0 bg-danger/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Repetitive Task</h3>
            <p className="text-muted-foreground">
              Same analysis process repeated daily across your entire watchlist
            </p>
          </div>
          
          <div className="text-center group animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-card rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-glow transition-all duration-300">
                <Target className="h-10 w-10 text-danger" />
              </div>
              <div className="absolute inset-0 bg-danger/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Easy to Miss</h3>
            <p className="text-muted-foreground">
              Critical crossover signals can be missed when you're not actively monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};