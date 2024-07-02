import { StyledWeekDays } from './WeekDays.styles'

type WeekDaysProps = {
  weekDayNames: string[]
}

const WeekDays: React.FC<WeekDaysProps> = ({ weekDayNames }) => {
  return (
    <StyledWeekDays>
      {weekDayNames?.map((name: string) => (
        <span className="weekDay" key={name}>
          {name}
        </span>
      ))}
    </StyledWeekDays>
  )
}

export { WeekDays }
