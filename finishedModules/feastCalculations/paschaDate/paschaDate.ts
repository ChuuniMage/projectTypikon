import { churchDate 
} from '../../churchDate/churchDate'
import {set} from 'date-fns'


//Church Day Generator must start with pascha feast

export function paschaDateFromWorldYear(inputWorldYear:number):Date{
let workedYear = inputWorldYear
// I have no idea what is being calculated 
// Part of it is equinox, part of it is full moon, part of it is jewish passover (pascha must be after jewish passover)
let a = workedYear % 4; 
let b = workedYear % 7; 
let c = workedYear % 19;
let d = (19*c + 15) % 30;
let e = (2*a + 4*b - d + 34) % 7 ;
let monthOfPascha = Math.trunc((d + e + 114) / 31);

let setMonthVar:number
    if (monthOfPascha === 4){
        setMonthVar = 3
    } else {
        setMonthVar = 4
    }
    let dateOfPascha = ((d + e + 114) % 31) + 1;
    let paschaDate = churchDate(new Date(`${inputWorldYear}-01-01`))

    return set(paschaDate, {
        date:dateOfPascha, 
        month:setMonthVar} )
}

//TODO: Algorithm to determine pascha from byzantine year
export function paschaFromByzantineYear(inputByzantineYear:number):Date{
    return paschaDateFromWorldYear(inputByzantineYear-5508)
}
