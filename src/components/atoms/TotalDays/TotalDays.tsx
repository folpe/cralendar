import { TotalDaysBase } from './TotalDays.styles'

type TotalDaysProps = {
  label: string
  days: number
  className?: string
}
const TotalDays: React.FC<TotalDaysProps> = ({ label, days, className }) => {
  return (
    <TotalDaysBase className={className}>
      <div className="label">{label}</div>
      <div className="number">{days}</div>
    </TotalDaysBase>
  )
}

export { TotalDays }
