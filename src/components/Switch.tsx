import React from 'react';
import styled, { css } from 'styled-components';
import {
  centerChannelBgRgb,
  denimButtonBgRgb,
  linkColorRgb,
  errorTextColorRgb,
  radiusM,
  cssVar
} from '@/styles/variables';

export enum SwitchSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The size of the switch */
  size?: SwitchSize;
  /** Whether the switch is checked */
  checked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Whether the switch represents a destructive action */
  destructive?: boolean;
  /** Label for the switch */
  label?: string;
  /** Handler for change events */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getSizeStyles = (size: SwitchSize) => {
  const sizes = {
    small: css`
      --switch-width: 32px;
      --switch-height: 16px;
      --thumb-size: 12px;
      --thumb-margin: 2px;
    `,
    medium: css`
      --switch-width: 40px;
      --switch-height: 20px;
      --thumb-size: 16px;
      --thumb-margin: 2px;
    `,
    large: css`
      --switch-width: 48px;
      --switch-height: 24px;
      --thumb-size: 20px;
      --thumb-margin: 2px;
    `,
  };
  return sizes[size];
};

const SwitchWrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
`;

const SwitchLabel = styled.span`
  font-size: 14px;
`;

const SwitchInput = styled.input<{
  size?: SwitchSize;
  destructive?: boolean;
}>`
  appearance: none;
  position: relative;
  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: var(${radiusM});
  background-color: rgba(var(--center-channel-color-rgb), 0.16);
  cursor: inherit;
  transition: all 0.2s ease-in-out;

  ${props => getSizeStyles(props.size || SwitchSize.Medium)}

  &::before {
    content: '';
    position: absolute;
    top: var(--thumb-margin);
    left: var(--thumb-margin);
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: ${cssVar(centerChannelBgRgb)};
    transition: transform 0.2s ease-in-out;
  }

  &:checked {
    background-color: ${props => 
      props.destructive ? 
      cssVar(errorTextColorRgb) : 
      cssVar(denimButtonBgRgb)};

    &::before {
      transform: translateX(calc(var(--switch-width) - var(--thumb-size) - 2 * var(--thumb-margin)));
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${cssVar(centerChannelBgRgb)}, 0 0 0 4px ${cssVar(linkColorRgb)};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Switch: React.FC<SwitchProps> = ({
  size = SwitchSize.Medium,
  checked = false,
  disabled = false,
  destructive = false,
  label,
  onChange,
  ...props
}) => {
  return (
    <SwitchWrapper $disabled={disabled}>
      <SwitchInput
        type="checkbox"
        size={size}
        checked={checked}
        disabled={disabled}
        destructive={destructive}
        onChange={onChange}
        {...props}
      />
      {label && <SwitchLabel>{label}</SwitchLabel>}
    </SwitchWrapper>
  );
};
