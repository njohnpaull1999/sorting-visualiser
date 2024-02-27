import { AnimationArrayType } from "../lib/types";

export function selectionSort(isRunning: boolean, array: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isRunning) return;
    if (array.length <= 1) return;
    let animations: AnimationArrayType = [];
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            animations.push([[i, j], false]);
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        animations.push([[i, minIndex], false]);
        animations.push([[i, array[minIndex]], true]);
        animations.push([[minIndex, array[i]], true]);
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    runAnimation(animations);
}