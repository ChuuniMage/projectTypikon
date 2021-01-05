import moment from 'moment';
import { churchMoment } from '../churchMoment/churchMoment';


//Church Day Generator must start with pascha feast

export function paschaMoment(inputMoment:moment.Moment):moment.Moment{
let calculatedYear = inputMoment.year();
// I have no idea what is being calculated 
// Part of it is equinox, part of it is full moon, part of it is jewish passover (pascha must be after jewish passover)
let a = calculatedYear % 4; 
let b = calculatedYear % 7; 
let c = calculatedYear % 19;
let d = (19*c + 15) % 30;
let e = (2*a + 4*b - d + 34) % 7 ;
let monthOfPascha = Math.trunc((d + e + 114) / 31);

let paschaMoment = churchMoment(inputMoment);
    if (monthOfPascha == 4){
        paschaMoment.month("April");
    } else {
        paschaMoment.month("May");
    }
    let dayOfPascha = ((d + e + 114) % 31) + 1;
    paschaMoment.date(dayOfPascha);
    return paschaMoment.clone();
}

export function paschaFromChurchDay(inputChurchDayMoment:moment.Moment):moment.Moment{
    inputChurchDayMoment.add(13, 'days')
    let isAfterSeptember = inputChurchDayMoment.month() >= 8;
    if (isAfterSeptember){ 
        inputChurchDayMoment.subtract(5509,'year');
    } else {
        inputChurchDayMoment.subtract(5508,'year');
    }
    let isAfter6PM = inputChurchDayMoment.hour() >= 18;
    if(isAfter6PM){ // Orthodox Day starts at evening
       inputChurchDayMoment.subtract(1, 'days');
    }
    return paschaMoment(inputChurchDayMoment);
}