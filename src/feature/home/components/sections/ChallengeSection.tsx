import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";

const ChallengeSection = () => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mt-32">
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
        >
          Challenges
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          The Challenge & Opportunity
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          College transportation faces several challenges that impact student
          experience and safety.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-transparent backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-6 text-destructive flex items-center">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center mr-3">
                  <span className="text-destructive">!</span>
                </div>
                Current Challenges
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Uncertainty in bus timings and potential delays
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Safety concerns during student transportation
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Inefficient resource allocation and scheduling
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Lack of communication during unexpected events
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-6 text-primary flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                The Opportunity
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Enhance safety by providing real-time bus tracking
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Optimize scheduling and resource allocation
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Improve student experience and satisfaction
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Collect data for continuous transportation improvement
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ChallengeSection;
