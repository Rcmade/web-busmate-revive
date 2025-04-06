import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React from 'react'

const HeroSection = () => {
  return (
    <header className="relative bg-background border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
            >
              College Transportation Enhancement
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Busmate
              </span>
              <span className="block mt-2">Modern Bus Tracking</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A smart mobile app to track the college bus in real time for
              improved safety and convenience.
            </p>
            {/* <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 group">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                >
                  Learn More
                </Button>
              </div> */}
          </div>
          <div
            // initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logoTransparent.png"
                  alt="busmate logo"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection