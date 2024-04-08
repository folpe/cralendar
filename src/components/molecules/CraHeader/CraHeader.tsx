import { StyledCraHeader } from './CraHeader.styles'
import { TotalDays } from '../../atoms/TotalDays'
import { totalsCalculator } from './CraHeader.helpers'
import { Button } from '../../atoms/Button'
import { CalendarData } from '../../organisms/Calendar/Calendar'

type CraHeaderProps = {
  calendarData: CalendarData[]
  isHolidays?: boolean
  isPrevNextMonth?: boolean
  prevMonthFn: () => void
  nextMonthFn: () => void
}

const CraHeader: React.FC<CraHeaderProps> = ({
  calendarData,
  isPrevNextMonth = true,
  isHolidays = false,
  prevMonthFn,
  nextMonthFn,
}) => {
  const {
    totalMonthDays,
    totalMonthBusinessDays,
    totalMonthHolidays,
    totalWorkedDays,
    totalRestDays,
    monthName,
    monthNumber,
  } = totalsCalculator(calendarData)

  return (
    <StyledCraHeader>
      <div className="dateWrapper">
        {isPrevNextMonth && (
          <Button color="inherit" onClick={prevMonthFn}>
            {'<'}
          </Button>
        )}
        <div className="date">
          <div className="monthName">{monthName}</div>
          <div className="yearNumber">{monthNumber}</div>
        </div>
        {isPrevNextMonth && (
          <Button color="inherit" onClick={nextMonthFn}>
            {'>'}
          </Button>
        )}
      </div>
      <div className="totalsWrapper">
        <TotalDays
          className="totalDays"
          label={'Total'}
          days={totalMonthDays}
        />
        {isHolidays && (
          <TotalDays
            className="holiDays"
            label={'Fériés'}
            days={totalMonthHolidays}
          />
        )}
        <TotalDays
          className="businessDays"
          label={'Ouvrés'}
          days={totalMonthBusinessDays}
        />
        <TotalDays
          className="workedDays"
          label={'Travaillés'}
          days={totalWorkedDays}
        />
        <TotalDays className="restDays" label={'Repos'} days={totalRestDays} />
      </div>
    </StyledCraHeader>
  )
}

export { CraHeader }
