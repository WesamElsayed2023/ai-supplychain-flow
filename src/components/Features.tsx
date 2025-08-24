import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Brain, Activity, Route, BarChart3, Shield, Zap, Target } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Data & Infrastructure",
    description: "Build a robust data infrastructure as your single source of truth",
    icon: Database,
    color: "data-blue",
    features: [
      "ERP, WMS, TMS, CRM Integration",
      "IoT Sensor Networks",
      "Real-time Data Lake",
      "Data Governance Framework"
    ]
  },
  {
    phase: "Phase 2", 
    title: "AI Model Building",
    description: "Develop core AI algorithms for real-time insights and predictions",
    icon: Brain,
    color: "primary",
    features: [
      "Predictive Demand Forecasting",
      "Inventory Optimization",
      "Anomaly Detection",
      "Route Optimization"
    ]
  },
  {
    phase: "Phase 3",
    title: "Integration & Deployment", 
    description: "Seamless platform integration with automated decision-making",
    icon: Activity,
    color: "insight-cyan",
    features: [
      "Interactive Dashboards",
      "Automated Action Triggers",
      "Continuous Feedback Loops",
      "Pilot Program Launch"
    ]
  },
  {
    phase: "Phase 4",
    title: "Training & Optimization",
    description: "Ensure long-term success through continuous improvement",
    icon: Target,
    color: "accent",
    features: [
      "Staff Training & Upskilling",
      "Performance Monitoring",
      "Iterative Development",
      "ROI Optimization"
    ]
  }
];

const capabilities = [
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast demand patterns with 95% accuracy using advanced ML models"
  },
  {
    icon: Route,
    title: "Smart Routing",
    description: "Optimize delivery routes in real-time considering traffic, weather, and constraints"
  },
  {
    icon: Shield,
    title: "Risk Management", 
    description: "Proactive anomaly detection to prevent disruptions before they occur"
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automated responses and decision-making for 24/7 supply chain optimization"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
          Implementation Roadmap
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Four-Phase Implementation
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A systematic approach to transforming your supply chain into an intelligent, 
          autonomous ecosystem powered by cutting-edge AI technology.
        </p>
      </div>

      {/* Implementation Phases */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <Card key={index} className="card-glow p-6 border-border/50 hover:border-primary/30 transition-all duration-500">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">{phase.phase}</Badge>
                <div className={`w-12 h-12 rounded-lg bg-${phase.color}/20 border border-${phase.color}/30 flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${phase.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {phase.description}
              </p>
              
              <ul className="space-y-2">
                {phase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      {/* Core Capabilities */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
          Core Capabilities
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Intelligent Supply Chain Features
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <Card key={index} className="card-glow p-6 text-center border-border/50 hover:border-primary/30">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{capability.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};