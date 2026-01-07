"use client";

import { useEffect, useMemo, useState } from "react";

// Use dynamic import to avoid SSR issues with particle libraries
const ParticlesBackground = ({ theme }: any) => {
  const [ParticlesComponent, setParticlesComponent] = useState<any>(null);

  useEffect(() => {
    // Dynamically import particles only on client side
    import("react-tsparticles").then(({ Particles }) => {
      setParticlesComponent(() => Particles);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme.primary,
        },
        links: {
          color: theme.secondary,
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (!ParticlesComponent) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <ParticlesComponent
        id="tsparticles"
        options={particlesOptions}
        init={async (engine: any) => {
          // Load the slim version to reduce bundle size
          const { loadSlim } = await import("tsparticles-slim");
          await loadSlim(engine);
        }}
      />
    </div>
  );
};

export default ParticlesBackground;