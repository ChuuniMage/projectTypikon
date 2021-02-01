import {addDays, addYears, getHours, getMonth, subDays} from 'date-fns'

let churchYearsAdjust = (inputDate:Date) => {
  let isAfterSeptember = getMonth(inputDate) >= 8
    if (isAfterSeptember){ 
      return addYears(inputDate, 5509);
  } else {
      return addYears(inputDate, 5508);
  }
}

const churchDaysAdjust = (inputDate: Date) => {
    return subDays(inputDate, 13);
}

// check evening
const churchEveningCheck = (inputDate:Date) => {
    let isAfter6PM = getHours(inputDate) >= 18;
    if(isAfter6PM){ // Orthodox Day starts at evening
        return addDays(inputDate, 1);
    }
    return inputDate;
}

//final function to export and use
export const churchDate = (inputDate:Date) => {
    return churchEveningCheck(churchYearsAdjust(churchDaysAdjust(inputDate)));
}

// export const unChurchDate = (churchMoment: moment.Moment) => {
//     return null
// }