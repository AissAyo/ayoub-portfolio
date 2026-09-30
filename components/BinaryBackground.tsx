"use client";

import { useEffect, useRef } from "react";

type Stream = {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  size: number;
  text: string;
  binary: string;
  binaryWidth: number;
  textWidth: number;
};

type SafeZone = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

const messages = [
  "AYOUB AISSAOUI",
  "JUNIOR FULL STACK DEVELOPER",
  "JAVA",
  "SPRING BOOT",
  "REACT",
  "REST APIS",
  "SQL",
  "DOCKER",
  "CLOUD",
  "DEVOPS",
  "PROBLEM SOLVING",
  "BUILDING REAL WORLD SOFTWARE",
];

function textToBinary(text: string) {
  return text
    .split("")
    .map((char) =>
      char.charCodeAt(0).toString(2).padStart(8, "0")
    )
    .join(" ");
}

export function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const streams: Stream[] = [];

    const createStreams = () => {
      streams.length = 0;

      const count = Math.min(
        12,
        Math.max(8, Math.floor(window.innerWidth / 140))
      );

      for (let i = 0; i < count; i++) {
        const text = messages[i % messages.length];
        const size = 12;
        const binary = textToBinary(text);

        ctx.font = `${size}px monospace`;

        const binaryWidth = ctx.measureText(binary).width;

        ctx.font = `600 ${size}px monospace`;

        const textWidth = ctx.measureText(text).width;

        streams.push({
          x: Math.random() * Math.max(
            1,
            window.innerWidth - binaryWidth
          ),
          y: Math.random() * window.innerHeight,
          speed: 0.05 + Math.random() * 0.08,
          opacity: 0.28 + Math.random() * 0.12,
          size,
          text,
          binary,
          binaryWidth,
          textWidth,
        });
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createStreams();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const getSafeZones = (): SafeZone[] => {
      return Array.from(
        document.querySelectorAll(".binary-safe")
      ).map((element) => {
        const rect = element.getBoundingClientRect();
        const padding = 20;

        return {
          left: rect.left - padding,
          right: rect.right + padding,
          top: rect.top - padding,
          bottom: rect.bottom + padding,
        };
      });
    };

    const isInsideSafeZone = (
      stream: Stream,
      zones: SafeZone[]
    ) => {
      const left = stream.x;
      const right = stream.x + stream.binaryWidth;
      const top = stream.y - stream.size;
      const bottom = stream.y + 5;

      return zones.some(
        (zone) =>
          right > zone.left &&
          left < zone.right &&
          bottom > zone.top &&
          top < zone.bottom
      );
    };

    const isMouseOverStream = (stream: Stream) => {
      const paddingX = 25;
      const paddingY = 20;

      return (
        mouse.x >= stream.x - paddingX &&
        mouse.x <= stream.x + stream.binaryWidth + paddingX &&
        mouse.y >= stream.y - stream.size - paddingY &&
        mouse.y <= stream.y + paddingY
      );
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      const safeZones = getSafeZones();

      let hoveredIndex = -1;

      for (let i = 0; i < streams.length; i++) {
        if (isMouseOverStream(streams[i])) {
          hoveredIndex = i;
          break;
        }
      }

      streams.forEach((stream, index) => {
        stream.y -= stream.speed;

        if (stream.y < -30) {
          stream.y = window.innerHeight + 30;

          stream.x = Math.random() * Math.max(
            1,
            window.innerWidth - stream.binaryWidth
          );
        }

        const hovered = index === hoveredIndex;

        const insideSafeZone = isInsideSafeZone(
          stream,
          safeZones
        );

        if (insideSafeZone && !hovered) {
          return;
        }

        const isPurple = index % 3 === 0;

        const accent = isPurple
          ? "167, 139, 250"
          : "103, 232, 249";

        if (!hovered) {
          ctx.font = `${stream.size}px monospace`;
          ctx.fillStyle =
            `rgba(${accent}, ${stream.opacity})`;

          ctx.shadowBlur = 4;
          ctx.shadowColor = `rgba(${accent}, 0.25)`;
          ctx.shadowBlur = 0;

          ctx.fillText(
            stream.binary,
            stream.x,
            stream.y
          );

          return;
        }

        /*
         * Word centered on the cursor.
         */
        ctx.font = `600 ${stream.size}px monospace`;
        ctx.fillStyle = `rgba(${accent}, 1)`;

        ctx.shadowBlur = 14;
        ctx.shadowColor = `rgba(${accent}, 0.6)`;

        const wordX =
          mouse.x - stream.textWidth / 2;

        const wordY =
          mouse.y + stream.size / 2;

        ctx.fillText(
          stream.text,
          wordX,
          wordY
        );

        ctx.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}



// const wordX = mouse.x - stream.textWidth / 2;
// const wordY = mouse.y + stream.size / 2;


