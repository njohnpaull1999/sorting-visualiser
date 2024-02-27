import { AnimationArrayType } from "../lib/types";

export function bubbleSort(isRunning: boolean, array: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isRunning) return;
    if (array.length <= 1) return;
    let animations: AnimationArrayType = [];
    let n = array.length;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            animations.push([[i, i + 1], false]);
            if (array[i] > array[i + 1]) {
                animations.push([[i, array[i + 1]], true]);
                animations.push([[i + 1, array[i]], true]);
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    runAnimation(animations);
}