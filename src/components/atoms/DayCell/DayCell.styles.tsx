import styled from '@emotion/styled'
import { Button } from '../Button'

const borderRadius = '5px'

const StyledDayCell = styled(Button)`
  &.dayCell {
    position: relative;
    display: flex;
    border: 1px solid transparent;
    background: #fcfcfc;
    margin: 2px;
    border-radius: ${borderRadius};
    min-width: 40px;
    width: 100%;
    color: ${({ theme }) => theme.color.grey.dark};
    padding: 2px;
    line-height: 3em;
    transition: all 1s ease-out;

    &:hover {
      border-color: ${({ theme }) => theme.color.primary.main};
    }

    & .day {
      flex: 1;
      border-radius: ${borderRadius};
      transition: all 1s ease-out;
    }
    & .indicators {
      position: absolute;
      width: 100%;
      height: 10px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(2px);

      & span {
        position: absolute;
        display: block;
        top: calc(50% + 2px);
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        transition: all 1s ease-out;

        &.todayMark {
          width: 15px;
          height: 3px;
          background: ${({ theme }) => theme.color.primary.main};
          border-radius: 10px;
        }
        &.holidayMark {
          width: 5px;
          height: 5px;
          background: ${({ theme }) => theme.color.secondary.main};
          border-radius: 10px;
        }
      }
    }

    &.active {
      & .day {
        color: white;
        background: ${({ theme }) => theme.color.primary.main};
      }
      & .indicators {
        & .todayMark {
          background: white;
        }
      }

      &.half {
        & .day {
          background: linear-gradient(
            45deg,
            rgba(0, 128, 128, 0.3) 0%,
            rgba(0, 128, 128, 0.3) 50%,
            rgba(0, 128, 128, 0.6) 50%,
            rgba(0, 128, 128, 0.6) 100%
          );
          opacity: 0.8;
        }
        & .indicators {
          & .todayMark {
            background: ${({ theme }) => theme.color.primary.main};
          }
        }
      }
    }
    &.empty {
      & .day {
        background: rgba(0, 0, 0, 0.1);
      }
      & .indicators {
        & .todayMark {
          background: ${({ theme }) => theme.color.primary.main};
        }
      }
    }

    &.weekend {
      color: #aaa;
    }
    &.otherMonth {
      color: #ddd;
    }
  }

  &[disabled] {
    &:hover {
      border-color: transparent;
    }
  }
`

export { StyledDayCell }
