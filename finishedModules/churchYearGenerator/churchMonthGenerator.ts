import { churchDay } from './churchDayGenerator';
import { getDaysInMonth, getYear, setDate, setMonth } from 'date-fns'
import { paschaDateFromWorldYear } from '../feastCalculations/paschaDate/paschaDate';
import { churchDate } from '../churchDate/churchDate';

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
  // churchWeeks:churchDay[][];
  constructor(inputPaschaDate:Date, monthString:string){
      this.name = monthString;
      this.churchYear = getYear(inputPaschaDate)

      let workedDate = setMonth(inputPaschaDate, monthStringToNum(monthString))

      this.numberOfDays = getDaysInMonth(workedDate)
      
      let workingChurchDayList:churchDay[] = [];
      for (let i = 1; i <= this.numberOfDays; i++){
          workingChurchDayList.push(new churchDay(setDate(workedDate, i)));
      }
      this.churchDays = workingChurchDayList;
      // this.churchWeeks = returnChurchWeeks(workingChurchDayList)
  }
}

let churchWeeks_SundayStart = (inputDays:churchDay[]):churchDay[][] => {
  let weekOffset = 0;
  let monthOffset = (inputDays.length % 7)
  let numberOfweeks = Math.floor(inputDays.length / 7)
  let outputWeekArray:churchDay[][] = []
    for (let i = 0; i<numberOfweeks; i++){
      outputWeekArray.push(inputDays.slice(0+weekOffset,7+weekOffset))
      weekOffset = weekOffset + 7
    }
    if (monthOffset > 0){
      outputWeekArray.push(inputDays.slice(0+weekOffset,monthOffset+weekOffset));
      }
    return outputWeekArray
}

export let returnChurchWeeks = (inputDays:churchDay[]):churchDay[][] => {
  let outputWeekArray:churchDay[][] = []
  //If Sunday, do everything as normal
  //Offset returns the straggling end of week
  if (inputDays[0].weekday === "Sunday"){
    return churchWeeks_SundayStart(inputDays)
  }
  // if not Sunday, MAKE START WITH SUNDAY, and recall and offset, attach first week
  for (let offset:number = 1; offset<8; offset++){
    if (inputDays[offset].weekday === "Saturday"){
      outputWeekArray = returnChurchWeeks(inputDays.slice(offset+1,50))
      outputWeekArray.unshift(inputDays.slice(0,offset+1))
    }
  }
  return outputWeekArray
}