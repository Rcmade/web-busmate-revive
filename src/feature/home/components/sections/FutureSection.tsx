import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import React from 'react'

const FutureSection = () => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mt-32">
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
        >
          Future
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Future Vision & Expansion
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Busmate is designed to evolve with your college&apos;s needs, offering
          continuous innovation and expansion opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <Card className="border border-border/40 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full overflow-hidden">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-4">Enhanced Routing</h3>
              <p className="text-muted-foreground mb-6">
                Use real-time student data to improve bus routing efficiency and
                reduce travel times.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Dynamic route optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Traffic-aware routing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Demand-based scheduling
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border border-border/40 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full overflow-hidden">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-4">Additional Features</h3>
              <p className="text-muted-foreground mb-6">
                Expand functionality to provide a more comprehensive
                transportation management system.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Push notifications for bus arrivals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Attendance tracking integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    In-app communication system
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border border-border/40 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full overflow-hidden">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-4">Long-Term Goals</h3>
              <p className="text-muted-foreground mb-6">
                Continual innovation to maintain a modern, efficient, and safe
                transportation system.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    AI-powered predictive analytics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Integration with campus management systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Expanded safety and emergency features
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FutureSection