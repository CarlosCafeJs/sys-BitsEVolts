import React, { useRef, useState, MouseEvent, ReactNode } from "react";

type GradientHoverCardProps = {
  children: ReactNode;
};

export default function GradientHoverCard({ children }: GradientHoverCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}

      className="flex flex-col min-w-89 max-w-94 min-h-86 rounded-4xl justify-center items-center text-amber-50 relative w-96 h-64 overflow-hidden bg-gradient-to-br bg-[#00454A]/60 via-gray-500/20 to-indigo-600/10 shadow-lg"
    >
      <div
        className="pointer-events-none absolute w-60  h-40 rounded-full bg-[#00EEFF]/20 blur-2xl transition-all duration-50"
        style={{
          left: coords.x - 80,
          top: coords.y - 80,
        }}
      />
      <div
        className="pointer-events-none absolute w-120  h-40 rounded-full bg-[#00EEFF]/5 blur-3xl transition-all duration-0"
        style={{
          left: coords.x - 80,
          top: coords.y - 80,
        }}
      />
      <div className=" flex flex-col justify-center items-center min-w-89 max-w-94 min-h-86 relative z-10 p-6 text-white font-semibold text-xl">
        {children}
      </div>
    </div>
  );
}
