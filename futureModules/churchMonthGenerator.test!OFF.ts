import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchMoment } from './churchMoment';
// import { numberOfDaysInMonth } from './churchMonthGenerator';

test ('Number of days in January should be 31', () =>{
expect(moment("2020-01").daysInMonth()).toBe(31);
}); 