import styled from '@emotion/styled'

const StyledCraHeader = styled('div')`
  display: flex;
  background: ${({ theme }) =>
    `linear-gradient(to left, ${theme.color.primary.light} 30%, ${theme.color.primary.main} 70%)`};
  text-align: center;
  justify-content: space-between;
  & .dateWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 16px;
    flex: 0 35%;
    & button {
      font-size: 1.5em;
      color: white;
      flex: 0 25px;
    }
    & .date {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      & .monthName {
        font-size: 1.6em;
        font-weight: 800;
        line-height: 1em;
      }
      & .yearNumber {
        font-size: 1.2em;
        line-height: 1em;
      }
    }
  }
  & .totalsWrapper {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 8px;
  }
`

export { StyledCraHeader }
