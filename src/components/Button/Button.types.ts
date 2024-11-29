import { ReactNode } from 'react';

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
