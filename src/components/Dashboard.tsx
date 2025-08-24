import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Package, Truck, Factory, Users } from "lucide-react";
import dataFlowBg from "@/assets/data-flow-bg.jpg";

const metrics = [
  {
    title: "Supply Chain Efficiency",
    value: "94.2%",
    change: "+5.2%",
    trend: "up",
    icon: TrendingUp,
    color: "success-emerald"
  },
  {
    title: "Cost Optimization",
    value: "$2.4M",
    change: "-18.5%",
    trend: "down",
    icon: TrendingDown,
    color: "primary"
  },
  {
    title: "Predictive Accuracy",
    value: "97.8%",
    change: "+2.1%", 
    trend: "up",
    icon: Target,
    color: "data-blue"
  },
  {
    title: "Risk Alerts",
    value: "3",
    change: "-45%",
    trend: "down",
    icon: AlertTriangle,
    color: "warning-amber"
  }
];

const alerts = [
  {
    type: "warning",
    title: "Supplier Delay Risk",
    message: "Component X123 shipment may be delayed by 2 days",
    time: "5 min ago",
    action: "Auto-routing initiated"
  },
  {
    type: "success", 
    title: "Demand Spike Detected",
    message: "Product Y456 demand increased 45% - inventory adjusted",
    time: "12 min ago",
    action: "Purchase order generated"
  },
  {
    type: "info",
    title: "Route Optimized",
    message: "Delivery route efficiency improved by 12%",
    time: "25 min ago", 
    action: "Drivers notified"
  }
];

const kpiCards = [
  {
    title: "Active Shipments",
    value: "1,247",
    icon: Truck,
    trend: "+8.2%"
  },
  {
    title: "Inventory Items",
    value: "15.6K",
    icon: Package,
    trend: "-2.1%"
  },
  {
    title: "Manufacturing Units",
    value: "23",
    icon: Factory,
    trend: "+12.5%"
  },
  {
    title: "Team Members",
    value: "456",
    icon: Users,
    trend: "+5.7%"
  }
];

import { Target } from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
        <img src={dataFlowBg} alt="Data Flow" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Live Dashboard Preview
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real-Time Supply Chain Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of AI-driven insights with our comprehensive dashboard 
            providing 360° visibility into your supply chain operations.
          </p>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isPositive = metric.trend === "up";
            return (
              <Card key={index} className="card-glow p-6 border-border/50">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-${metric.color}/20 border border-${metric.color}/30 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 text-${metric.color}`} />
                  </div>
                  <Badge 
                    variant={isPositive ? "default" : "secondary"}
                    className={isPositive ? "bg-success-emerald/20 text-success-emerald border-success-emerald/30" : "bg-primary/20 text-primary border-primary/30"}
                  >
                    {metric.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
              </Card>
            );
          })}
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* KPI Cards */}
          <div className="lg:col-span-2">
            <Card className="card-glow p-6 border-border/50">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Key Performance Indicators
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {kpiCards.map((kpi, index) => {
                  const Icon = kpi.icon;
                  return (
                    <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="w-6 h-6 text-muted-foreground" />
                        <Badge variant="outline" className="text-xs">
                          {kpi.trend}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold mb-1">{kpi.value}</div>
                      <div className="text-sm text-muted-foreground">{kpi.title}</div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Real-time Alerts */}
          <div>
            <Card className="card-glow p-6 border-border/50">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning-amber" />
                Real-time Alerts
              </h3>
              <div className="space-y-4">
                {alerts.map((alert, index) => {
                  const alertColors = {
                    warning: "warning-amber",
                    success: "success-emerald",
                    info: "primary"
                  };
                  const color = alertColors[alert.type as keyof typeof alertColors];
                  
                  return (
                    <div key={index} className="p-4 rounded-lg bg-secondary/20 border border-border/30">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-${color} mt-2 flex-shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium mb-1">{alert.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                            {alert.message}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                            <Badge variant="outline" className="text-xs">
                              {alert.action}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

import { BarChart3 } from "lucide-react";