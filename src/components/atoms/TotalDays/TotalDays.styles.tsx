import styled from '@emotion/styled'

const TotalDaysBase = styled('div')`
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  & .label {
    line-height: 1em;
  }
  & .number {
    font-size: 2em;
    font-weight: 600;
    line-height: 1em;
  }
`

export { TotalDaysBase }
