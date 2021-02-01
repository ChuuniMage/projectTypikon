import {format } from 'date-fns'
import { paschaDateFromWorldYear } from '../../finishedModules/feastCalculations/paschaDate/paschaDate';
import { churchYear } from '../../finishedModules/churchYearGenerator/churchYearGenerator'
import { churchDay } from '../../finishedModules/churchYearGenerator/churchDayGenerator'
import { testIfChurchDay } from '../../WIPmodules/fastingCalculations'

test('test if pascha is sunday', () => {
  let paschaDay = new churchDay(paschaDateFromWorldYear(2020));
  expect(testIfChurchDay.isSunday(paschaDay)).toEqual(true);
  // let newChurchYear = new churchYear(paschaDate)
  // let currentPaschaDay = newChurchYear.paschaDate
  // expect(testIfChurchDay.isSunday).toBe(true)
})

// test('Test all days in April ', () => {
//   let paschaDate = paschaDateFromWorldYear(2020);
//   let particularChurchYear = new churchYear(paschaDate);
//   let testedApril = particularChurchYear.churchMonths[7];
//   expect(testedApril.name).toBe('April');
//   expect(format(paschaDate,'MM dd')).toBe("04 06")
//   expect(testIfChurchDay.isBrightWeek(testedApril.churchDays[0])).toBe(false)
// })

