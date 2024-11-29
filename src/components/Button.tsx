import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  buttonColorRgb,
  centerChannelBgRgb,
  centerChannelColorRgb,
  denimButtonBgRgb,
  linkColorRgb,
  radiusM,
  errorTextColorRgb,
  borderDefault,
  cssVar
} from '@/styles/variables';

export type ButtonSize = 'x-small' | 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content of the button */
  children: ReactNode;
  /** The size of the button */
  size?: ButtonSize;
  /** The variant of the button */
  variant?: ButtonVariant;
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button represents a destructive action */
  destructive?: boolean;
  /** Icon to show before the button text */
  leadingIcon?: ReactNode;
  /** Icon to show after the button text */
  trailingIcon?: ReactNode;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const getSizeStyles = (size: ButtonSize) => {
  const sizes = {
    'x-small': css`
      padding: 2px 8px;
      font-size: 12px;
      height: 24px;
    `,
    small: css`
      padding: 4px 12px;
      font-size: 13px;
      height: 32px;
    `,
    medium: css`
      padding: 6px 16px;
      font-size: 14px;
      height: 40px;
    `,
    large: css`
      padding: 8px 20px;
      font-size: 16px;
      height: 48px;
    `,
  };
  return sizes[size];
};

const getVariantStyles = (variant: ButtonVariant, destructive: boolean) => {
  const baseStyles = {
    primary: css`
      background-color: ${destructive ? 
        cssVar(errorTextColorRgb) : 
        cssVar(denimButtonBgRgb)};
      color: ${cssVar(buttonColorRgb)};
    `,
    secondary: css`
      background-color: transparent;
      border: var(${borderDefault});
      border-color: ${destructive ? 
        cssVar(errorTextColorRgb) : 
        cssVar(denimButtonBgRgb)};
      color: ${destructive ? 
        cssVar(errorTextColorRgb) : 
        cssVar(denimButtonBgRgb)};
    `,
    tertiary: css`
      background-color: transparent;
      color: ${destructive ? 
        cssVar(errorTextColorRgb) : 
        cssVar(denimButtonBgRgb)};
    `,
    quaternary: css`
      background-color: ${cssVar(centerChannelBgRgb)};
      color: ${destructive ? 
        cssVar(errorTextColorRgb) : 
        cssVar(centerChannelColorRgb)};
    `,
    link: css`
      background-color: transparent;
      color: ${destructive ? 
        cssVar(errorTextColorRgb) : 
        cssVar(linkColorRgb)};
      text-decoration: underline;
      padding: 0;
    `,
  };
  return baseStyles[variant];
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: var(${radiusM});
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => getSizeStyles(props.size || 'medium')}
  ${props => getVariantStyles(props.variant || 'primary', props.destructive || false)}

  ${props => {
    if (props.variant === 'secondary') {
      return css`
        &:hover:not(:disabled) {
          background-color: ${props.destructive ? 
            cssVar(errorTextColorRgb, 0.2) : 
            cssVar(denimButtonBgRgb, 0.2)};
        }
        &:active:not(:disabled) {
          background-color: ${props.destructive ? 
            cssVar(errorTextColorRgb, 0.3) : 
            cssVar(denimButtonBgRgb, 0.3)};
        }
      `;
    } else if (props.variant === 'tertiary') {
      return css`
        &:hover:not(:disabled) {
          background-color: ${props.destructive ? 
            cssVar(errorTextColorRgb, 0.1) : 
            cssVar(denimButtonBgRgb, 0.1)};
        }
        &:active:not(:disabled) {
          background-color: ${props.destructive ? 
            cssVar(errorTextColorRgb, 0.2) : 
            cssVar(denimButtonBgRgb, 0.2)};
        }
      `;
    } else {
      return css`
        &:hover:not(:disabled) {
          filter: brightness(0.9);
        }
        &:active:not(:disabled) {
          filter: brightness(0.8);
        }
      `;
    }
  }}

  &:focus:not(:disabled) {
    outline: none;
  }

  &:focus-visible:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 2px ${cssVar(centerChannelBgRgb)}, 0 0 0 4px ${cssVar(linkColorRgb)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .leading-icon,
  .trailing-icon {
    display: flex;
    align-items: center;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  destructive = false,
  leadingIcon,
  trailingIcon,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      destructive={destructive}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {leadingIcon && <span className="leading-icon">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className="trailing-icon">{trailingIcon}</span>}
    </StyledButton>
  );
};
