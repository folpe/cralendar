import { format } from 'date-fns'

export const dateData = (date: Date) => ({
  monthName: format(date, 'MMMM'),
  yearNumber: format(date, 'yyyy')
})
