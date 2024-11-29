import { ThemeVariables } from './variables';

export const getCSSVariable = (variable: ThemeVariables[keyof ThemeVariables]): string => {
    return `var(${variable})`;
};

export const getRGBValue = (variable: ThemeVariables[keyof ThemeVariables]): string => {
    return `var(${variable})`;
};
