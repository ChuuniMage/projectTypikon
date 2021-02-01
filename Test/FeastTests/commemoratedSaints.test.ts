import { churchDate } from '../../finishedModules/churchDate/churchDate';
import { returnCommemoratedSaintsFromChurchDate } from '../../finishedModules/feastCalculations/commemoratedSaints'

test('Test September 1 Chuch Calendar(2020-09-14) is feast day of the Nativity of the Theotokos', () => {
  let testedDate = churchDate(new Date("2020-09-14"));
  expect(returnCommemoratedSaintsFromChurchDate(testedDate))
  .toEqual(['Martyrs Rufus and Rufianus', 'Martyr Severus', 'Martyr Artemidorus']);
});