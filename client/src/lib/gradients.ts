export const gradients = {
  primary: "bg-gradient-to-r from-[#2D1A45] to-[#0B6EFD]",
  secondary: "bg-gradient-to-r from-[#FF6B2B] to-[#0B6EFD]",
  accent: "bg-gradient-to-r from-[#FF6B2B] to-[#FF8B4B]",
  text: "bg-gradient-to-r from-[#FF6B2B] to-[#7928CA] bg-clip-text text-transparent",
  textBrand: "bg-gradient-to-br from-[#FF6B2B] via-[#FF8B4B] to-[#7928CA] bg-clip-text text-transparent",
  purpleBlue: "bg-gradient-to-br from-[#3D2A55] to-[#0B6EFD]",
  orangeBlue: "bg-gradient-to-tr from-[#FF6B2B] to-[#0B6EFD]",
  cardGlow: "border border-gray-800 hover:border-transparent hover:bg-gradient-to-r hover:from-transparent hover:to-transparent hover:bg-origin-border hover:before:absolute hover:before:inset-0 hover:before:-z-10 hover:before:p-[1px] hover:before:bg-gradient-to-r hover:before:from-[#FF6B2B] hover:before:to-[#0B6EFD] hover:before:rounded-[inherit]",
  serviceBg: "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-b after:from-[#2D1A45]/20 after:via-transparent after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-all after:-z-10"
};

export const glowEffects = {
  button: "shadow-[0_0_1px_rgba(255,107,43,0.1)] hover:shadow-[0_0_20px_rgba(255,107,43,0.6)] transition-all duration-300 hover:-translate-y-0.5",
  card: "transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]",
  cardPulse: "hover:animate-pulse-slow",
  iconGlow: "relative after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_10px_rgba(59,142,253,0.5)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
};
