import styled from '@emotion/styled'

const CalendarWrapper = styled.div`
  & .monthWrapper {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-flow: row;
    grid-gap: 2px;
    width: 100%;
  }
`

export { CalendarWrapper }
