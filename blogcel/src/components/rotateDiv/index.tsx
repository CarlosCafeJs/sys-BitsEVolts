import React, { useState, useEffect, ReactNode } from "react";
type GradientHoverCardProps = {
  children: ReactNode;
};
export default function RotatingDiv({ children }: GradientHoverCardProps) {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={shake ? "shake" : ""}
      style={{
        margin: "100px auto",
      }}
    >
      {children}
    </div>
  );
}
