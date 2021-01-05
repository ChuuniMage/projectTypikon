import moment from 'moment';
import { churchDay } from './churchDayGenerator';

interface churchMonthType {
    name:string;
    churchYear:number;
    numberOfDays:number;
    churchDays:churchDay[];
}

export class churchMonth implements churchMonthType {
    name:string;
    churchYear:number;
    numberOfDays:number;
    churchDays:churchDay[];
    constructor(inputPaschaMoment:moment.Moment, monthString:string){
        this.name = monthString;
        this.churchYear = inputPaschaMoment.year();

        inputPaschaMoment.month(monthString);
        this.numberOfDays = inputPaschaMoment.daysInMonth();

        let workingChurchDayList:churchDay[] = [];
        for (let i = 1; i <= this.numberOfDays; i++){
            inputPaschaMoment.date(i);
            workingChurchDayList.push(new churchDay(inputPaschaMoment.clone()));
        }
        this.churchDays = workingChurchDayList;
    }
}

