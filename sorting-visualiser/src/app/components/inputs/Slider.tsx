import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "@/app/lib/utils";
import React from "react";

function Slider({
  min = MIN_ANIMATION_SPEED,
  max = MAX_ANIMATION_SPEED,
  step = 10,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (value: number) => void;
  isDisabled?: boolean;
}) {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="text-gray-300 text-center">Slow</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => handleChange(+e.target.value)}
        disabled={isDisabled}
        className="w-full h-2 rounded-lg bg-gray-700 appearance-none cursor-pointer"
      />
      <span className="text-gray-300 text-center">Fast</span>
    </div>
  );
}

export default Slider;
