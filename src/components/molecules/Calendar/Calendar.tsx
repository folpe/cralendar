import { CalendarData } from '../../organisms/Cralendar/Cralendar'
import { CalendarWrapper } from './Calendar.styles'

import { DayCell } from '../../atoms/DayCell'
import { WeekDays } from '../WeekDays'
import { format } from 'date-fns'

import React from 'react'

type CalendarProps = {
  calendarData: CalendarData[]
  displayWeekDays?: boolean
  onDayAction: (calendarDataDay: CalendarData) => void
}

const Calendar: React.FC<CalendarProps> = ({ calendarData, displayWeekDays, onDayAction }) => {
  const dayCellClickHandler = (calendarDataDay: CalendarData) => {
    onDayAction(calendarDataDay)
  }

  const weekDayNames = calendarData
    ?.slice(0, 7)
    .map((day: CalendarData): string => format(day.date, 'E'))

  return (
    <CalendarWrapper>
      {displayWeekDays && <WeekDays weekDayNames={weekDayNames} />}
      <div className="monthWrapper">
        {calendarData.map(calendarDataDay => (
          <DayCell
            key={calendarDataDay.date.toLocaleDateString()}
            onClick={() => dayCellClickHandler(calendarDataDay)}
            dayData={calendarDataDay}
          />
        ))}
      </div>
    </CalendarWrapper>
  )
}

export { Calendar }
