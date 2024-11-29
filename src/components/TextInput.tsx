import React from 'react';
import styled, { css } from 'styled-components';
import {
  centerChannelBgRgb,
  centerChannelColorRgb,
  errorTextColorRgb,
  linkColorRgb,
  radiusM,
  borderDefault,
  cssVar
} from '@/styles/variables';

export enum TextInputSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The size of the input */
  size?: TextInputSize;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input has an error */
  error?: boolean;
  /** Label for the input */
  label?: string;
  /** Helper text to show below the input */
  helperText?: string;
  /** Icon to show before the input text */
  leadingIcon?: React.ReactNode;
  /** Icon to show after the input text */
  trailingIcon?: React.ReactNode;
  /** Whether the input should take up the full width of its container */
  fullWidth?: boolean;
}

const getSizeStyles = (size: TextInputSize) => {
  const sizes = {
    small: css`
      height: 32px;
      padding: 4px 12px;
      font-size: 13px;
    `,
    medium: css`
      height: 40px;
      padding: 6px 16px;
      font-size: 14px;
    `,
    large: css`
      height: 48px;
      padding: 8px 20px;
      font-size: 16px;
    `,
  };
  return sizes[size];
};

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${cssVar(centerChannelColorRgb)};
`;

const InputContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;

  .leading-icon,
  .trailing-icon {
    position: absolute;
    display: flex;
    align-items: center;
    color: ${cssVar(centerChannelColorRgb, 0.6)};
  }

  .leading-icon {
    left: 12px;
  }

  .trailing-icon {
    right: 12px;
  }
`;

const StyledInput = styled.input<TextInputProps>`
  width: 100%;
  border: var(${borderDefault});
  border-radius: var(${radiusM});
  background-color: ${cssVar(centerChannelBgRgb)};
  color: ${cssVar(centerChannelColorRgb)};
  transition: all 0.2s ease-in-out;

  ${props => getSizeStyles(props.size || TextInputSize.Medium)}
  
  ${props => props.leadingIcon && css`
    padding-left: 40px;
  `}
  
  ${props => props.trailingIcon && css`
    padding-right: 40px;
  `}

  ${props => props.error && css`
    border-color: ${cssVar(errorTextColorRgb)};
  `}

  &:hover:not(:disabled) {
    border-color: ${props => props.error ? 
      cssVar(errorTextColorRgb) : 
      cssVar(centerChannelColorRgb, 0.6)};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.error ? 
      cssVar(errorTextColorRgb) : 
      cssVar(linkColorRgb)};
    box-shadow: 0 0 0 2px ${cssVar(centerChannelBgRgb)}, 
                0 0 0 4px ${props => props.error ? 
                  cssVar(errorTextColorRgb, 0.2) : 
                  cssVar(linkColorRgb, 0.2)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${cssVar(centerChannelColorRgb, 0.6)};
  }
`;

const HelperText = styled.span<{ error?: boolean }>`
  font-size: 12px;
  color: ${props => props.error ? 
    cssVar(errorTextColorRgb) : 
    cssVar(centerChannelColorRgb, 0.6)};
`;

export const TextInput: React.FC<TextInputProps> = ({
  size = TextInputSize.Medium,
  disabled = false,
  error = false,
  label,
  helperText,
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  ...props
}) => {
  return (
    <InputWrapper fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <InputContainer>
        {leadingIcon && <span className="leading-icon">{leadingIcon}</span>}
        <StyledInput
          size={size}
          disabled={disabled}
          error={error}
          leadingIcon={leadingIcon}
          trailingIcon={trailingIcon}
          {...props}
        />
        {trailingIcon && <span className="trailing-icon">{trailingIcon}</span>}
      </InputContainer>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </InputWrapper>
  );
};
