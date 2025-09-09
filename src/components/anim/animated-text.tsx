"use client";

import { motion as m } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

type AnimationDirection =
  | "left-to-right"
  | "right-to-left"
  | "middle-out"
  | "middle-in"
  | "scramble";

interface AnimatedTextProps {
  text: string;
  direction?: AnimationDirection;
  duration?: number;
  delayStep?: number;
  scrambleChars?: string; // Optional: custom scramble character set
  className?: string;
  delay?: number;
}

const getDelays = (
  length: number,
  direction: AnimationDirection,
  delayStep: number,
  delay?: number
): number[] => {
  switch (direction) {
    case "left-to-right":
      return Array.from({ length }, (_, i) => i * delayStep + (delay || 0));
    case "right-to-left":
      return Array.from(
        { length },
        (_, i) => (length - 1 - i) * delayStep + (delay || 0)
      );
    case "middle-out": {
      const mid = (length - 1) / 2;
      return Array.from(
        { length },
        (_, i) => Math.abs(i - mid) * delayStep + (delay || 0)
      );
    }
    case "middle-in": {
      const mid = (length - 1) / 2;
      // Farthest from middle gets first, closest to middle gets last
      return Array.from(
        { length },
        (_, i) => (mid - Math.abs(i - mid)) * delayStep + (delay || 0)
      );
    }
    case "scramble":
      // For scramble, just use left-to-right delays
      return Array.from({ length }, (_, i) => i * delayStep + (delay || 0));
    default:
      return Array.from({ length }, (_, i) => i * delayStep + (delay || 0));
  }
};

const DEFAULT_SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";

const ScrambleLetter: React.FC<{
  letter: string;
  revealDelay: number;
  duration: number;
  scrambleChars?: string;
}> = ({ letter, revealDelay, duration, scrambleChars }) => {
  const [display, setDisplay] = useState("");
  const [_revealed, setRevealed] = useState(false);
  const scrambleSet = scrambleChars || DEFAULT_SCRAMBLE_CHARS;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplay("");
    setRevealed(false);

    // Start scrambling after revealDelay
    timeoutRef.current = setTimeout(() => {
      let elapsed = 0;
      const scrambleDuration = duration * 1000;
      intervalRef.current = setInterval(() => {
        if (elapsed >= scrambleDuration) {
          setDisplay(letter);
          setRevealed(true);
          if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
          // Pick a random char
          const rand =
            scrambleSet[Math.floor(Math.random() * scrambleSet.length)];
          setDisplay(rand);
          elapsed += 30;
        }
      }, 30);
    }, revealDelay * 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letter, revealDelay, duration]);

  return (
    <m.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        delay: revealDelay,
      }}
    >
      {display}
    </m.span>
  );
};

export const AnimatedText = ({
  text,
  direction = "left-to-right",
  duration = 1,
  delayStep = 0.1,
  scrambleChars,
  delay,
  className,
}: AnimatedTextProps) => {
  const letters = text.split("");
  const delays = getDelays(letters.length, direction, delayStep, delay);

  if (direction === "scramble") {
    return (
      <m.div className={className}>
        {letters.map((letter, index) => (
          <ScrambleLetter
            key={index}
            letter={letter}
            revealDelay={delays[index]}
            duration={duration}
            scrambleChars={scrambleChars}
          />
        ))}
      </m.div>
    );
  }

  return (
    <m.div className={className}>
      {letters.map((letter, index) => (
        <m.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration,
            delay: delays[index],
          }}
        >
          {letter}
        </m.span>
      ))}
    </m.div>
  );
};

export default AnimatedText;
