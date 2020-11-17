import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchMoment } from './churchMoment';

test('churchYear() should convert current year to byzantine year BEFORE september', () => {
    expect(churchMoment(moment('2020-01-01')).year()).toBe(7528);
})

test('churchYear() should convert current year to byzantine year AFTER september', () => {

    // console.log(currentDateTime);
    // console.log(churchYear(currentDateTime));
    expect(churchMoment(moment()).year()).toBe(7529);
})

test('churchMonthAndDay() should give month and day ', () => {
    expect(churchMoment(moment("2020-11-13")).format('M D')).toBe("10 31");
})

test('churchYearMonthDay() should give church year month day', () => {
    expect(churchMoment(moment("2020-11-13")).format('YYYY M D')).toBe("7529 10 31");
})

test('churchYearMonthDay() for January 1 should give correct church year month day', () => {
    expect(churchMoment(moment('2020-01-01')).format('YYYY MM DD')).toBe("7528 12 19");
})

test('churchYearMonthDay() for January 14 should give correct church year month day', () => {
    expect(churchMoment(moment('2020-01-14')).format('YYYY MM DD')).toBe("7528 01 01");
})

test('churchYearMonthDay() for September 14 should give', () => {
    expect(churchMoment(moment('2020-09-14')).format('YYYY MM DD')).toBe("7529 09 01");
})

// test('churchTimeAndDay() should return byzantine day, +1 for after 6 PM', () => {
//     console.log(churchMoment(moment()).date());
//     expect(churchMoment(moment()).format('D, H')).toBe('25, 13')
// })