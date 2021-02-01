import { churchDay } from './churchDayGenerator';
import { getDaysInMonth, getYear, setDate, setMonth } from 'date-fns'

interface churchMonthType {
    name:string;
    churchYear:number;
    numberOfDays:number;
    churchDays:churchDay[];
}

let monthStringToNum = (monthString:string):number => {
    let monthNumber:number = 0
    
    switch(monthString){
        case"January":
        monthNumber = 0 
            break;
        case"February":
        monthNumber =  1;
            break;
        case"March":
        monthNumber =  2;
        break;
        case"April":
        monthNumber =  3;
        break;
        case"May":
        monthNumber =  4;
        break;
        case"June":
        monthNumber =  5;
        break;
        case"July":
        monthNumber =  6;
        break;
        case"August":
        monthNumber =  7;
        break;
        case"September":
        monthNumber =  8;
        break;
        case"October":
        monthNumber =  9;
        break;
        case"November":
        monthNumber =  10;
        break;
        case"December":
        monthNumber =  11;
        break;
    }
    return monthNumber;
}

export class churchMonth implements churchMonthType {
    name:string;
    churchYear:number;
    numberOfDays:number;
    churchDays:churchDay[];
    constructor(inputPaschaDate:Date, monthString:string){
        this.name = monthString;
        this.churchYear = getYear(inputPaschaDate)

        let workedMoment = setMonth(inputPaschaDate, monthStringToNum(monthString))

        this.numberOfDays = getDaysInMonth(workedMoment)
        
        let workingChurchDayList:churchDay[] = [];
        for (let i = 1; i <= this.numberOfDays; i++){
            workingChurchDayList.push(new churchDay(setDate(workedMoment, i)));
        }
        this.churchDays = workingChurchDayList;
    }
}

