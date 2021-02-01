import {churchDate} from '../../finishedModules/churchDate/churchDate'
import { getYear, format,setHours} from 'date-fns';

test('churchDate() for January 1 should give correct church year month day', () => {
    let testedDate = churchDate(new Date("2020-01-01"))
    expect(format(testedDate, 'yyyy MM dd')).toBe("7528 12 19");
})

test('churchDate() for January 14 should give correct church year month day', () => {
    let testedDate = churchDate(new Date("2020-01-14"))
    expect(format(testedDate, 'yyyy MM dd')).toBe("7528 01 01");
})

test('churchDate() should convert current year to byzantine year BEFORE september', () => {
    let testedDate = churchDate(new Date("2020-09-01"))
    expect(getYear(testedDate)).toBe(7528);
})

test('churchDate() should convert current year to byzantine year AFTER september', () => {
    let testedDate = churchDate(new Date("2020-09-14"))
    expect(getYear(testedDate)).toBe(7529);
})

test('churchDate() should return byzantine day, +1 for after 6 PM', () => {
    let testedDate = churchDate(setHours(new Date("2020-01-14"), 18))
    expect(format(testedDate, 'yyyy MM dd')).toBe("7528 01 02");
})