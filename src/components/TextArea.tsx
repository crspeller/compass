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

export enum TextAreaSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** The size of the textarea */
  size?: TextAreaSize;
  /** Whether the textarea has an error */
  error?: boolean;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Whether the textarea should take up the full width of its container */
  fullWidth?: boolean;
  /** The minimum number of rows to show */
  minRows?: number;
  /** The maximum number of rows before scrolling */
  maxRows?: number;
}

const getSizeStyles = (size: TextAreaSize) => {
  const sizes = {
    small: css`
      padding: 4px 8px;
      font-size: 13px;
    `,
    medium: css`
      padding: 8px 12px;
      font-size: 14px;
    `,
    large: css`
      padding: 12px 16px;
      font-size: 16px;
    `,
  };
  return sizes[size];
};

const StyledTextArea = styled.textarea<{
  $size?: TextAreaSize;
  $error?: boolean;
  $fullWidth?: boolean;
}>`
  display: block;
  width: ${props => props.$fullWidth ? '100%' : '320px'};
  background-color: ${cssVar(centerChannelBgRgb)};
  color: ${cssVar(centerChannelColorRgb)};
  border: var(${borderDefault});
  border-color: ${props => props.error ? cssVar(errorTextColorRgb) : 'inherit'};
  border-radius: var(${radiusM});
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s ease-in-out;

  ${props => getSizeStyles(props.size || TextAreaSize.Medium)}

  &:hover:not(:disabled) {
    border-color: ${props => props.error ? cssVar(errorTextColorRgb) : cssVar(centerChannelColorRgb)};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.error ? cssVar(errorTextColorRgb) : cssVar(linkColorRgb)};
    box-shadow: 0 0 0 2px ${cssVar(centerChannelBgRgb)}, 
                0 0 0 4px ${props => props.error ? cssVar(errorTextColorRgb, 0.2) : cssVar(linkColorRgb, 0.2)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${cssVar(centerChannelColorRgb, 0.6)};
  }
`;

export const TextArea: React.FC<TextAreaProps> = ({
  size = TextAreaSize.Medium,
  error = false,
  disabled = false,
  fullWidth = false,
  minRows = 3,
  maxRows,
  ...props
}) => {
  return (
    <StyledTextArea
      $size={size}
      $error={error}
      $fullWidth={fullWidth}
      disabled={disabled}
      style={{
        minHeight: minRows ? `${minRows * 1.5}em` : '80px',
        maxHeight: maxRows ? `${maxRows * 1.5}em` : 'none'
      }}
      {...props}
    />
  );
};
