import techStackImage from "@/assets/tech-stack.jpg";
import techStackImageTest from "@/assets/tech-stack-test.png";

export const TechStackSection = () => {
  const technologies = [
    {
      name: "n8n",
      description: "Workflow Automation",
      category: "Orchestration"
    },
    {
      name: "PostgreSQL", 
      description: "Historical Data Storage",
      category: "Database"
    },
    {
      name: "JavaScript",
      description: "Custom Logic & Calculations", 
      category: "Runtime"
    },
    {
      name: "Alpha Vantage API",
      description: "Financial Data Source",
      category: "Data Provider"
    },
    {
      name: "Discord",
      description: "Real-time Notifications",
      category: "Communication"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technology &
            <span className="block text-primary">Tools Used</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A modern tech stack built for reliability, scalability, and real-time performance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50">
              <img 
                src={techStackImageTest} 
                alt="Technology stack visualization" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>

                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
