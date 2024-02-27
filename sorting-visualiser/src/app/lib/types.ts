export type SortingAlgorithmType = 
    | 'bubble'
    | 'selection'
    | 'insertion'
    | 'merge'
    | 'quick'
    | 'heap'
    | 'radix';

export type SelectOptionsType = {
    label: string;
    value: string;
};

export type AnimationArrayType = [number[], boolean][];