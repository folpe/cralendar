export interface CalendarData {
  date: Date
  value: number | null
  isToday: boolean
  isWeekend: boolean
  isOtherMonth: boolean
  holiday: string | null
}

export interface Holidays {
  [key: string]: string
}
type CalendarProps = {
  date?: Date
  weekStartsOn?: number
  displayWeekDays?: boolean
  holidays?: {
    [key: string]: string
  }
}
declare const Calendar: React.FC<CalendarProps>
export { Calendar }
