import { 
  Clock, 
  Download, 
  Database, 
  Calculator, 
  Search, 
  MessageSquare,
  ArrowRight,
  Filter,
  CalendarCheck
} from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Clock,
      title: "Scheduler",
      description: "Kicks off daily during the US workweek (Monday-Friday).",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      number: "02", 
      icon: Database,
      title: "Create Stock Filter",
      description: "Selects NVIDIA (NVDA): Technology Sector, JPMorgan Chase & Co. (JPM): Financial Sector, The Procter & Gamble Company (PG): Consumer Staples Sector, SPDR S&P 500 ETF Trust (SPY): Broad Market ETF.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      number: "03",
      icon: Filter,
      title: "Apply Stock Filter",
      description: "Applies the selected stock filter criteria to the watchlist and prepares the filtered stocks for further analysis.  This is exectuted sequentially and not in parallel.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
      {
      number: "04",
      icon: Download,
      title: "Fetch the Windowed Data",
      description: "Fetches the windowed data from AlphaVantage API: 'Open', 'High', 'Low', 'Close', 'Volume.' Extracts a window of 100 days.  It is actually the bulk data, it is not yet filtered on a specific day.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      number: "05",
      icon: CalendarCheck,
      title: "Extract Daily Data",
      description: "Gives the data for a specific day, which is the last day in the window and saves it in the database.  Real time data is restricted, so this is the best way to obtain it.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      number: "06",
      icon: Calculator,
      title: "Calculate", 
      description: "Queries the historical data and uses a custom JavaScript code block to compute the 60-day and 120-day Simple Moving Averages (SMAs) for today and yesterday.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      number: "07",
      icon: Search,
      title: "Analyze",
      description: "Compares the SMAs to detect if a \"Golden Cross\" (60-day SMA moves above 120-day) or a \"Death Cross\" (60-day SMA moves below 120-day) has occurred.",
      color: "text-primary", 
      bgColor: "bg-primary/10"
    },
    {
      number: "08",
      icon: MessageSquare,
      title: "Notify",
      description: "Formats a clear, concise message and instantly sends it to a designated Discord channel via a webhook.",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Behind the Scenes:
            <span className="block text-primary">A 6-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simplified breakdown of how the automation workflow transforms raw stock data 
            into actionable trading signals.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative group mb-4">
                      <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-glow transition-all duration-300`}>
                        <step.icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">{step.number}</div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-muted-foreground mx-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Step Details */}
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="bg-gradient-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Mobile number and icon */}
                <div className="lg:hidden flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center`}>
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground">{step.number}</div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                </div>
                
                {/* Desktop title (hidden on mobile since it's shown above) */}
                <h3 className="hidden lg:block text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
