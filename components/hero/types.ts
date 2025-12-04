export interface ThemeType {
  bg: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  card: string;
  glow: string;
  gradient: string;
}

export interface EffectProps {
  theme: ThemeType;
  scrollProgress?: number;
}