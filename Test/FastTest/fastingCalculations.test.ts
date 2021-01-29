import moment from 'moment';
import { convertToObject } from 'typescript';
import { isBrightWeek } from '../../fastingCalculations';
import { paschaMoment } from '../../finishedModules/feastCalculations/paschaCalculation';
import { churchYear } from '../../finishedModules/churchYearGenerator/churchYearGenerator'



test('Test all days in April ', () => {
  let newPaschaMoment = paschaMoment(moment().month("February").year(2020));
  let particularChurchYear = new churchYear(newPaschaMoment);
  let testedApril = particularChurchYear.churchMonths[7];
  expect(testedApril.name).toBe('April');
  expect(newPaschaMoment.format('MM DD')).toBe("04 06")
  expect(isBrightWeek(testedApril.churchDays[0])).toBe(false)
})

