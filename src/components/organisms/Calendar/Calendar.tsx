import {
  Day,
  addMonths,
  isSameDay,
  setDefaultOptions,
  startOfMonth,
  subMonths,
} from 'date-fns'
import { CalendarWrapper } from './Calendar.styles'
import { fr } from 'date-fns/locale'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '../../atoms/Button'
import { WeekDays } from '../../molecules/WeekDays'
import { DayCell } from '../../atoms/DayCell'
import { Global, ThemeProvider, css } from '@emotion/react'
import { theme } from '../../../theme/theme'
import { CraHeader } from '../../molecules/CraHeader'
import {
  monthByWeeksDaysMapper,
  monthMapper,
  monthStartEndMapper,
  setCalendarDataValue,
  setDayValue,
} from './Calendar.helpers'

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

type CalendarProps = {
  date?: Date
  weekStartsOn?: number
  displayWeekDays?: boolean
  holidays?: Holidays
}

const Calendar: React.FC<CalendarProps> = ({
  date = new Date(),
  weekStartsOn = 1 as Day,
  displayWeekDays = true,
  holidays,
}) => {
  const [calendarData, setCalendarData] = useState<CalendarData[]>([])
  const [monthToDisplayDate, setMonthToDisplayDate] = useState<Date>(date)

  const monthByWeeksDaysArr = useMemo(
    () =>
      monthByWeeksDaysMapper(
        monthStartEndMapper(monthToDisplayDate),
        weekStartsOn
      ),
    [monthToDisplayDate, weekStartsOn]
  )

  const mappedMonth = useMemo(
    () => monthMapper(monthByWeeksDaysArr, holidays!, monthToDisplayDate),
    [monthToDisplayDate, monthByWeeksDaysArr, holidays]
  )

  useEffect(() => {
    setCalendarData(mappedMonth)

    return () => {
      setCalendarData([])
    }
  }, [mappedMonth])

  const onClickHandler = (calendarData: CalendarData) => {
    const newCalendar = mappedMonth?.map((data) => {
      if (data.isOtherMonth) return data
      if (isSameDay(data.date, calendarData.date)) {
        return {
          ...calendarData,
          value: setDayValue(data),
        }
      }
      return data
    })
    setCalendarData(newCalendar)
  }

  const prevMonth = () => {
    setMonthToDisplayDate((state) => {
      return subMonths(startOfMonth(state), 1)
    })
  }
  const nextMonth = () => {
    setMonthToDisplayDate((state) => {
      return addMonths(startOfMonth(state), 1)
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: 'Raleway-Font';
            src: url('../src/assets/fonts/Raleway-VariableFont_wght.ttf')
              format(truetype) tech(variations);
          }
          * {
            font-family: 'inherit', sans-serif;
          }
        `}
      />
      <CalendarWrapper>
        <div>
          <Button
            color="secondary"
            onClick={() => {
              const newCalendar = setCalendarDataValue(calendarData, null)
              return setCalendarData(newCalendar)
            }}
          >
            reset
          </Button>
          <Button
            onClick={() => {
              const newCalendar = setCalendarDataValue(calendarData, 1)
              return setCalendarData(newCalendar)
            }}
          >
            all 1
          </Button>
        </div>

        <CraHeader
          calendarData={calendarData}
          isHolidays={!!holidays}
          prevMonthFn={prevMonth}
          nextMonthFn={nextMonth}
        />
        {displayWeekDays && <WeekDays firstWeek={calendarData.slice(0, 7)} />}
        <div className="monthWrapper">
          {calendarData.map((calendarData) => (
            <DayCell
              key={calendarData.date.toLocaleDateString()}
              onClick={() => onClickHandler(calendarData)}
              dayData={calendarData}
            />
          ))}
        </div>
      </CalendarWrapper>
    </ThemeProvider>
  )
}

export { Calendar }
