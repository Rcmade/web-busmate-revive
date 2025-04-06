import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Shield } from 'lucide-react';
import React from 'react'

const OverviewSection = () => {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto">
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
        >
          Overview
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          What is Busmate?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Busmate is a mobile application designed specifically for college bus
          tracking, ensuring students can view live bus locations and routes
          with a secure and easy-to-use registration process.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div
        >
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="pt-8 pb-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enhanced Safety</h3>
                <p className="text-muted-foreground">
                  Real-time tracking improves emergency response and ensures
                  student safety during transportation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
        >
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="pt-8 pb-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Time Efficiency</h3>
                <p className="text-muted-foreground">
                  Reduces waiting times and uncertainty by providing accurate
                  bus arrival information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
        >
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="pt-8 pb-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Better Planning</h3>
                <p className="text-muted-foreground">
                  Students can plan their day better with reliable
                  transportation information at their fingertips.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default OverviewSection