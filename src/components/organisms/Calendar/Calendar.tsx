import {
  Day,
  addMonths,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfISOWeek,
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  isWeekend,
  setDefaultOptions,
  startOfISOWeek,
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
setDefaultOptions({ locale: fr })

type CalendarProps = {
  date?: Date
  weekStartsOn?: Day
  displayWeekDays?: boolean
  holidays?: { [key: string]: string }
}

const Calendar: React.FC<CalendarProps> = ({
  date = new Date(),
  weekStartsOn = 1,
  displayWeekDays = true,
  holidays,
}) => {
  const [calendarData, setCalendarData] = useState<dayProps[]>([])
  const [monthYearDate, setMonthYearDate] = useState<Date>(date)
  const monthStartEnd = useMemo(
    () => ({
      start: startOfMonth(monthYearDate),
      end: endOfMonth(monthYearDate),
    }),
    [monthYearDate]
  )
  console.log('monthStartEnd', monthStartEnd)
  const monthWeeksInterval = useMemo(
    () =>
      eachWeekOfInterval(monthStartEnd, { weekStartsOn }).flatMap((weekDay) =>
        eachDayOfInterval({
          start: startOfISOWeek(weekDay),
          end: endOfISOWeek(weekDay),
        })
      ),
    [monthStartEnd, weekStartsOn]
  )

  const setHoliday = (
    holidaysArr: { [key: string]: string },
    dayDate: Date
  ) => {
    if (!holidaysArr) return null
    const isHoliday = Object.keys(holidaysArr).some((date: string) =>
      isSameDay(new Date(date), dayDate)
    )
    const formatedDayDate: string = format(dayDate, 'yyyy-MM-dd')
    return isHoliday ? holidaysArr[formatedDayDate] : null
  }

  const mappedMonth = useMemo(
    () =>
      monthWeeksInterval.map((dayDate) => ({
        date: dayDate,
        value: null,
        isToday: isToday(dayDate),
        isWeekend: isWeekend(dayDate),
        isOtherMonth: !isSameMonth(monthYearDate, dayDate),
        holiday: setHoliday(holidays!, dayDate),
      })),
    [monthYearDate, monthWeeksInterval]
  )
  useEffect(() => {
    setCalendarData(mappedMonth)

    return () => {
      setCalendarData([])
    }
  }, [mappedMonth])

  const setCalendarValue = (data: dayProps[], value: number | null) =>
    data.map((item) => {
      if (item.isOtherMonth) return item
      if (item.isWeekend) return item
      return {
        ...item,
        value: value,
      }
    })

  type dayProps = {
    date: Date
    value: number | null
    isToday: boolean
    isWeekend: boolean
    isOtherMonth: boolean
    holiday: string | null
  }

  const setDayValue = (data: dayProps) => {
    if (data.value === null) return 1
    if (data.value === 1) return 0.5
    if (data.value === 0.5) return 0
    return null
  }
  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    day: dayProps
  ) => {
    console.log(event)
    const newCalendar = calendarData?.map((data) => {
      if (data.isOtherMonth) return data
      if (isSameDay(data.date, day.date)) {
        return {
          ...day,
          value: setDayValue(data),
        }
      }
      return data
    })
    console.log(newCalendar)
    setCalendarData(newCalendar)
  }
  console.log('result => ', calendarData)
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
            font-family: inherit, sans-serif;
          }
        `}
      />
      <CalendarWrapper>
        <div>
          <Button
            color="secondary"
            onClick={() => {
              const newCalendar = setCalendarValue(calendarData, null)
              return setCalendarData(newCalendar)
            }}
          >
            reset
          </Button>
          <Button
            onClick={() => {
              const newCalendar = setCalendarValue(calendarData, 1)
              return setCalendarData(newCalendar)
            }}
          >
            all 1
          </Button>
        </div>
        <div className="calendarActionsWrapper">
          <Button
            onClick={() =>
              setMonthYearDate((state) => {
                console.log(state)
                return subMonths(startOfMonth(state), 1)
              })
            }
          >
            {`< Prev`}
          </Button>
          <div className="monthYearName">{`${format(monthYearDate, 'MMMM')} ${format(monthYearDate, 'yyyy')}`}</div>
          <Button
            onClick={() =>
              setMonthYearDate((state) => {
                return addMonths(startOfMonth(state), 1)
              })
            }
          >
            {`Next >`}
          </Button>
        </div>
        {displayWeekDays && <WeekDays weekStartsOn={weekStartsOn} />}
        <div className="monthWrapper">
          {calendarData.map((day) => (
            <DayCell
              key={day.date.toLocaleDateString()}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                onClickHandler(event, day)
              }
              dayData={day}
            />
          ))}
        </div>
      </CalendarWrapper>
    </ThemeProvider>
  )
}

export { Calendar }
