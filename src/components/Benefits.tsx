import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Clock, Shield, Zap, Target } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Reduction",
    value: "40%",
    description: "Average reduction in operational costs through intelligent optimization and waste elimination",
    color: "success-emerald"
  },
  {
    icon: Clock,
    title: "Faster Delivery",
    value: "65%",
    description: "Improvement in delivery times with AI-powered route optimization and demand forecasting",
    color: "primary"
  },
  {
    icon: TrendingUp,
    title: "Inventory Turnover",
    value: "55%",
    description: "Increase in inventory turnover rate through predictive analytics and smart replenishment",
    color: "data-blue"
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    value: "80%",
    description: "Reduction in supply chain disruptions through proactive anomaly detection",
    color: "warning-amber"
  },
  {
    icon: Zap,
    title: "Process Automation",
    value: "90%",
    description: "Of routine decisions automated, freeing up teams for strategic initiatives",
    color: "insight-cyan"
  },
  {
    icon: Target,
    title: "Forecast Accuracy",
    value: "97%",
    description: "Demand forecasting accuracy with advanced machine learning models",
    color: "accent"
  }
];

const testimonials = [
  {
    quote: "The AI insights transformed our supply chain efficiency by 40% in just 6 months. The ROI was immediate and substantial.",
    author: "Sarah Chen",
    role: "Supply Chain Director",
    company: "Global Manufacturing Corp"
  },
  {
    quote: "Real-time anomaly detection prevented 15 major disruptions last quarter. This platform is a game-changer.",
    author: "Michael Rodriguez", 
    role: "Operations Manager",
    company: "TechFlow Logistics"
  },
  {
    quote: "The predictive analytics helped us reduce inventory costs by $2.8M while improving service levels. Incredible results.",
    author: "Emma Thompson",
    role: "VP of Operations",
    company: "Retail Solutions Inc"
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
          Proven Results
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Measurable Business Impact
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI-powered supply chain platform delivers quantifiable results across 
          all key performance indicators, driving sustainable growth and competitive advantage.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Card key={index} className="card-glow p-8 text-center border-border/50 hover:border-primary/30">
              <div className={`w-16 h-16 rounded-full bg-${benefit.color}/20 border border-${benefit.color}/30 flex items-center justify-center mx-auto mb-6`}>
                <Icon className={`w-8 h-8 text-${benefit.color}`} />
              </div>
              
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                {benefit.value}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Testimonials */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
          Client Success Stories
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="card-glow p-6 border-border/50">
            <div className="mb-6">
              <div className="text-primary text-4xl mb-4">"</div>
              <p className="text-muted-foreground leading-relaxed italic">
                {testimonial.quote}
              </p>
            </div>
            
            <div className="border-t border-border/30 pt-4">
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              <div className="text-sm text-primary">{testimonial.company}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};