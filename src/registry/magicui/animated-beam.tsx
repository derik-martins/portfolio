"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef, useEffect, useId, useRef } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (containerRef.current && fromRef.current && toRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // Force re-render when container resizes
        updatePath();
      });

      resizeObserver.observe(containerRef.current);
      updatePath();

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  const updatePath = () => {
    if (containerRef.current && fromRef.current && toRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      const svgWidth = containerRect.width;
      const svgHeight = containerRect.height;
      const svgX = containerRect.left;
      const svgY = containerRect.top;

      // Calculate the center of each element relative to the container
      const startX = rectA.left - svgX + rectA.width / 2 + startXOffset;
      const startY = rectA.top - svgY + rectA.height / 2 + startYOffset;
      const endX = rectB.left - svgX + rectB.width / 2 + endXOffset;
      const endY = rectB.top - svgY + rectB.height / 2 + endYOffset;

      const controlPointX = (startX + endX) / 2;
      const controlPointY = (startY + endY) / 2 + curvature;

      const d = `M ${startX},${startY} Q ${controlPointX},${controlPointY} ${endX},${endY}`;
      pathRef.current?.setAttribute("d", d);
    }
  };

  return (
    <svg
      ref={svgRef}
      fill="none"
      width="100%"
      height="100%"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${containerRef.current?.offsetWidth || 0} ${
        containerRef.current?.offsetHeight || 0
      }`}
    >
      <defs>
        <linearGradient
          className={cn("transform-gpu")}
          id={id}
          gradientUnits="userSpaceOnUse"
          gradientTransform={reverse ? "rotate(180)" : ""}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        stroke={`url(#${id})`}
        strokeWidth={pathWidth}
        strokeOpacity="1"
        strokeLinecap="round"
        style={{
          strokeDasharray: "0, 9999",
          animation: `lineAnimation ${duration}s ease-in-out ${delay}s infinite`,
        }}
      />
      <style jsx>{`
        @keyframes lineAnimation {
          0% {
            stroke-dasharray: 0, 9999;
          }
          40% {
            stroke-dasharray: 100, 9999;
          }
          100% {
            stroke-dasharray: 9999, 0;
          }
        }
      `}</style>
    </svg>
  );
};