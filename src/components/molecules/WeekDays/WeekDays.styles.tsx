import styled from '@emotion/styled'

const StyledWeekDays = styled('div')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: row;
  grid-gap: 2px;
  justify-items: center;
  width: 100%;
  & .weekDay {
    display: flex;
    align-items: center;
    justifycontent: center;
    line-height: 3em;
    height: 3em;
    color: ${({ theme }) => theme.color.grey.main};
  }
`

export { StyledWeekDays }
