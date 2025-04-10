export const gradients = {
  // Brand gradients - STRICTLY using #F05A28 and #8E2DE2
  primary: "bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]", 
  secondary: "bg-gradient-to-r from-[#8E2DE2] to-[#1a1a1a]",
  accent: "bg-gradient-to-r from-[#F05A28] to-[#F05A28]/70",
  
  // Text gradients
  text: "bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] bg-clip-text text-transparent",
  textBrand: "bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] bg-clip-text text-transparent",
  
  // Background gradients
  darkPurple: "bg-gradient-to-br from-[#1a1a1a] to-[#2D1A45]", 
  orangePurple: "bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]",
  
  // Special effects
  cardGlow: "border border-gray-800 hover:border-transparent hover:bg-gradient-to-r hover:from-transparent hover:to-transparent hover:bg-origin-border hover:before:absolute hover:before:inset-0 hover:before:-z-10 hover:before:p-[1px] hover:before:bg-gradient-to-r hover:before:from-[#F05A28] hover:before:to-[#8E2DE2] hover:before:rounded-[inherit] hover:before:opacity-70",
  serviceBg: "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-r after:from-[#F05A28]/10 after:to-[#8E2DE2]/10 after:opacity-0 hover:after:opacity-100 after:transition-all after:-z-10",
  neonBorder: "before:absolute before:inset-0 before:rounded-[inherit] before:p-[0.5px] before:bg-gradient-to-r before:from-[#F05A28] before:to-[#8E2DE2] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 relative"
};

export const glowEffects = {
  button: "shadow-[0_0_1px_rgba(240,90,40,0.1)] hover:shadow-[0_0_20px_rgba(142,45,226,0.4)] transition-all duration-300 hover:-translate-y-0.5",
  buttonAlt: "shadow-[0_0_0px_rgba(142,45,226,0.1)] hover:shadow-[0_0_15px_rgba(142,45,226,0.3)] hover:text-shadow-sm transition-all duration-300 hover:-translate-y-0.5",
  card: "transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]",
  cardPulse: "hover:animate-pulse-slow",
  iconGlow: "relative after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_10px_rgba(142,45,226,0.4)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
  neonRing: "relative before:absolute before:inset-[-2px] before:rounded-full before:border before:border-[#F05A28] before:opacity-0 hover:before:opacity-30 before:blur-[2px] before:transition-opacity before:duration-300 after:absolute after:inset-[-4px] after:rounded-full after:border after:border-[#8E2DE2] after:opacity-0 hover:after:opacity-40 after:blur-[3px] after:transition-opacity after:duration-500",
  premium3D: "transition-all duration-500 hover:transform hover:translate-z-0 hover:translate-y-[-5px] hover:rotate-y-[-5deg] hover:rotate-x-[-5deg] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
};