import { paschaDateFromWorldYear } from '../../finishedModules/feastCalculations/paschaDate/paschaDate';
import { churchMonth, returnChurchWeeks} from '../../finishedModules/churchYearGenerator/churchMonthGenerator'
import { getDate, getYear } from 'date-fns'

test('Test if December is Stable', () =>{
  let particularChurchMonth = new churchMonth(paschaDateFromWorldYear(2021), "December");
  let churchDayArray = particularChurchMonth.churchDays
  for (let i = 0; i < churchDayArray.length; i++){
    expect(getYear(churchDayArray[i].churchDate)).toBe(7529);
  }
})

test('Expect December to give Christmas', () =>{
  let particularChurchMonth = new churchMonth(paschaDateFromWorldYear(2021), "December");
  let churchDayArray = particularChurchMonth.churchDays
  expect(churchDayArray[24].greatFeast).toBe('Nativity of the Lord')
})

test("Expect February to have the right leap year days", () => {
  let particularChurchMonth2020 = new churchMonth(paschaDateFromWorldYear(2020), "February")
  expect(particularChurchMonth2020.numberOfDays).toEqual(29)
  expect(particularChurchMonth2020.churchYear).toEqual(7528)
  expect(particularChurchMonth2020.churchDays.length).toEqual(29)

  let particularChurchMonth2021 = new churchMonth(paschaDateFromWorldYear(2021), "February")
  expect(particularChurchMonth2021.numberOfDays).toEqual(28)
  expect(particularChurchMonth2021.churchYear).toEqual(7529)
  expect(particularChurchMonth2021.churchDays.length).toEqual(28)
})

test("expect return church weeks to not be null", () => {
  let particularChurchMonth2020 = new churchMonth(paschaDateFromWorldYear(2020), "September")
  let testedDays = particularChurchMonth2020.churchDays
expect(returnChurchWeeks(particularChurchMonth2020.churchDays)).toEqual(
  [
    testedDays.slice(0,6),
    testedDays.slice(6,13),
    testedDays.slice(13,20),
    testedDays.slice(20,27),
    testedDays.slice(27,30)
  ])
})

test("expect january to be normal", () => {
  let particularChurchMonth2020 = new churchMonth(paschaDateFromWorldYear(2020), "January")
  let testedDays = particularChurchMonth2020.churchDays
  console.log(testedDays.map(day => `${getDate(day.churchDate)} ${day.weekday}`))
  for (let i = 0; i<testedDays.length; i++){
        
    if (testedDays[i].weekday === "Sunday" && testedDays[i+1] !== undefined){
      expect(testedDays[i+1].weekday === "Monday").toEqual(true)
    }
  }
})

