import { Day, format } from 'date-fns'
import { StyledWeekDays } from './WeekDays.styles'
import { weekArrayMaker } from './WeekDays.helpers'
import { useMemo } from 'react'

type WeekDaysProps = {
  weekStartsOn?: Day
}

const WeekDays: React.FC<WeekDaysProps> = ({ weekStartsOn = 1 }) => {
  const today = new Date()
  const weekArray = useMemo(
    () => weekArrayMaker(today, weekStartsOn),
    [today, weekStartsOn]
  )

  return (
    <StyledWeekDays>
      {weekArray.map((day) => (
        <span className="weekDay" key={day.toLocaleDateString()}>
          {format(day, 'E')}
        </span>
      ))}
    </StyledWeekDays>
  )
}

export { WeekDays }
