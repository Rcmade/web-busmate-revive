import Image from 'next/image';
import React from 'react'
import { ThemeButton } from '../buttons/ThemeButton';

const MainFooter = () => {
  return (
    <footer className="bg-card text-card-foreground py-12 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="relative w-12 h-12 mr-3">
              <Image
                src="/images/logoTransparent.png"
                alt="Busmate logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Busmate
            </span>
          </div>
          <div className="text-sm text-muted-foreground flex justify-between  items-center">
            <span>
              © {new Date().getFullYear()} Busmate. All rights reserved.
            </span>
            <ThemeButton />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter