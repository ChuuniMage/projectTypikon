import { paschaDateFromWorldYear } from '../../finishedModules/feastCalculations/paschaDate/paschaDate';
import { churchMonth } from '../../finishedModules/churchYearGenerator/churchMonthGenerator'
import { getYear } from 'date-fns'

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