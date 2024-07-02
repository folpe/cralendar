import { StyledCraHeader } from './CraHeader.styles'
import { TotalDays } from '../../atoms/TotalDays'
import { dateData } from './CraHeader.helpers'
import { Button } from '../../atoms/Button'

type CraHeaderProps = {
  currentMonthDate: Date
  totalMonthDays: number
  totalMonthBusinessDays: number
  totalMonthHolidays: number
  totalWorkedDays: number
  totalRestDays: number
  displayHolidays?: boolean
  displayPrevNextMonth?: boolean
  onChangeMonth: (action: 'previous' | 'next') => void
}

const CraHeader: React.FC<CraHeaderProps> = ({
  currentMonthDate = new Date(),
  totalMonthDays = 0,
  totalMonthBusinessDays = 0,
  totalMonthHolidays = 0,
  totalWorkedDays = 0,
  totalRestDays = 0,
  displayHolidays = true,
  displayPrevNextMonth = false,
  onChangeMonth,
}) => {
  const prevClickHander = () => {
    onChangeMonth('previous')
  }
  const nextClickHander = () => {
    onChangeMonth('next')
  }

  const { monthName, yearNumber } = dateData(currentMonthDate)

  return (
    <StyledCraHeader>
      <div className="dateWrapper">
        {displayPrevNextMonth && (
          <Button color="inherit" onClick={prevClickHander}>
            {'<'}
          </Button>
        )}
        <div className="date">
          <div className="monthName">{monthName}</div>
          <div className="yearNumber">{yearNumber}</div>
        </div>
        {displayPrevNextMonth && (
          <Button color="inherit" onClick={nextClickHander}>
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
        {displayHolidays && (
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
