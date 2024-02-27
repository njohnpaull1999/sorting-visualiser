import { AnimationArrayType } from "../lib/types";

export function heapSort(isRunning: boolean, array: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isRunning) return;
    if (array.length <= 1) return;
    let animations: AnimationArrayType = [];
    let n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i, animations);
    }
    for (let i = n - 1; i > 0; i--) {
        animations.push([[0, i], false]);
        animations.push([[0, array[i]], true]);
        animations.push([[i, array[0]], true]);
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        heapify(array, i, 0, animations);
    }
    runAnimation(animations);
}

function heapify(array: number[], n: number, i: number, animations: AnimationArrayType) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && array[l] > array[largest]) {
        largest = l;
    }
    if (r < n && array[r] > array[largest]) {
        largest = r;
    }
    if (largest !== i) {
        animations.push([[i, largest], false]);
        animations.push([[i, array[largest]], true]);
        animations.push([[largest, array[i]], true]);
        let swap = array[i];
        array[i] = array[largest];
        array[largest] = swap;
        heapify(array, n, largest, animations);
    }
}
