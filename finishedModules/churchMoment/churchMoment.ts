import * as moment from 'moment';
import Moment from 'moment';

// Make and set a locality here

// moment.defineLocale('OrthodoxChurchCalendar', {
//     months : [
//          "September", "October", "November", "December", "January", "February", 
//          "March", "April", "May", "June", "July", "August",
//     ]
// })

export const churchYear = (modernDate: moment.Moment) => {
    let isAfterSeptember = modernDate.month() >= 8;
    if (isAfterSeptember){ 
        return modernDate.add(5509,'year');
    } else {
        return modernDate.add(5508,'year');
    }
};

export const churchMonthAndDay = (modernDate: moment.Moment) => {
    return modernDate.subtract(13, 'days');
}

export const churchYearMonthDay = (modernDate: moment.Moment) => {
    return churchYear(churchMonthAndDay(modernDate));
}

export const churchDayEveningCheck = (modernDate: moment.Moment) => {
    let isAfter6PM = modernDate.hour() >= 18;
    if(isAfter6PM){ // Orthodox Day starts at evening
        return modernDate.add(1, 'days');
    }
    return modernDate;
}

//final function to export and use
export const churchMoment = (modernDate: moment.Moment) => {
    return churchDayEveningCheck(churchYearMonthDay(modernDate)).clone();
}

// export const unChurchMoment = (churchMoment: moment.Moment) => {
//     return null
// }