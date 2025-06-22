/*
  Appellation: home <module>
  Contrib: @FL03
*/
// imports
import * as React from 'react';
import Link from 'next/link';
// project
import { cn } from '@/lib/utils';
// components
import { Footer, FooterContent, FooterLeading, FooterTrailing } from '@/components/common/footer';

export const LandingFooter: React.FC<React.ComponentPropsWithRef<typeof Footer>> = ({ ref, className, flavor = 'secondary', ...props }) => {
  return (
    <Footer ref={ref} className={cn('', className)} flavor={flavor}>
      <div className="container mx-auto flex flex-row flex-nowrap px-4 py-2">
        <FooterLeading>
          <div className="font-semibold transition-all">
            Scattered-Systems, LLC
          </div>
          <div className="text-muted-foreground">
            Empowering the next generation of internet-based experiences.
          </div>
        </FooterLeading>
        <FooterContent className="justify-start">
          <div className="flex flex-col">
            <span className="w-full text-muted-foreground">
              © 2024 Scattered-Systems, LLC
            </span>
            <span className="text-muted-foreground">All Rights Reserved</span>
          </div>
        </FooterContent>
        <FooterTrailing className="">
          <Link
            href="https://github.com/FL03"
            className="w-full text-end justify-items-center"
          >
            Author
          </Link>
        </FooterTrailing>
      </div>
    </Footer>
  );
}