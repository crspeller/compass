import React from 'react';
import styled, { css } from 'styled-components';
import {
  centerChannelColorRgb,
  denimButtonBgRgb,
  errorTextColorRgb,
  cssVar,
  spacingXs
} from '@/styles/variables';

export enum CheckboxSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum CheckboxState {
  Unchecked = 'unchecked',
  Checked = 'checked',
  Mixed = 'mixed'
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The size of the checkbox */
  size?: CheckboxSize;
  /** Label for the checkbox */
  label?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
  /** Whether the checkbox is invalid */
  invalid?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getSizeStyles = (size: CheckboxSize) => {
  const sizes = {
    small: css`
      --checkbox-size: 16px;
      font-size: 13px;
    `,
    medium: css`
      --checkbox-size: 20px;
      font-size: 14px;
    `,
    large: css`
      --checkbox-size: 24px;
      font-size: 16px;
    `,
  };
  return sizes[size];
};

const CheckboxContainer = styled.label<{
  $size: CheckboxSize;
  $invalid: boolean;
  $disabled: boolean;
}>`
  ${props => getSizeStyles(props.$size)}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  color: ${props => cssVar(centerChannelColorRgb, props.$disabled ? 0.5 : 1)};
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CheckboxControl = styled.div<{
  $checked: boolean;
  $indeterminate: boolean;
  $invalid: boolean;
  $disabled: boolean;
}>`
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border: 2px solid ${props => props.$invalid ? 
    cssVar(errorTextColorRgb) : 
    cssVar(denimButtonBgRgb, props.$disabled ? 0.5 : 1)
  };
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$checked || props.$indeterminate) ? 
    cssVar(denimButtonBgRgb, props.$disabled ? 0.5 : 1) : 
    'transparent'
  };
  transition: all 0.2s ease;

  &:hover:not([disabled]) {
    background-color: ${props => props.$checked || props.$indeterminate ? 
      cssVar(denimButtonBgRgb, 0.8) : 
      cssVar(denimButtonBgRgb, 0.1)
    };
  }

  ${HiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${cssVar(denimButtonBgRgb)};
  }

  &::after {
    content: '';
    display: ${props => (props.$checked || props.$indeterminate) ? 'block' : 'none'};
    width: ${props => props.$indeterminate ? '66%' : '40%'};
    height: ${props => props.$indeterminate ? '2px' : '66%'};
    border: ${props => props.$indeterminate ? 'none' : '2px solid white'};
    border-left: ${props => props.$indeterminate ? 'none' : '0'};
    border-top: ${props => props.$indeterminate ? 'none' : '0'};
    background-color: ${props => props.$indeterminate ? 'white' : 'transparent'};
    transform: ${props => props.$indeterminate ? 'none' : 'rotate(45deg)'};
    margin-top: ${props => props.$indeterminate ? '0' : '-10%'};
  }
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  size = 'medium',
  label,
  checked = false,
  indeterminate = false,
  invalid = false,
  disabled = false,
  onChange,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <CheckboxContainer
      $size={size}
      $invalid={invalid}
      $disabled={disabled}
    >
      <HiddenInput
        ref={inputRef}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <CheckboxControl
        $checked={checked}
        $indeterminate={indeterminate}
        $invalid={invalid}
        $disabled={disabled}
      />
      {label && <span>{label}</span>}
    </CheckboxContainer>
  );
};
