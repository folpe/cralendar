import { format } from 'date-fns'
import { StyledDayCell } from './DayCell.styles'
import classNames from 'classnames'

interface DayData {
  date: Date
  value: number | null
  isToday: boolean
  isWeekend: boolean
  isOtherMonth: boolean
  holiday: string | null
}
type DayCellProps = {
  dayData: DayData
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DayCell: React.FC<DayCellProps> = ({ dayData, onClick }) => {
  const buttonClass = classNames('dayCell', {
    today: dayData.isToday,
    weekend: dayData.isWeekend,
    otherMonth: dayData.isOtherMonth,
    holiday: dayData.holiday,
    active: dayData.value === 1,
    'active half': dayData.value === 0.5,
    'active empty': dayData.value === 0,
  })

  const isDisabled = dayData.isWeekend || dayData.isOtherMonth
  const dayHolidayInfo = dayData.holiday ? dayData.holiday : ''
  return (
    <StyledDayCell
      className={buttonClass}
      disabled={isDisabled}
      title={dayHolidayInfo}
      onClick={onClick}
    >
      <span className="day">{format(dayData.date, 'dd')}</span>
      <div className="indicators">
        {dayData.isToday && <span className="todayMark"></span>}
        {dayData.holiday && (
          <span className="holidayMark" title={dayData.holiday}></span>
        )}
      </div>
    </StyledDayCell>
  )
}

export { DayCell }
