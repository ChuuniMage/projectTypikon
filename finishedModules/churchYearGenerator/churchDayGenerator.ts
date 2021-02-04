import { returnGreatFeastFromChurchDate } from "../feastCalculations/greatFeasts";
import { paschaFromByzantineYear } from "../feastCalculations/paschaDate/paschaDate"
import { returnVariableFeastFromChurchDate } from '../feastCalculations/variableFeasts'
import { returnCommemoratedSaintsFromChurchDate } from '../feastCalculations/commemoratedSaints'
import { differenceInCalendarDays, getYear, isSameDay } from 'date-fns';

interface churchDayType {
    isPascha: boolean;
    greatFeast:string|undefined;
    variableFeast:string|undefined;
    commemoratedSaints:string[];
    churchDate:Date; // will have date, month, year, etc
}

type weekDay = "Sunday" 
| "Monday" 
| "Tuesday" 
| "Wednesday" 
| "Thursday"
| "Friday"
| "Saturday"

let weekdayArray:string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

export class churchDay implements churchDayType {
    public churchDate: Date;
    public isPascha: boolean;
    public variableFeast: string | undefined = undefined;
    public weekday:string;
    public greatFeast: string | undefined = undefined;
    public commemoratedSaints: string[];


    constructor(inputChurchDate: Date) {
        this.churchDate = inputChurchDate;

        let thisYearsPascha = paschaFromByzantineYear(getYear(inputChurchDate));
        this.isPascha = isSameDay(thisYearsPascha,inputChurchDate)

        let weekdayIndex = (differenceInCalendarDays(thisYearsPascha, this.churchDate) % 7)
        if (weekdayIndex < 0) {
            weekdayIndex = weekdayIndex * -1
        }
        this.weekday = weekdayArray[weekdayIndex]

        this.variableFeast = returnVariableFeastFromChurchDate(this.churchDate);
        this.greatFeast = returnGreatFeastFromChurchDate(this.churchDate);
        this.commemoratedSaints = returnCommemoratedSaintsFromChurchDate(this.churchDate);
    }
}