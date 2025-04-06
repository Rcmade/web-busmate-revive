import { Badge } from '@/components/ui/badge';
import React from 'react'

const CallToActionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div>
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
          >
            Get Started
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to Transform Your College Transportation?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Request permission to implement Busmate in your college
            transportation system and experience the benefits of increased
            safety and operational efficiency.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 group">
                Request Implementation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Schedule a Demo
              </Button>
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection