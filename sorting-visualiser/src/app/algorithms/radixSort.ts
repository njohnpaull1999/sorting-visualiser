import { AnimationArrayType } from "../lib/types";

export function radixSort(isRunning: boolean, array: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isRunning)
        return;
    if (array.length <= 1)
        return;
    let animations: AnimationArrayType = [];
    let max = Math.max(...array);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(array, exp, animations);
    }
    runAnimation(animations);
}

function countSort(array: number[], exp: number, animations: AnimationArrayType) {
    let n = array.length;
    let output = new Array(n);
    let count = new Array(10).fill(0);
    for (let i = 0; i < n; i++) {
        count[Math.floor(array[i] / exp) % 10]++;
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        animations.push([[i, count[Math.floor(array[i] / exp) % 10] - 1], false]);
        animations.push([[i, array[count[Math.floor(array[i] / exp) % 10] - 1]], true]);
        output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
        count[Math.floor(array[i] / exp) % 10]--;
    }
    for (let i = 0; i < n; i++) {
        array[i] = output[i];
    }
}
