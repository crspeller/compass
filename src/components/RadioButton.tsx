import React from 'react';
import styled, { css } from 'styled-components';
import {
  centerChannelBgRgb,
  centerChannelColorRgb,
  buttonBgRgb,
  linkColorRgb,
  errorTextColorRgb,
  cssVar
} from '@/styles/variables';

export enum RadioButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label for the radio button */
  label: string;
  /** The size of the radio button */
  size?: RadioButtonSize;
  /** Whether the radio button is checked */
  checked?: boolean;
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Whether the radio button represents a destructive choice */
  destructive?: boolean;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getSizeStyles = (size: RadioButtonSize) => {
  const sizes = {
    small: css`
      --radio-size: 16px;
      font-size: 13px;
    `,
    medium: css`
      --radio-size: 20px;
      font-size: 14px;
    `,
    large: css`
      --radio-size: 24px;
      font-size: 16px;
    `
  };
  return sizes[size];
};

const RadioContainer = styled.label<{ $size: RadioButtonSize; $disabled?: boolean; $destructive?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  color: ${props => props.destructive ? cssVar(errorTextColorRgb) : cssVar(centerChannelColorRgb)};
  ${props => getSizeStyles(props.size)}
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledRadio = styled.div<{ $checked?: boolean; $disabled?: boolean; $destructive?: boolean }>`
  width: var(--radio-size);
  height: var(--radio-size);
  border: 2px solid ${props => props.$destructive ? 
    cssVar(errorTextColorRgb) : 
    cssVar(buttonBgRgb)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background: ${cssVar(centerChannelBgRgb)};

  &::after {
    content: '';
    width: calc(var(--radio-size) * 0.5);
    height: calc(var(--radio-size) * 0.5);
    border-radius: 50%;
    background: ${props => props.$destructive ? 
      cssVar(errorTextColorRgb) : 
      cssVar(buttonBgRgb)};
    opacity: ${props => props.$checked ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }

  ${HiddenRadio}:focus-visible + & {
    box-shadow: 0 0 0 2px ${cssVar(centerChannelBgRgb)}, 0 0 0 4px ${cssVar(linkColorRgb)};
  }

  ${HiddenRadio}:hover:not(:disabled) + & {
    border-color: ${props => props.$destructive ? 
      cssVar(errorTextColorRgb, 0.8) : 
      cssVar(buttonBgRgb, 0.8)};
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  size = RadioButtonSize.Medium,
  checked = false,
  disabled = false,
  destructive = false,
  onChange = () => {},
  ...props
}) => {
  return (
    <RadioContainer 
      $size={size}
      $disabled={disabled}
      $destructive={destructive}
    >
      <HiddenRadio
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <StyledRadio 
        $checked={checked}
        $disabled={disabled}
        $destructive={destructive}
      />
      {label}
    </RadioContainer>
  );
};
