// Brand Colors
export const COLORS = {
  primary: '#061C47',
  primaryHover: '#0a2555',
  footer: '#0B1F3F',
  background: '#E8EBF0',
  text: '#212121',
  textGray: '#6B7280',
} as const;

// Spacing
export const SPACING = {
  section: 'mt-16 md:mt-24',
  sectionSmall: 'mt-8 md:mt-12',
  cardPadding: 'p-8',
  containerPadding: 'px-4',
} as const;

// Border Radius
export const RADIUS = {
  card: 'rounded-3xl',
  button: 'rounded-full',
  container: 'rounded-2xl',
  small: 'rounded-xl',
} as const;

// Typography
export const TYPOGRAPHY = {
  h1: 'text-3xl md:text-5xl lg:text-6xl font-bold',
  h2: 'text-2xl md:text-4xl lg:text-5xl font-bold',
  h3: 'text-xl md:text-2xl font-bold',
  body: 'text-base md:text-lg',
  small: 'text-sm',
} as const;

// Background Opacity
export const BACKGROUNDS = {
  glassLight: 'bg-white/40 backdrop-blur-sm',
  glassMedium: 'bg-white/60 backdrop-blur-sm',
  glassDark: 'bg-white/80 backdrop-blur-sm',
} as const;
