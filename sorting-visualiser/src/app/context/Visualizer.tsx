'use client';

import {createContext, useContext, useState} from 'react';
import { SortingAlgorithmType } from '../lib/types';
import { MAX_ANIMATION_SPEED } from '../lib/utils';

interface SortingAlgorithmContextType {
    array: number[];
    setArray: (array: number[]) => void;
    selectedAlgorithm: SortingAlgorithmType;
    setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;
    isRunning: boolean;
    setIsRunning: (isRunning: boolean) => void;
    speed: number;
    setSpeed: (speed: number) => void;
    isAnimationComplete: boolean;
    resetArrayAndAnimation: () => void;
    runAnimation: () => void;
}

const SortingAlgorithmContext = createContext<SortingAlgorithmContextType | undefined>(undefined);

export const SortingAlgorithmProvider = ({children}: {children: React.ReactNode}) => {
    const [array, setArray] = useState<number[]>([100,200,300,400]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithmType>('bubble');
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(MAX_ANIMATION_SPEED);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    const resetArrayAndAnimation = () => {};

    const runAnimation = () => {};

    const value = {
        array,
        setArray,
        selectedAlgorithm,
        setSelectedAlgorithm,
        isRunning,
        setIsRunning,
        speed,
        setSpeed,
        isAnimationComplete,
        resetArrayAndAnimation,
        runAnimation,
    }
    
  return <SortingAlgorithmContext.Provider value={value}>{children}</SortingAlgorithmContext.Provider>;
}

export const useSortingAlgorithmContext = () => {
    const context = useContext(SortingAlgorithmContext);
    if (context === undefined) {
        throw new Error('useSortingAlgorithmContext must be used within a SortingAlgorithmProvider');
    }
    return context;
}