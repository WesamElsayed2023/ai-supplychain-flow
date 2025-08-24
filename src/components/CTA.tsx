import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, MessageSquare, Play } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main CTA */}
      <Card className="card-glow p-12 text-center border-border/50 mb-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 data-flow-gradient opacity-10" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block text-primary mt-2">Supply Chain?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join leading companies already leveraging AI to optimize their supply chains. 
            Get started with a personalized demo and see immediate impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glow" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Schedule Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl">
              <Play className="w-5 h-5" />
              Watch Demo Video
            </Button>
          </div>
        </div>
      </Card>

      {/* Contact Options */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="card-glow p-6 text-center border-border/50">
          <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Book a Demo</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            See the platform in action with a personalized 30-minute demo
          </p>
          <Button variant="outline" className="w-full">
            Schedule Now
          </Button>
        </Card>

        <Card className="card-glow p-6 text-center border-border/50">
          <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Talk to Sales</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Discuss your specific requirements with our supply chain experts
          </p>
          <Button variant="outline" className="w-full">
            Contact Sales
          </Button>
        </Card>

        <Card className="card-glow p-6 text-center border-border/50">
          <div className="w-12 h-12 rounded-full bg-data-blue/20 border border-data-blue/30 flex items-center justify-center mx-auto mb-4">
            <Play className="w-6 h-6 text-data-blue" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Free Trial</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Start with a 14-day free trial of our core analytics features
          </p>
          <Button variant="outline" className="w-full">
            Start Free Trial
          </Button>
        </Card>
      </div>
    </section>
  );
};