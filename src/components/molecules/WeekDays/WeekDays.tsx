import { format } from 'date-fns'
import { StyledWeekDays } from './WeekDays.styles'
import { CalendarData } from '../../organisms/Calendar/Calendar'

type WeekDaysProps = {
  firstWeek?: CalendarData[]
}

const WeekDays: React.FC<WeekDaysProps> = ({ firstWeek }) => {
  return (
    <StyledWeekDays>
      {firstWeek?.map((day: CalendarData) => (
        <span className="weekDay" key={day.date.toLocaleDateString()}>
          {format(day.date, 'E')}
        </span>
      ))}
    </StyledWeekDays>
  )
}

export { WeekDays }
