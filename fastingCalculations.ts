import moment from 'moment';
import { convertToObject } from 'typescript'; 
import { paschaMoment } from "./finishedModules/feastCalculations/paschaCalculation"
import { churchMoment } from './finishedModules/churchMoment/churchMoment';
import { churchDay } from './finishedModules/churchYearGenerator/churchDayGenerator';
import { 
  returnGreatFeastFromChurchMoment } from './finishedModules/feastCalculations/greatFeasts'

let brightWeekTitles:string[] = [
  'Bright Monday',
  'Bright Tuesday',
  'Bright Wednesday',
  'Bright Thursday',
  'Bright Friday',
  'Bright Saturday',
  'Thomas Sunday']

let testChurchDayBool = (callbackBool:Function) => (inputChurchDay:churchDay) => {
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

const wedFriBool = (churchDay:churchDay):boolean => {
  let testedMoment = churchDay.churchDayMoment
  return testedMoment.format("dddd") === 'Wednesday' || testedMoment.format("dddd") === 'Friday'
}

const sundayBool = (churchDay:churchDay):boolean => {
  let testedMoment = churchDay.churchDayMoment
  return testedMoment.format("dddd") === 'Sunday'
}

export let isBrightWeek = testChurchDayBool(brightWeekBool)
export let isMajorFeast = testChurchDayBool(majorFeastBool)
export let isWednesdayOrFriday = testChurchDayBool(wedFriBool)
export let isSunday = testChurchDayBool(sundayBool)

  





