import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock, Shield } from "lucide-react";
import React from "react";

const BenefitsSection = () => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mt-32">
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
        >
          Benefits
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Key Benefits for the College
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Busmate offers numerous advantages that make it a game-changer for
          college transportation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                Enhanced Safety
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Immediate access to real-time bus locations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Improved emergency response capabilities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Better accountability for transportation services
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                Operational Efficiency
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Reduces waiting times for students
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Optimizes bus scheduling and routes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Minimizes resource wastage and idle time
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                Data-Driven Improvements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Collect valuable transportation data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Optimize routes based on student location data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Continuous improvement through analytics
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BenefitsSection;
