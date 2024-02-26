import { SelectOptionsType } from "@/app/lib/types";
import React from "react";

function Select({
  options,
  defaultValue,
  onChange,
  isDisabled = false,
}: {
  options: SelectOptionsType[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
}) {
  return (
    <div className="inline-block relative w-full">
      <select
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={isDisabled}
        className="block appearance-none h-8 w-full bg-system-purple10 border-system-purple20 border px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-gray-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.95 8.95a1 1 0 0 0-1.41 0L10 10.59l-1.54-1.54a1 1 0 0 0-1.41 1.41l2.5 2.5a1 1 0 0 0 1.41 0l5-5a1 1 0 1 0-1.41-1.41l-4.59 4.59z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Select;
