import moment from 'moment';
import { paschaMoment } from '../../finishedModules/feastCalculations/paschaCalculation';
import { churchMonth } from '../../finishedModules/churchYearGenerator/churchMonthGenerator'

test('Test if December is Stable', () =>{
  let particularChurchMonth = new churchMonth(paschaMoment(moment()), "December");
  let churchDayArray = particularChurchMonth.churchDays
  // console.log(particularChurchMonth)
  for (let i = 0; i < churchDayArray.length; i++){
    // console.log(`${i+1}th day, year is ${churchDayArray[i].churchDayMoment.year()}`)
    expect(churchDayArray[i].churchDayMoment.year()).toBe(7529);
  }
  expect(churchDayArray[24].greatFeast).toBe('Nativity of the Lord')
})

test('Expect December to give Christmas', () =>{
  let particularChurchMonth = new churchMonth(paschaMoment(moment()), "December");
  let churchDayArray = particularChurchMonth.churchDays
  expect(churchDayArray[24].greatFeast).toBe('Nativity of the Lord')
})

// test('Console log a whole church month: January', () =>{
//   let particularChurchMonth = new churchMonth(paschaMoment(moment()), "January");
//   // console.log(particularChurchMonth)
//   expect(particularChurchMonth).not.toBe(null);
// })