import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 hero-glow">
        <img 
          src={heroImage} 
          alt="AI Supply Chain Dashboard" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-insight-cyan rounded-full pulse-glow animation-delay-1000" />
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-accent rounded-full pulse-glow animation-delay-2000" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 float-animation">
          <Brain className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Powered by Advanced AI</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
          Seamless AI Supply Chain
          <span className="block mt-2 text-primary">Insights</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Transform your supply chain into an autonomous, self-optimizing ecosystem with real-time AI insights, 
          predictive analytics, and intelligent automation.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success-emerald" />
            <span className="text-lg font-semibold">40% Cost Reduction</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-warning-amber" />
            <span className="text-lg font-semibold">Real-time Analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">Predictive AI</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="glow" size="xl" className="group">
            Get Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero" size="xl">
            Watch Overview
          </Button>
        </div>
      </div>
    </section>
  );
};