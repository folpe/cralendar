import styled from '@emotion/styled'
import { ButtonProps } from './Button'

const StyledButton = styled('button')<ButtonProps>(
  (props) => `
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-weight: 600;
  border: ${props.variant === 'outlined' ? '1px solid teal' : ''};
  color: ${props.color === 'primary' ? props.theme.color.primary.main : props.theme.color.secondary.main};

  &[disabled] {
    cursor: default;
  }
`
)

export { StyledButton }
