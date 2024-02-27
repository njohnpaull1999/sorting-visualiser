import { bubbleSort } from "../algorithms/bubbleSort";
import { heapSort } from "../algorithms/heapSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { quickSort } from "../algorithms/quickSort";
import { radixSort } from "../algorithms/radixSort";
import { selectionSort } from "../algorithms/selectionSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";

export const MIN_ANIMATION_SPEED = 10;
export const MAX_ANIMATION_SPEED = 200;

export function generateRandomNumberFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
    {label: "Bubble Sort", value: "bubble"},
    {label: "Selection Sort", value: "selection"},
    {label: "Insertion Sort", value: "insertion"},
    {label: "Merge Sort", value: "merge"},
    {label: "Quick Sort", value: "quick"},
    {label: "Heap Sort", value: "heap"},
    {label: "Radix Sort", value: "radix"},
]

export const generateAnimationArray = (
    selectedAlgorithm: SortingAlgorithmType,
    isRunning: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) => {
    switch(selectedAlgorithm) {
        case "bubble":
            return bubbleSort(isRunning, array, runAnimation);
        case "selection":
            return selectionSort(isRunning, array, runAnimation);
        case "insertion":
            return insertionSort(isRunning, array, runAnimation);
        case "merge":
            return mergeSort(isRunning, array, runAnimation);
        case "quick":
            return quickSort(isRunning, array, runAnimation);
        case "heap":
            return heapSort(isRunning, array, runAnimation);
        case "radix":
            return radixSort(isRunning, array, runAnimation);
        default:
            return;
    }
}