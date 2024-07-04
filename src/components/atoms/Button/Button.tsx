import { ThemeProvider } from '@emotion/react'
import { StyledButton } from './Button.styles'
import { theme } from '../../../theme/theme'
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'text' | 'outlined' | 'contained'
  color?: 'primary' | 'secondary' | 'inherit'
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'text',
  color = 'primary',
  children,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton className={className} color={color} variant={variant} {...props}>
        {children}
      </StyledButton>
    </ThemeProvider>
  )
}

export { Button }
