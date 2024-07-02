import styled from '@emotion/styled'

const StyledBoostersWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-between;
  width: 100%;

  & .actionsWrapper {
    flex: 1 1 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    & .boostButton {
      background: white;
      &:hover + .boostActions {
        // transform: translateX(0);
      }
    }
    & .boostActions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all ease-in-out 1s;
      // transform: translateX(-250px);
      transform-origin: left center;
    }
  }

  & .legendsWrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .legend {
    display: flex;
    align-items: center;
    & label {
      font-size: 0.8em;
      line-height: 0.8em;
      color: ${({ theme }) => theme.color.grey.main};
    }
  }
  & .legendBox {
    width: 30px;
    height: 20px;
    margin-right: 8px;
    border-radius: 4px;
    border: 1px solid transparent;
    &.worked {
      background: ${({ theme }) => theme.color.primary.main};
    }
    &.half {
      background: linear-gradient(
        45deg,
        rgba(0, 128, 128, 0.3) 0%,
        rgba(0, 128, 128, 0.3) 50%,
        rgba(0, 128, 128, 0.6) 50%,
        rgba(0, 128, 128, 0.6) 100%
      );
      opacity: 0.8;
    }
    &.rested {
      border-color: ${({ theme }) => theme.color.primary.main};
    }
  }
`

export { StyledBoostersWrapper }
