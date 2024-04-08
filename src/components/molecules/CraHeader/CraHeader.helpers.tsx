import { format, isWeekend } from 'date-fns'
import { CalendarData } from '../../organisms/Calendar/Calendar'
const initial = {
  totalMonthDays: 0,
  totalMonthBusinessDays: 0,
  totalMonthHolidays: 0,
  totalWorkedDays: 0,
  totalRestDays: 0,
  deltaDays: 0,
  monthName: 'no data',
  monthNumber: 'no data',
}
export const totalsCalculator = (calendarData: CalendarData[]) => {
  if (!(calendarData.length > 0)) return initial
  const currentMonthData = calendarData.filter(
    (calendarData: CalendarData) => !calendarData.isOtherMonth
  )

  const totalMonthDays = currentMonthData.length
  const totalMonthBusinessDays = currentMonthData?.filter(
    (calendarData: CalendarData) => !isWeekend(calendarData.date)
  ).length
  const totalMonthHolidays = currentMonthData?.filter(
    (calendarData: CalendarData) =>
      calendarData.holiday && !calendarData.isOtherMonth
  ).length
  const totalWorkedDays = currentMonthData?.reduce(
    (acc: number, calendarData: CalendarData) => acc + calendarData.value!,
    0
  )
  const totalRestDays =
    currentMonthData?.filter(
      (calendarData: CalendarData) => calendarData.value === 0
    ).length +
    currentMonthData
      ?.filter((calendarData: CalendarData) => calendarData.value === 0.5)
      .reduce(
        (acc: number, calendarData: CalendarData) => acc + calendarData.value!,
        0
      )

  const deltaDays = -totalMonthBusinessDays + (totalWorkedDays + totalRestDays)
  const firstDayDate = currentMonthData[0]?.date
  return {
    totalMonthDays,
    totalMonthBusinessDays,
    totalMonthHolidays,
    totalWorkedDays,
    totalRestDays,
    deltaDays,
    monthName: format(firstDayDate, 'MMMM'),
    monthNumber: format(firstDayDate, 'yyyy'),
  }
}
