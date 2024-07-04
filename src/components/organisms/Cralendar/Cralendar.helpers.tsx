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
  startOfWeek
} from 'date-fns'
import { Holidays, CalendarData, Metadata } from '../../organisms/Cralendar/Cralendar'

const setHoliday = (holidaysArr: { [key: string]: string }, dayDate: Date) => {
  if (!holidaysArr) return null
  const isHoliday = Object.keys(holidaysArr).some((date: string) =>
    isSameDay(new Date(date), dayDate)
  )
  const formatedDayDate: string = format(dayDate, 'yyyy-MM-dd')
  return isHoliday ? holidaysArr[formatedDayDate] : null
}

export const weekStartEndMapper = (day: Date, weekStartsOn: number) => ({
  start: startOfWeek(day, {
    weekStartsOn: weekStartsOn as Day
  }),
  end: endOfWeek(day, {
    weekStartsOn: weekStartsOn as Day
  })
})

export const monthStartEndMapper = (monthToDisplayDate: Date) => ({
  start: startOfMonth(monthToDisplayDate),
  end: endOfMonth(monthToDisplayDate)
})

export const monthByWeeksDaysMapper = (monthStartEnd: Interval<Date>, weekStartsOn: number) =>
  eachWeekOfInterval(monthStartEnd).flatMap(weekDay =>
    eachDayOfInterval(weekStartEndMapper(weekDay, weekStartsOn))
  )

export const monthMapper = (monthDaysArr: Date[], holidays: Holidays, monthYearDate: Date) => {
  return monthDaysArr.map(dayDate => ({
    date: dayDate,
    value: null,
    isToday: isToday(dayDate),
    isWeekend: isWeekend(dayDate),
    isOtherMonth: !isSameMonth(monthYearDate, dayDate),
    holiday: setHoliday(holidays!, dayDate)
  }))
}
export const setDayValue = (data: CalendarData) => {
  if (data.value === null) return 1
  if (data.value === 1) return 0.5
  if (data.value === 0.5) return 0
  return null
}
export const setCalendarDataValue: (
  state: CalendarData[],
  action: 'reset' | 'full' | 'rest'
) => CalendarData[] = (state, action) => {
  const transformActionToValue = (action: 'reset' | 'full' | 'rest') => {
    const defaultValue = null

    const matrix = {
      full: 1,
      rest: 0,
      reset: null
    }

    return matrix[action!] ?? defaultValue
  }

  return state.map(item => {
    if (item.isOtherMonth) return item
    if (item.isWeekend) return item
    if ((item.value || item.value === 0) && action !== 'reset') return item
    return {
      ...item,
      value: transformActionToValue(action)
    }
  })
}

export const exportedDataMapper = (calendarData: CalendarData[], metaData: Metadata) => {
  const calendarValues = calendarData
    .filter(data => !data.isOtherMonth && !data.isWeekend)
    .map(item => ({
      date: item.date,
      value: item.value
    }))

  return { metadata: metaData, calendarValues }
}

export const totalsCalculator = (calendarData: CalendarData[]) => {
  const currentMonthData = calendarData.filter(
    (calendarData: CalendarData) => !calendarData.isOtherMonth
  )
  const currentMonthDate = currentMonthData[0]?.date

  const totalMonthDays = currentMonthData.length
  const totalMonthBusinessDays = currentMonthData?.filter(
    (calendarData: CalendarData) => !isWeekend(calendarData.date)
  ).length
  const totalMonthHolidays = currentMonthData?.filter(
    (calendarData: CalendarData) => calendarData.holiday && !calendarData.isOtherMonth
  ).length
  const totalWorkedDays = currentMonthData?.reduce(
    (acc: number, calendarData: CalendarData) => acc + calendarData.value!,
    0
  )
  const totalRestDays =
    currentMonthData?.filter((calendarData: CalendarData) => calendarData.value === 0).length +
    currentMonthData
      ?.filter((calendarData: CalendarData) => calendarData.value === 0.5)
      .reduce((acc: number, calendarData: CalendarData) => acc + calendarData.value!, 0)

  const deltaDays = -totalMonthBusinessDays + (totalWorkedDays + totalRestDays)
  return {
    currentMonthDate: currentMonthDate ?? new Date(),
    totalMonthDays,
    totalMonthBusinessDays,
    totalMonthHolidays,
    totalWorkedDays,
    totalRestDays,
    deltaDays
  }
}
