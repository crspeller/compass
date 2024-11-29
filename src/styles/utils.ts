import { ThemeVariables } from './variables';

export const getCSSVariable = (variable: ThemeVariables[keyof ThemeVariables]): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

export const getRGBValue = (variable: ThemeVariables[keyof ThemeVariables]): string => {
    const value = getCSSVariable(variable);
    return value.startsWith('rgb') ? value : `rgb(${value})`;
};
