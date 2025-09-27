"use client"

import React, { forwardRef, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/registry/magicui/animated-beam"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export function TechStackBeam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const phpRef = useRef<HTMLDivElement>(null)
  const jsRef = useRef<HTMLDivElement>(null)
  const javaRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const csRef = useRef<HTMLDivElement>(null)
  const pythonRef = useRef<HTMLDivElement>(null)
  const flaskRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={phpRef}>
            <Image
              src="/logo-php.png"
              alt="PHP"
              width={32}
              height={32}
              className="object-contain"
            />
          </Circle>
          <Circle ref={jsRef}>
            <Image
              src="/logo-js.png"
              alt="JavaScript"
              width={32}
              height={32}
              className="object-contain"
            />
          </Circle>
          <Circle ref={javaRef}>
            <Image
              src="/logo-java.png"
              alt="Java"
              width={32}
              height={32}
              className="object-contain"
            />
          </Circle>
        </div>
        
        <div className="flex flex-row items-center justify-between">
          <Circle ref={csRef}>
            <Image
              src="/logo-cs.png"
              alt="C#"
              width={32}
              height={32}
              className="object-contain"
            />
          </Circle>
          <Circle ref={centerRef} className="size-16">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M12 2C8.5 2 6 4.5 6 8C6 9.5 6.5 10.8 7.3 11.8C6.5 12.5 6 13.7 6 15C6 17.8 8.2 20 11 20H13C15.8 20 18 17.8 18 15C18 13.7 17.5 12.5 16.7 11.8C17.5 10.8 18 9.5 18 8C18 4.5 15.5 2 12 2ZM12 4C14.4 4 16 5.6 16 8C16 9.1 15.6 10.1 14.9 10.8C14.3 10.3 13.7 10 13 10H11C10.3 10 9.7 10.3 9.1 10.8C8.4 10.1 8 9.1 8 8C8 5.6 9.6 4 12 4ZM11 12H13C14.7 12 16 13.3 16 15C16 16.7 14.7 18 13 18H11C9.3 18 8 16.7 8 15C8 13.3 9.3 12 11 12Z"
                fill="currentColor"
              />
              <circle cx="10" cy="8" r="1" fill="currentColor" />
              <circle cx="14" cy="8" r="1" fill="currentColor" />
              <path
                d="M9 14C9 14.6 9.4 15 10 15H14C14.6 15 15 14.6 15 14"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </Circle>
          <Circle ref={flaskRef}>
            <Image
              src="/logo-flask.png"
              alt="Flask"
              width={32}
              height={32}
              className="object-contain"
            />
          </Circle>
        </div>
        
        <div className="flex flex-row items-center justify-center">
          <Circle ref={pythonRef}>
            <Image
              src="/logo-py.png"
              alt="Python"
              width={32}
              height={32}
              className="object-contain"
            />
          </Circle>
        </div>
      </div>

      {/* Animated beams connecting all technologies to the center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={phpRef}
        toRef={centerRef}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={jsRef}
        toRef={centerRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={javaRef}
        toRef={centerRef}
        curvature={75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={csRef}
        toRef={centerRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={flaskRef}
        toRef={centerRef}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={pythonRef}
        toRef={centerRef}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  )
}