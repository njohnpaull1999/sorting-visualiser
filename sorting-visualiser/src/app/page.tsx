"use client";
import { useEffect } from "react";
import { useSortingAlgorithmContext } from "./context/Visualizer";

export default function Home() {
  const { array, isRunning } = useSortingAlgorithmContext();

  useEffect(() => {
    console.log(array);
    console.log(isRunning);
  }, []);

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
            <div>Controls</div>
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
