import { churchDay } from '../finishedModules/churchYearGenerator/churchDayGenerator';

let brightWeekTitles:string[] = [
  'Bright Monday',
  'Bright Tuesday',
  'Bright Wednesday',
  'Bright Thursday',
  'Bright Friday',
  'Bright Saturday',
  'Thomas Sunday']

let testChurchDayBool = (callbackBool:Function) => (inputChurchDay:churchDay):boolean => {
    return(callbackBool(inputChurchDay))
  }

const brightWeekBool = (churchDay:churchDay):boolean => {
    if(churchDay.variableFeast != undefined){
      return brightWeekTitles.includes(churchDay.variableFeast)
    }
      return false;
    }
    
const majorFeastBool = (churchDay:churchDay):boolean => {
  return churchDay.greatFeast != undefined;
}

const wedBool = (churchDay:churchDay):boolean => {
  let testedDay = churchDay.weekday
  return testedDay === "Wednesday"
}

const friBool = (churchDay:churchDay):boolean => {
  let testedDay = churchDay.weekday
  return testedDay === "Friday"
}

const sundayBool = (churchDay:churchDay):boolean => {
  let testedDay = churchDay.weekday
  return testedDay === "Sunday"
}

export let testIfChurchDay = {
  isBrightWeek: testChurchDayBool(brightWeekBool)
  ,
  isMajorFeast: testChurchDayBool(majorFeastBool)
  ,
  isWednesday: testChurchDayBool(wedBool)
  ,
  isFriday: testChurchDayBool(friBool)
  ,
  isSunday: testChurchDayBool(sundayBool)
  ,
}


