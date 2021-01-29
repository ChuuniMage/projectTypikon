import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchMoment } from '../../finishedModules/churchMoment/churchMoment';
import { returnGreatFeastFromChurchMoment } from '../../finishedModules/feastCalculations/greatFeasts';

test('Test if MasonCalendar(2020-09-21) is feast day of the Nativity of the Theotokos', () => {
    expect(returnGreatFeastFromChurchMoment(churchMoment(moment("2020-09-21")))).toBe('Nativity of the Theotokos');
});

test('Test if MasonCalendar(2020-09-27) is feast day of the Elevation of the Holy Cross', () => {
    expect(returnGreatFeastFromChurchMoment(churchMoment(moment("2020-09-27")))).toBe('Elevation of the Holy Cross');
});

// test('Test if today has no fixed feast', () => {
//     expect(whichFixedFeast(churchMoment(moment()))).toBeNull;
// });