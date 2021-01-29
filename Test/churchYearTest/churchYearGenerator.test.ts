import moment from 'moment';
import { paschaMoment } from '../../finishedModules/feastCalculations/paschaCalculation';
import { churchYear } from '../../finishedModules/churchYearGenerator/churchYearGenerator'



test('Test if paschaMoment(2020) has the right number of months:', () => {
  let particularChurchYear = new churchYear(paschaMoment(moment().month("February")))
  expect(particularChurchYear.churchMonths.length).toBe(12);
})

test('Test if every year in paschaMoment(2020)s months is 7528:', () =>{
  let particularChurchYear = new churchYear(paschaMoment(moment().month("February").year(2020)));
  for (let i = 0; i < particularChurchYear.churchMonths.length; i++){
  let churchDayArray = particularChurchYear.churchMonths[i].churchDays
  // console.log(particularChurchYear)
    for (let i = 0; i < churchDayArray.length; i++){
      // console.log(`${i+1}th day, year is ${churchDayArray[i].churchDayMoment.year()}`)
      expect(churchDayArray[i].churchDayMoment.year()).toBe(7528);
  }
}
})