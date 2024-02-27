import { AnimationArrayType } from "../lib/types";

export function mergeSort(isRunning: boolean, array: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isRunning) return;
    if (array.length <= 1) return;
    let animations: any = [];
    mergeSortHelper(array, 0, array.length - 1, animations);
    runAnimation(animations);
}

function mergeSortHelper(array: number[], arg1: number, arg2: number, animations: any) {
    if (arg1 === arg2) return;
    const middle = Math.floor((arg1 + arg2) / 2);
    mergeSortHelper(array, arg1, middle, animations);
    mergeSortHelper(array, middle + 1, arg2, animations);
    merge(array, arg1, middle, arg2, animations);
}
function merge(array: number[], arg1: number, middle: number, arg2: number, animations: any) {
    let left = array.slice(arg1, middle + 1);
    let right = array.slice(middle + 1, arg2 + 1);
    let i = 0;
    let j = 0;
    let k = arg1;
    while (i < left.length && j < right.length) {
        animations.push([[arg1 + i, middle + 1 + j], false]);
        if (left[i] <= right[j]) {
            animations.push([[k, left[i]], true]);
            array[k++] = left[i++];
        } else {
            animations.push([[k, right[j]], true]);
            array[k++] = right[j++];
        }
    }
    while (i < left.length) {
        animations.push([[arg1 + i, arg1 + i], false]);
        animations.push([[k, left[i]], true]);
        array[k++] = left[i++];
    }
    while (j < right.length) {
        animations.push([[middle + 1 + j, middle + 1 + j], false]);
        animations.push([[k, right[j]], true]);
        array[k++] = right[j++];
    }
}

