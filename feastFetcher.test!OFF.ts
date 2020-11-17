import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchMoment } from './churchMoment';
import { whichFeastIsOnThisDay } from './feastFetcher';

test('Test if MasonCalendar(2020-09-21) is feast day of the Nativity of the Theotokos', () => {
    expect(whichFeastIsOnThisDay(churchMoment(moment("2020-09-21")))).toBe('Nativity of the Theotokos');
});

test('Test if MasonCalendar(2020-09-27) is feast day of the Elevation of the Holy Cross', () => {
    expect(whichFeastIsOnThisDay(churchMoment(moment("2020-09-27")))).toBe('Elevation of the Holy Cross');
});

// test('Test if Pascha is on this day in this year'. () => {
//     expect(whichFeastIsOnThisDay(churchMoment("2020")).toBe())
// })

test('Test if today has no fixed feast', () => {
    expect(whichFeastIsOnThisDay(churchMoment(moment()))).toBeNull;
});
