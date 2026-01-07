export const colorThemes = {
  cosmic: {
    bg: "linear-gradient(135deg, #0a0a2a 0%, #1a1a3a 50%, #2a2a4a 100%)",
    primary: "#00d4ff",
    secondary: "#9d4edd",
    accent: "#ff2e63",
    text: "#ffffff",
    card: "rgba(255, 255, 255, 0.08)",
    glow: "rgba(0, 212, 255, 0.3)",
    gradient: "linear-gradient(90deg, #00d4ff, #9d4edd, #ff2e63)"
  },
  aurora: {
    bg: "linear-gradient(135deg, #0c1b33 0%, #1a2b4a 50%, #2a3b5a 100%)",
    primary: "#4cc9f0",
    secondary: "#4361ee",
    accent: "#f72585",
    text: "#f8f9fa",
    card: "rgba(255, 255, 255, 0.1)",
    glow: "rgba(76, 201, 240, 0.3)",
    gradient: "linear-gradient(90deg, #4cc9f0, #4361ee, #f72585)"
  },
  sunset: {
    bg: "linear-gradient(135deg, #2a044a 0%, #0b2e59 50%, #0d6759 100%)",
    primary: "#ff7e5f",
    secondary: "#feb47b",
    accent: "#86a8e7",
    text: "#ffffff",
    card: "rgba(255, 255, 255, 0.08)",
    glow: "rgba(255, 126, 95, 0.3)",
    gradient: "linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7)"
  },
  galaxy: {
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    primary: "#6a11cb",
    secondary: "#2575fc",
    accent: "#ff9a9e",
    text: "#ffffff",
    card: "rgba(255, 255, 255, 0.09)",
    glow: "rgba(106, 17, 203, 0.3)",
    gradient: "linear-gradient(90deg, #6a11cb, #2575fc, #ff9a9e)"
  }
};

export type ThemeName = keyof typeof colorThemes;