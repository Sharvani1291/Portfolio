import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        },
        background: {
          color: { value: "#f5f5dc" }, // Beige background
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: false,
            },
          },
          color: {
            value: "#8c4863",
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: 0.8,
            straight: true,
            outModes: {
              default: "out",
            },
          },
          opacity: {
            value: 0.6,
          },
        },
        emitters: {
          direction: "bottom",
          rate: {
            quantity: 5,
            delay: 0.5,
          },
          size: {
            width: 50,
            height: 0,
          },
          position: {
            x: 80,
            y: 0,
          },
        },
        backgroundMode: {
          enable: true,
        },
      }}
    />
  );
};

export default ParticlesBackground;
