/// <reference types="react" />
export interface dayProps {
  date: Date
  value: number | null
  isToday: boolean
  isWeekend: boolean
  isOtherMonth: boolean
  holiday: string | null
}
type CraHeaderProps = {
  calendarData: dayProps[]
  isHolidays?: boolean
  isPrevNextMonth?: boolean
  prevMonthFn: () => void
  nextMonthFn: () => void
}
declare const CraHeader: React.FC<CraHeaderProps>
export { CraHeader }
