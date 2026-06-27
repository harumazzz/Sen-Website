"use client";

import { useEffect, useState } from "react";

interface LoadingIndicatorProps {
    color?: string;
    size?: number;
}

const BAR_COUNT = 12;
const DURATION = 1200;

export default function LoadingIndicator({
    color = "currentColor",
    size = 20,
}: LoadingIndicatorProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frameId: number;
        const start = performance.now();

        const animate = (time: number) => {
            const elapsed = (time - start) % DURATION;
            setProgress(elapsed / DURATION);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, []);

    const scale = size / 20;

    return (
        <div
            style={{
                position: "relative",
                width: size,
                height: size,
            }}
        >
            {Array.from({ length: BAR_COUNT }).map((_, index) => {
                const p = ((progress - index / BAR_COUNT) % 1 + 1) % 1;

                const opacity = Math.max(
                    0.15,
                    1 - Math.min(p * (0.85 / 0.5), 1) * (1 - 0.15)
                );

                return (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            width: 2.5 * scale,
                            height: 5 * scale,
                            borderRadius: 1.25 * scale,
                            background: color,
                            opacity,
                            transform: `
                translate(-50%, -50%)
                rotate(${index * 30}deg)
                translateY(${-6.5 * scale}px)
              `,
                            transformOrigin: "center center",
                        }}
                    />
                );
            })}
        </div>
    );
}