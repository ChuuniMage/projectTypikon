import moment from 'moment';
import { churchMoment } from './churchMoment';


//Church Day Generator must start with pascha feast

export function paschaCalculation(inputMoment:moment.Moment):moment.Moment{
let calculatedYear = inputMoment.year();
// I have no idea what is being calculated 
// Part of it is equinox, part of it is full moon, part of it is jewish passover (pascha must be after jewish passover)
let a = calculatedYear % 4; 
let b = calculatedYear % 7; 
let c = calculatedYear % 19;
let d = (19*c + 15) % 30;
let e = (2*a + 4*b - d + 34) % 7 ;
let monthOfPascha = Math.trunc((d + e + 114) / 31);

inputMoment = churchMoment(inputMoment);
    if (monthOfPascha == 4){
        inputMoment.month("April");
    } else {
        inputMoment.month("May");
    }
    let dayOfPascha = ((d + e + 114) % 31) + 1;
    inputMoment.date(dayOfPascha);
    return inputMoment.clone();
}