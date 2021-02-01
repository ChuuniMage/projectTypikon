import { paschaDateFromWorldYear, paschaFromByzantineYear } from '../../../finishedModules/feastCalculations/paschaDate/paschaDate'
import { getDate, format, getYear, isSunday, Locale, differenceInCalendarDays, setDay } from 'date-fns';


test('Return 2020 pascha, 6th of April, 7528', () => {
    let testedPascha = paschaDateFromWorldYear(2020)
    expect(getDate(testedPascha)).toEqual(6);
    expect(format(testedPascha,"MMMM")).toEqual("April");
    expect(getYear(testedPascha)).toEqual(7528);
});

test('Return 2016 pascha, 18th of April, 7524', () => {
  let testedPascha = paschaDateFromWorldYear(2016)
    expect(getDate(testedPascha)).toEqual(18);
    expect(format(testedPascha,"MMMM")).toEqual("April");
    expect(getYear(testedPascha)).toEqual(7524);
    //
});

test('Return 2021 pascha', () => {
  let testedPascha = paschaDateFromWorldYear(2021)
    expect(getDate(testedPascha)).toEqual(19);
    expect(format(testedPascha,"MMMM")).toEqual("April");
    expect(getYear(testedPascha)).toEqual(7529);
    //
});

test('Return 2021 pascha, 19th of April, 7529, from a Church Year', () => {
  let testedPascha = paschaFromByzantineYear(7529)
  expect(getDate(testedPascha)).toEqual(19);
  expect(format(testedPascha,"MMMM")).toEqual("April");
  expect(getYear(testedPascha)).toEqual(7529);
});

// test("Test if pascha is sunday", () => {
//   let testedPascha = paschaDateFromWorldYear(2020)
//   console.log(format(testedPascha, 'EEEE',), getYear(testedPascha))
//   let setSunday = setDay(testedPascha, 0)
//   console.log(`Set date pascha:${format(setSunday, 'EEEE')}, ${getYear(setSunday)}`)
//   console.log(`Compare dates: 
//     Tested: ${format(testedPascha, 'yyyy MM dd EEEE')}, Forced: ${format(setSunday, 'yyyy MM dd EEEE')}`)

//   // let testedPascha2 = paschaDateFromWorldYear(2021)
//   // console.log(format(testedPascha2, 'EEEE'), getYear(testedPascha2))

//   // let testedPascha3 = paschaDateFromWorldYear(2022)
//   // console.log(format(testedPascha3, 'EEEE'), getYear(testedPascha3))

//   // let testedPascha4 = paschaDateFromWorldYear(2023)
//   // console.log(format(testedPascha4, 'EEEE'), getYear(testedPascha4))


//   expect(isSunday(testedPascha)).toBe(true)
// })

// test("test if all paschas errors are friday from 1500", () => {
//   for (let i = 2020; i<2500; i++) {
//     let workedPaschaDate = paschaDateFromWorldYear(i)
//     console.log(`${getYear(workedPaschaDate), format(workedPaschaDate, "EEEE")}`)
//     expect(format(paschaDateFromWorldYear(i), 'EEEE')).toBe("Friday")
//   }
// })