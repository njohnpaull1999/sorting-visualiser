import { AnimationArrayType } from "../lib/types";

export function quickSort(isRunning: boolean, array: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isRunning)
        return;
    if (array.length <= 1)
        return;
    let animations: AnimationArrayType = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    runAnimation(animations);
}

function quickSortHelper(array: number[], arg1: number, arg2: number, animations: AnimationArrayType) {
    if (arg1 < arg2) {
        let pivot = partition(array, arg1, arg2, animations);
        quickSortHelper(array, arg1, pivot - 1, animations);
        quickSortHelper(array, pivot + 1, arg2, animations);
    }
}
function partition(array: number[], arg1: number, arg2: number, animations: AnimationArrayType) {
    let pivot = array[arg2];
    let i = arg1 - 1;
    for (let j = arg1; j < arg2; j++) {
        animations.push([[j, arg2], false]);
        if (array[j] < pivot) {
            i++;
            animations.push([[i, array[j]], true]);
            animations.push([[j, array[i]], true]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    animations.push([[i + 1, arg2], false]);
    animations.push([[i + 1, array[arg2]], true]);
    animations.push([[arg2, array[i + 1]], true]);
    let temp = array[i + 1];
    array[i + 1] = array[arg2];
    array[arg2] = temp;
    return i + 1;
}

