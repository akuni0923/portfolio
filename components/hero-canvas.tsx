"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCompact = window.matchMedia("(max-width: 768px)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: 0, y: 0, active: false };
    const points: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    let running = true;

    const setSize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedPoints = () => {
      points.length = 0;
      const count = isCompact ? 26 : 48;
      for (let i = 0; i < count; i += 1) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isCompact ? 0.12 : 0.2),
          vy: (Math.random() - 0.5) * (isCompact ? 0.12 : 0.2)
        });
      }
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const draw = () => {
      if (!running) return;
      context.clearRect(0, 0, width, height);

      for (const point of points) {
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;

          if (point.x < 0 || point.x > width) point.vx *= -1;
          if (point.y < 0 || point.y > height) point.vy *= -1;
        }

        context.beginPath();
        context.arc(point.x, point.y, 1.2, 0, Math.PI * 2);
        context.fillStyle = "rgba(157, 226, 255, 0.7)";
        context.fill();
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 120) {
            const alpha = 1 - distance / 120;
            context.strokeStyle = `rgba(98, 212, 255, ${alpha * 0.2})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      if (pointer.active && !isCompact) {
        const radius = 120;
        const gradient = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, radius);
        gradient.addColorStop(0, "rgba(100, 224, 255, 0.12)");
        gradient.addColorStop(1, "rgba(100, 224, 255, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
        context.fill();
      }

      raf = window.requestAnimationFrame(draw);
    };

    setSize();
    seedPoints();
    draw();

    const handleResize = () => {
      setSize();
      seedPoints();
    };

    const handleVisibilityChange = () => {
      running = !document.hidden;
      if (running) {
        raf = window.requestAnimationFrame(draw);
      } else {
        window.cancelAnimationFrame(raf);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("mouseleave", handlePointerLeave);
    canvas.addEventListener("touchend", handlePointerLeave);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("mouseleave", handlePointerLeave);
      canvas.removeEventListener("touchend", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}
