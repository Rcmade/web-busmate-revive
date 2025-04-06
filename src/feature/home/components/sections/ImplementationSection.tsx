import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const ImplementationSection = () => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mt-32">
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
        >
          Implementation
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Required Resources & Implementation Plan
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          A strategic approach to implementing Busmate in your college
          transportation system.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full overflow-hidden">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-8">Technical Resources</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl shrink-0 mt-0.5 shadow-sm">
                    <div className="h-5 w-5 text-primary font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      GPS Location Access
                    </h4>
                    <p className="text-muted-foreground">
                      Permission to use the bus&apos;s GPS module with our API
                      endpoint for precise tracking.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl shrink-0 mt-0.5 shadow-sm">
                    <div className="h-5 w-5 text-primary font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Integration Infrastructure
                    </h4>
                    <p className="text-muted-foreground">
                      Align with the college&apos;s IT framework if required.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl shrink-0 mt-0.5 shadow-sm">
                    <div className="h-5 w-5 text-primary font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Administrative Access
                    </h4>
                    <p className="text-muted-foreground">
                      Permissions to verify student registrations and manage the
                      system.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full overflow-hidden">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-8">Implementation Phases</h3>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
                <div className="space-y-8 relative">
                  <div className="pl-16 relative">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                      1
                    </div>
                    <h4 className="font-bold text-lg mb-2">Planning & Setup</h4>
                    <p className="text-muted-foreground">
                      Initial configuration and system setup with IT department.
                    </p>
                  </div>
                  <div className="pl-16 relative">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                      2
                    </div>
                    <h4 className="font-bold text-lg mb-2">Pilot Phase</h4>
                    <p className="text-muted-foreground">
                      Deploy on a limited number of buses/routes for initial
                      testing.
                    </p>
                  </div>
                  <div className="pl-16 relative">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                      3
                    </div>
                    <h4 className="font-bold text-lg mb-2">Evaluation</h4>
                    <p className="text-muted-foreground">
                      Gather feedback and make necessary adjustments.
                    </p>
                  </div>
                  <div className="pl-16 relative">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                      4
                    </div>
                    <h4 className="font-bold text-lg mb-2">Full Roll-Out</h4>
                    <p className="text-muted-foreground">
                      Expand the system college-wide after successful
                      validation.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ImplementationSection;
