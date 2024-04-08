import {
  Day,
  Interval,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  isWeekend,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { Holidays, CalendarData } from './Calendar'

const setHoliday = (holidaysArr: { [key: string]: string }, dayDate: Date) => {
  if (!holidaysArr) return null
  const isHoliday = Object.keys(holidaysArr).some((date: string) =>
    isSameDay(new Date(date), dayDate)
  )
  const formatedDayDate: string = format(dayDate, 'yyyy-MM-dd')
  return isHoliday ? holidaysArr[formatedDayDate] : null
}

export const weekStartEndMapper = (day: Date, weekStartsOn: Number) => ({
  start: startOfWeek(day, {
    weekStartsOn: weekStartsOn as Day,
  }),
  end: endOfWeek(day, {
    weekStartsOn: weekStartsOn as Day,
  }),
})

export const monthStartEndMapper = (monthToDisplayDate: Date) => ({
  start: startOfMonth(monthToDisplayDate),
  end: endOfMonth(monthToDisplayDate),
})

export const monthByWeeksDaysMapper = (
  monthStartEnd: Interval<Date>,
  weekStartsOn: number
) =>
  eachWeekOfInterval(monthStartEnd).flatMap((weekDay) =>
    eachDayOfInterval(weekStartEndMapper(weekDay, weekStartsOn))
  )

export const monthMapper = (
  monthDaysArr: Date[],
  holidays: Holidays,
  monthYearDate: Date
) => {
  return monthDaysArr.map((dayDate) => ({
    date: dayDate,
    value: null,
    isToday: isToday(dayDate),
    isWeekend: isWeekend(dayDate),
    isOtherMonth: !isSameMonth(monthYearDate, dayDate),
    holiday: setHoliday(holidays!, dayDate),
  }))
}
export const setDayValue = (data: CalendarData) => {
  if (data.value === null) return 1
  if (data.value === 1) return 0.5
  if (data.value === 0.5) return 0
  return null
}
export const setCalendarDataValue = (
  data: CalendarData[],
  value: number | null
) =>
  data.map((item) => {
    if (item.isOtherMonth) return item
    if (item.isWeekend) return item
    return {
      ...item,
      value: value,
    }
  })
