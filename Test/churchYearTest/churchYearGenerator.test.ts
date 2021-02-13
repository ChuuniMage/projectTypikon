import { paschaDateFromWorldYear } from '../../finishedModules/feastCalculations/paschaDate/paschaDate';
import { churchYear } from '../../finishedModules/churchYearGenerator/churchYearGenerator'
import { getYear, getDate } from 'date-fns';
import { churchDate } from '../../finishedModules/churchDate/churchDate';



test('Test if paschaMoment(2020) has the right number of months:', () => {
  let particularChurchYear = new churchYear(paschaDateFromWorldYear(2020))
  expect(particularChurchYear.churchMonths.length).toBe(12);
})

test('Test if every year in paschaMoment(2020)s months is 7528:', () =>{
  let particularChurchYear = new churchYear(paschaDateFromWorldYear(2020));
  for (let i = 0; i < particularChurchYear.churchMonths.length; i++){
  let churchDayArray = particularChurchYear.churchMonths[i].churchDays
  // console.log(particularChurchYear)
    for (let i = 0; i < churchDayArray.length; i++){
      // console.log(`${i+1}th day, year is ${churchDayArray[i].churchDayMoment.year()}`)
      expect(getYear(churchDayArray[i].churchDate)).toBe(7528);
  }
}
})

// test("Expect, if there is a Sunday, the next weekday is a Monday", () => {
//   let particularChurchYear = new churchYear(paschaDateFromWorldYear(2020));
//   let particularMonths = particularChurchYear.churchMonths
//   for (let i = 0; i<particularMonths.length; i++){
//     let testedDays = particularMonths[i].churchDays
//     console.log(particularMonths[i].name)
//     console.log(testedDays.map(day => `${getDate(day.churchDate)}${day.weekday}`).join(" "))
//     for (let i = 0; i<testedDays.length; i++){
        
//       if (testedDays[i].weekday === "Sunday" && testedDays[i+1] !== undefined){
//         expect(testedDays[i+1].weekday === "Monday").toEqual(true)
//       }
//     }
//   }
// })