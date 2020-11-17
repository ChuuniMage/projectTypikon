import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchYear, churchMonthAndDay, churchYearMonthDay, churchDayEveningCheck, churchMoment } from './churchMoment';


test('Test what the weekday is', () => {
    let currentDateTime = moment().subtract(1, 'year');
    expect(churchMoment(currentDateTime).format('dddd')).toBe("Tuesday");
});

// test('churchYear() should convert current year to byzantine year BEFORE september', () => {

//     let currentDateTime = moment('2020-01-01');
//     expect(churchYear(currentDateTime).year()).toBe(7528);
// })

// test('churchYear() should convert current year to byzantine year AFTER september', () => {

//     let currentDateTime = moment();
//     expect(churchYear(currentDateTime).year()).toBe(7529);
// })

// test('churchYearMonthDay() for January 1 should give correct church year month day', () => {
//     let testTime = churchYearMonthDay(moment('2020-01-01'));
//     expect(testTime.format('YYYY MM DD')).toBe("7528 12 19");
// })

// test('churchYearMonthDay() for January 14 should give correct church year month day', () => {
//     let testTime = churchYearMonthDay(moment('2020-01-14'));
//     expect(testTime.format('YYYY MM DD')).toBe("7528 01 01");
// })

// test('churchYearMonthDay() for September 14 should give', () => {
//     let testTime = churchYearMonthDay(moment('2020-09-14'));
//     expect(testTime.format('YYYY MM DD')).toBe("7529 09 01");
// })