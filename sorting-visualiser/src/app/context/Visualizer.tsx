"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimationArrayType, SortingAlgorithmType } from "../lib/types";
import {
  MAX_ANIMATION_SPEED,
  generateRandomNumberFromInterval,
} from "../lib/utils";

interface SortingAlgorithmContextType {
  array: number[];
  setArray: (array: number[]) => void;
  selectedAlgorithm: SortingAlgorithmType;
  setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  isAnimationComplete: boolean;
  resetArrayAndAnimation: () => void;
  runAnimation: (animations: AnimationArrayType) => void;
  requiresReset: boolean;
}

const SortingAlgorithmContext = createContext<
  SortingAlgorithmContextType | undefined
>(undefined);

export const SortingAlgorithmProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [array, setArray] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<SortingAlgorithmType>("bubble");
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(MAX_ANIMATION_SPEED);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const requiresReset = isAnimationComplete || isRunning;

  useEffect(() => {
    resetArrayAndAnimation();

    window.addEventListener("resize", resetArrayAndAnimation);

    return () => {
      window.removeEventListener("resize", resetArrayAndAnimation);
    };
  }, []);

  const resetArrayAndAnimation = () => {
    const contentContainer = document.getElementById("content-container");

    if (!contentContainer) return;

    const contentContainerWidth = contentContainer.clientWidth;
    const tempArray: number[] = [];
    const numLines = contentContainerWidth / 8;

    const containerHeight = window.innerHeight;
    const maxLineHeight = Math.max(containerHeight - 420, 100);

    for (let i = 0; i < numLines; i++) {
      tempArray.push(generateRandomNumberFromInterval(35, maxLineHeight));
    }

    setArray(tempArray);
    setIsAnimationComplete(false);
    setIsRunning(false);

    const highestId = window.setTimeout(() => {
        for(let i = highestId; i >= 0; i--) {
            window.clearTimeout(i);
        }
    }, 0);

    setTimeout(() => {
        const arrayLines = document.getElementsByClassName("array-line") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < arrayLines.length; i++) {
            arrayLines[i].classList.remove("change-line-color");
            arrayLines[i].classList.add("default-line-color");
        }
    }, 0);
  };

  const runAnimation = (animations: AnimationArrayType) => {
    setIsRunning(true);

    const inverseSpeed = (1 / speed) * 200;

    const arrayLines = document.getElementsByClassName(
      "array-line"
    ) as HTMLCollectionOf<HTMLElement>;

    const updateClassList = (
      indexes: number[],
      addClassname: string,
      removeClassname: string
    ) => {
      indexes.forEach((index) => {
        arrayLines[index].classList.add(addClassname);
        arrayLines[index].classList.remove(removeClassname);
      });
    };

    const updateHeightValue = (
      lineIndex: number,
      newHeight: number | undefined
    ) => {
      if (newHeight === undefined) return;
      arrayLines[lineIndex].style.height = `${newHeight}px`;
    };

    animations.forEach((animation, index) => {
      setTimeout(() => {
        const [values, isSwap] = animation;

        if (!isSwap) {
          updateClassList(values, "change-line-color", "default-line-color");
          setTimeout(() => {
            updateClassList(values, "default-line-color", "change-line-color");
          }, inverseSpeed);
        } else {
            const [lineIndex, newHeight] = values;
            updateHeightValue(lineIndex, newHeight);
        }
      }, index * inverseSpeed);
    });

    const finalTimeout = animations.length * inverseSpeed;

    setTimeout(() => {
        Array.from(arrayLines).forEach((line) => {
            line.classList.add("pulse-animation", "change-line-color");
            line.classList.remove("default-line-color");
        })

        setTimeout(() => {
            Array.from(arrayLines).forEach((line) => {
                line.classList.remove("pulse-animation", "change-line-color");
                line.classList.add("default-line-color");
            })
            setIsRunning(false);
            setIsAnimationComplete(true);
        }, 1000)
    }, finalTimeout);
}

  const value = {
    array,
    setArray,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isRunning,
    setIsRunning,
    speed,
    setSpeed,
    isAnimationComplete,
    resetArrayAndAnimation,
    runAnimation,
    requiresReset,
  };

  return (
    <SortingAlgorithmContext.Provider value={value}>
      {children}
    </SortingAlgorithmContext.Provider>
  );
};

export const useSortingAlgorithmContext = () => {
  const context = useContext(SortingAlgorithmContext);
  if (context === undefined) {
    throw new Error(
      "useSortingAlgorithmContext must be used within a SortingAlgorithmProvider"
    );
  }
  return context;
};
