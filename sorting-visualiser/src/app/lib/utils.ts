export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

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
]