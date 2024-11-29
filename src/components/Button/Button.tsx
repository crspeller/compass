import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

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
      padding: 4px 8px;
      font-size: 12px;
    `,
    small: css`
      padding: 6px 12px;
      font-size: 14px;
    `,
    medium: css`
      padding: 8px 16px;
      font-size: 16px;
    `,
    large: css`
      padding: 12px 24px;
      font-size: 18px;
    `,
  };
  return sizes[size];
};

const getVariantStyles = (variant: ButtonVariant, destructive: boolean) => {
  const baseStyles = {
    primary: css`
      background-color: ${destructive ? '#dc3545' : '#0d6efd'};
      color: white;
      &:hover:not(:disabled) {
        background-color: ${destructive ? '#bb2d3b' : '#0b5ed7'};
      }
    `,
    secondary: css`
      background-color: transparent;
      border: 1px solid ${destructive ? '#dc3545' : '#0d6efd'};
      color: ${destructive ? '#dc3545' : '#0d6efd'};
      &:hover:not(:disabled) {
        background-color: ${destructive ? '#dc354510' : '#0d6efd10'};
      }
    `,
    tertiary: css`
      background-color: transparent;
      color: ${destructive ? '#dc3545' : '#0d6efd'};
      &:hover:not(:disabled) {
        background-color: ${destructive ? '#dc354510' : '#0d6efd10'};
      }
    `,
    quaternary: css`
      background-color: #f8f9fa;
      color: ${destructive ? '#dc3545' : '#212529'};
      &:hover:not(:disabled) {
        background-color: #e9ecef;
      }
    `,
    link: css`
      background-color: transparent;
      color: ${destructive ? '#dc3545' : '#0d6efd'};
      text-decoration: underline;
      padding: 0;
      &:hover:not(:disabled) {
        color: ${destructive ? '#bb2d3b' : '#0b5ed7'};
      }
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
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => getSizeStyles(props.size || 'medium')}
  ${props => getVariantStyles(props.variant || 'primary', props.destructive || false)}

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
