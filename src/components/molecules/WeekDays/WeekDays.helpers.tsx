import {
  Day,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfISOWeek,
  endOfWeek,
  setDefaultOptions,
  startOfISOWeek,
  startOfWeek
} from 'date-fns'
import { fr } from 'date-fns/locale'
setDefaultOptions({ locale: fr })

export const weekArrayMaker = (date: Date, weekStartsOn: Day) =>
  eachWeekOfInterval(
    {
      start: startOfWeek(date),
      end: endOfWeek(date)
    },
    { weekStartsOn }
  ).flatMap(weekDay =>
    eachDayOfInterval({
      start: startOfISOWeek(weekDay),
      end: endOfISOWeek(weekDay)
    })
  )
