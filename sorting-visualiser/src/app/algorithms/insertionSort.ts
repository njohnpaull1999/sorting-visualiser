import { AnimationArrayType } from "../lib/types";

export function insertionSort(isRunning: boolean, array: number[], runAnimation: (animations: AnimationArrayType) => void){
    if (isRunning)
        return;
    if (array.length <= 1)
        return;
    let animations: [number[], boolean][] = [];
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            animations.push([[j, j + 1], false]);
            animations.push([[j, array[j + 1]], true]);
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    runAnimation(animations);
}