import { returnGreatFeastFromChurchDate } from "../feastCalculations/greatFeasts";
import { paschaFromByzantineYear } from "../feastCalculations/paschaDate/paschaDate"
import { returnVariableFeastFromChurchDate } from '../feastCalculations/variableFeasts'
import { returnCommemoratedSaintsFromChurchDate } from '../feastCalculations/commemoratedSaints'
import { differenceInCalendarDays, getYear, isSameDay, isBefore } from 'date-fns';

interface churchDayType {
    isPascha: boolean;
    greatFeast:string|undefined;
    variableFeast:string|undefined;
    commemoratedSaints:string[];
    churchDate:Date; // will have date, month, year, etc
    weekday:string;
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
        // Do it differently for every Post-Jan month that is before Pascha's month

        let weekdayIndex = (differenceInCalendarDays(thisYearsPascha, this.churchDate) % 7)
        
        if (isBefore(this.churchDate, thisYearsPascha)){
            //differenceInCalendarDays returns backwards dates from pascha, ie Monday->Sunday->Saturday
            // This fixes that issue
            weekdayIndex = (((weekdayIndex * -1) +7) % 7)
        }
        if (weekdayIndex < 0) {
            weekdayIndex = weekdayIndex * -1
        }
        this.weekday = weekdayArray[weekdayIndex]

        this.variableFeast = returnVariableFeastFromChurchDate(this.churchDate);
        this.greatFeast = returnGreatFeastFromChurchDate(this.churchDate);
        this.commemoratedSaints = returnCommemoratedSaintsFromChurchDate(this.churchDate);
    }
}