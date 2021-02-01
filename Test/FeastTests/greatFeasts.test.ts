import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchDate } from '../../finishedModules/churchDate/churchDate';
import { returnGreatFeastFromChurchDate } from '../../finishedModules/feastCalculations/greatFeasts';

test('Test if MasonCalendar(2020-09-21) is feast day of the Nativity of the Theotokos', () => {
    expect(returnGreatFeastFromChurchDate(churchDate(new Date("2020-09-21")))).toBe('Nativity of the Theotokos');
});

test('Test if MasonCalendar(2020-09-27) is feast day of the Elevation of the Holy Cross', () => {
    expect(returnGreatFeastFromChurchDate(churchDate(new Date("2020-09-27")))).toBe('Elevation of the Holy Cross');
});