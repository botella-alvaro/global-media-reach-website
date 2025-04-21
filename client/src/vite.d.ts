/// <reference types="vite/client" />

declare module '@/components/ui/button' {
  import * as React from 'react';
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
  }
  
  export const Button: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >;
  
  export const buttonVariants: (props: {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
  }) => string;
}

declare module '@/components/ui/toaster' {
  export const Toaster: React.FC<React.ComponentProps<any>>;
}

declare module '@/hooks/use-toast' {
  export const useToast: () => {
    toast: (message: string) => void;
    dismiss: (id?: string) => void;
    error: (message: string) => void;
    success: (message: string) => void;
  };
}

declare module '@/lib/utils' {
  type ClassValue = string | number | boolean | undefined | null | { [key: string]: any };
  export function cn(...inputs: ClassValue[]): string;
}

declare module "@/lib/gradients" {
  const gradients: {
    primary: string;
    primaryToBlueTech: string;
    orangeToViolet: string;
    violetToBlue: string;
  };
  export default gradients;
}

declare module "@/lib/animations" {
  const animations: {
    fadeIn: {
      initial: { opacity: number };
      animate: { opacity: number };
      transition: { duration: number };
    };
    slideInUp: {
      initial: { y: number; opacity: number };
      animate: { y: number; opacity: number };
      transition: { duration: number };
    };
    slideInLeft: {
      initial: { x: number; opacity: number };
      animate: { x: number; opacity: number };
      transition: { duration: number };
    };
    slideInRight: {
      initial: { x: number; opacity: number };
      animate: { x: number; opacity: number };
      transition: { duration: number };
    };
    scaleIn: {
      initial: { scale: number; opacity: number };
      animate: { scale: number; opacity: number };
      transition: { duration: number };
    };
    hoverScale: {
      scale: number;
      transition: { duration: number };
    };
    hoverLift: {
      y: number;
      transition: { duration: number };
    };
  };
  export default animations;
}