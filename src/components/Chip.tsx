import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  centerChannelBgRgb,
  centerChannelColorRgb,
  denimButtonBgRgb,
  linkColorRgb,
  radiusM,
  errorTextColorRgb,
  cssVar
} from '@/styles/variables';

export enum ChipSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum ChipVariant {
  Filled = 'filled',
  Outlined = 'outlined'
}

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The content of the chip */
  children: ReactNode;
  /** The size of the chip */
  size?: ChipSize;
  /** The variant of the chip */
  variant?: ChipVariant;
  /** Whether the chip is disabled */
  disabled?: boolean;
  /** Whether the chip represents a selected state */
  selected?: boolean;
  /** Whether the chip represents a destructive action */
  destructive?: boolean;
  /** Icon to show before the chip text */
  leadingIcon?: ReactNode;
  /** Icon to show after the chip text */
  trailingIcon?: ReactNode;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const getSizeStyles = (size: ChipSize) => {
  const sizes = {
    small: css`
      padding: 2px 8px;
      font-size: 11px;
      height: 20px;
      gap: 4px;
    `,
    medium: css`
      padding: 4px 12px;
      font-size: 12px;
      height: 28px;
      gap: 6px;
    `,
    large: css`
      padding: 6px 16px;
      font-size: 14px;
      height: 36px;
      gap: 8px;
    `,
  };
  return sizes[size];
};

const getVariantStyles = (
  variant: ChipVariant, 
  selected: boolean, 
  destructive: boolean
) => {
  const baseStyles = {
    filled: css`
      background-color: ${destructive 
        ? cssVar(errorTextColorRgb, 0.08)
        : selected 
          ? cssVar(denimButtonBgRgb, 0.08)
          : cssVar(centerChannelColorRgb, 0.08)};
      color: ${destructive
        ? cssVar(errorTextColorRgb)
        : selected
          ? cssVar(denimButtonBgRgb)
          : cssVar(centerChannelColorRgb)};
    `,
    outlined: css`
      background-color: transparent;
      border: 1px solid;
      border-color: ${destructive
        ? cssVar(errorTextColorRgb)
        : selected
          ? cssVar(denimButtonBgRgb)
          : cssVar(centerChannelColorRgb, 0.16)};
      color: ${destructive
        ? cssVar(errorTextColorRgb)
        : selected
          ? cssVar(denimButtonBgRgb)
          : cssVar(centerChannelColorRgb)};
    `,
  };
  return baseStyles[variant];
};

const StyledChip = styled.div<ChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(${radiusM});
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  user-select: none;

  ${props => getSizeStyles(props.size || ChipSize.Medium)}
  ${props => getVariantStyles(
    props.variant || ChipVariant.Filled,
    props.selected || false,
    props.destructive || false
  )}

  &:hover:not(:disabled) {
    background-color: ${props => props.destructive 
      ? cssVar(errorTextColorRgb, 0.12)
      : props.selected 
        ? cssVar(denimButtonBgRgb, 0.12)
        : cssVar(centerChannelColorRgb, 0.12)};
  }

  &:active:not(:disabled) {
    background-color: ${props => props.destructive 
      ? cssVar(errorTextColorRgb, 0.16)
      : props.selected 
        ? cssVar(denimButtonBgRgb, 0.16)
        : cssVar(centerChannelColorRgb, 0.16)};
  }

  &:focus:not(:disabled) {
    outline: none;
  }

  &:focus-visible:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 2px ${cssVar(centerChannelBgRgb)}, 0 0 0 4px ${cssVar(linkColorRgb)};
  }

  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}

  .leading-icon,
  .trailing-icon {
    display: flex;
    align-items: center;
  }
`;

export const Chip: React.FC<ChipProps> = ({
  children,
  size = ChipSize.Medium,
  variant = ChipVariant.Filled,
  disabled = false,
  selected = false,
  destructive = false,
  leadingIcon,
  trailingIcon,
  onClick,
  ...props
}) => {
  return (
    <StyledChip
      size={size}
      variant={variant}
      disabled={disabled}
      selected={selected}
      destructive={destructive}
      onClick={disabled ? undefined : onClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {leadingIcon && <span className="leading-icon">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className="trailing-icon">{trailingIcon}</span>}
    </StyledChip>
  );
};
