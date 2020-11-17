import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchMoment } from '../finishedModules/churchMoment';
import { returnCommemoratedSaintsFromChurchMoment } from './commemoratedSaints'

test('Test September 1 Chuch Calendar(2020-09-14) is feast day of the Nativity of the Theotokos', () => {
  let inputMoment = churchMoment(moment("2020-09-14"));
  expect(returnCommemoratedSaintsFromChurchMoment(inputMoment))
  .toEqual(['Martyrs Rufus and Rufianus', 'Martyr Severus', 'Martyr Artemidorus']);
});