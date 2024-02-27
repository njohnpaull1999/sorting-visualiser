"use client";
import { useEffect } from "react";
import { useSortingAlgorithmContext } from "./context/Visualizer";
import Slider from "./components/inputs/Slider";
import { algorithmOptions, generateAnimationArray } from "./lib/utils";
import { SortingAlgorithmType } from "./lib/types";
import Select from "./components/inputs/Select";
import { RxReset } from "react-icons/rx";
import { FaPlayCircle } from "react-icons/fa";

export default function Home() {
  const {
    array,
    isRunning,
    speed,
    setSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    requiresReset,
    resetArrayAndAnimation,
    runAnimation
  } = useSortingAlgorithmContext();

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  }

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      // reset array and animation
    } else {
      generateAnimationArray(selectedAlgorithm, isRunning, array, runAnimation);
    }
  }

  return (
    <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
      <div className="flex justify-center h-full">
        <div
          id="content-container"
          className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
        >
          <div className="h-[66px] relative flex items-center justify-between w-full">
            <h1 className="text-gray-300 text-2xl font-light hidden md:flex">
              Sorting Visulizer
            </h1>
            <div className="flex items-center justify-center gap-4">
              <Slider
                value={speed}
                handleChange={(e) => setSpeed(e)}
                isDisabled={isRunning}
              />
              <Select
                options={algorithmOptions}
                defaultValue={selectedAlgorithm}
                onChange={handleAlgorithmChange}
                isDisabled={isRunning}
              />
              <button className="flex items-center justify-center" onClick={handlePlay}>
                {requiresReset ? (
                  <RxReset className="h-6 w-6 text-gray-300" />
                ) : (
                  <FaPlayCircle className="h-6 w-6 text-gray-300" />
                )
                }
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-66px)] w-full">
            <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
              {array.map((value, index) => (
                <div
                  key={index}
                  className="array-line relative h-[3px] w-1 mx-0.5 opacity-70 rounded-lg default-line-color"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
