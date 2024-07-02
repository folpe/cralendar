import {
  addMonths,
  Day,
  isSameDay,
  setDefaultOptions,
  startOfMonth,
  subMonths,
} from 'date-fns'
import { fr } from 'date-fns/locale'
import { useEffect, useMemo, useState } from 'react'

import { ThemeProvider } from '@emotion/react'

import { theme } from '../../../theme/theme'
import { Boosters } from '../../molecules/Boosters'
import { Calendar } from '../../molecules/Calendar'
import {
  exportedDataMapper,
  monthByWeeksDaysMapper,
  monthMapper,
  monthStartEndMapper,
  setDayValue,
  totalsCalculator,
} from './Cralendar.helpers'
import { CraHeader } from '../../molecules/CraHeader'
import { setCalendarDataValue } from './Cralendar.helpers'
import { CralendarWrapper } from './Cralendar.styles'

setDefaultOptions({ locale: fr })
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

export interface CalendarValues {
  date: Date
  value: number | null
}
export interface Metadata {
  currentMonthDate: Date
  totalMonthDays: number
  totalMonthBusinessDays: number
  totalMonthHolidays: number
  totalWorkedDays: number
  totalRestDays: number
  deltaDays: number
}

export interface ExportedData {
  metadata: Metadata
  calendarValues?: CalendarValues[]
}

type CralendarProps = {
  date?: Date
  weekStartsOn?: number
  displayBoosterActions?: boolean
  displayWeekDays?: boolean
  displayPrevNext?: boolean
  holidays?: Holidays
  onCalendarChange: (data: ExportedData) => void
}

const Cralendar: React.FC<CralendarProps> = ({
  date = new Date(),
  weekStartsOn = 1 as Day,
  displayBoosterActions = true,
  displayWeekDays = true,
  displayPrevNext = true,
  holidays,
  onCalendarChange,
}) => {
  const [calendarData, setCalendarData] = useState<CalendarData[]>([])
  const [monthToDisplayDate, setMonthToDisplayDate] = useState<Date>(date)
  const mappedMonth = useMemo(
    () =>
      monthMapper(
        monthByWeeksDaysMapper(
          monthStartEndMapper(monthToDisplayDate),
          weekStartsOn
        ),
        holidays!,
        monthToDisplayDate
      ),
    [monthToDisplayDate, holidays, weekStartsOn]
  )

  useEffect(() => {
    setCalendarData(mappedMonth)

    return () => {
      setCalendarData([])
    }
  }, [mappedMonth])

  useEffect(() => {
    const metadata = totalsCalculator(calendarData)
    onCalendarChange(exportedDataMapper(calendarData, metadata!))

    // return () => {
    //   onCalendarChange(null)
    // }
  }, [calendarData])

  const onChangeMonth = (action: 'previous' | 'next') => {
    setMonthToDisplayDate((state) => {
      return action === 'previous'
        ? subMonths(startOfMonth(state), 1)
        : addMonths(startOfMonth(state), 1)
    })
  }

  const onDayAction = (calendarDataDay: CalendarData) => {
    const updatedCalendar = calendarData?.map((data) => {
      if (data.isOtherMonth) return data
      if (isSameDay(data.date, calendarDataDay.date)) {
        return {
          ...calendarDataDay,
          value: setDayValue(data),
        }
      }
      return data
    })
    setCalendarData(updatedCalendar)
  }

  const onBoostAction = (action: 'reset' | 'full' | 'rest') => {
    setCalendarData((state) => setCalendarDataValue(state, action))
  }

  return (
    <ThemeProvider theme={theme}>
      <CralendarWrapper>
        <CraHeader
          {...totalsCalculator(calendarData!)}
          displayHolidays={!!holidays}
          displayPrevNextMonth={displayPrevNext}
          onChangeMonth={onChangeMonth}
        />

        <Calendar
          calendarData={calendarData}
          displayWeekDays={displayWeekDays}
          onDayAction={onDayAction}
        />
        {displayBoosterActions && <Boosters onBoostAction={onBoostAction} />}
      </CralendarWrapper>
    </ThemeProvider>
  )
}

export { Cralendar }
