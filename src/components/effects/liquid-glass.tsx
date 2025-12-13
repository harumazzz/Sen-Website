"use client";

import React from "react";

/**
 * Liquid Glass SVG Filter Component
 * Creates a reusable SVG displacement filter for liquid glass effect
 */
export function LiquidGlassFilter({ id = "liquid-glass-filter" }: { id?: string }) {
  return (
    <svg width="0" height="0" style={{ position: "absolute", visibility: "hidden" }}>
      <defs>
        <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
          {/* Turbulence for organic displacement */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05"
            numOctaves="3"
            result="noise"
            seed="2"
          />
          {/* Displacement map using turbulence */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
