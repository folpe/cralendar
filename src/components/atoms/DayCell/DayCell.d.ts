/// <reference types="react" />
interface DayData {
    date: Date;
    value: number | null;
    isToday: boolean;
    isWeekend: boolean;
    isOtherMonth: boolean;
    holiday: string | null;
}
type DayCellProps = {
    dayData: DayData;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
declare const DayCell: React.FC<DayCellProps>;
export { DayCell };
