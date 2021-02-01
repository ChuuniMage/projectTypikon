import { churchDay } from '../../finishedModules/churchYearGenerator/churchDayGenerator';
import { churchDate } from '../../finishedModules/churchDate/churchDate'
import { addDays, getYear, differenceInCalendarDays } from 'date-fns';

// test('Console log the church moment', () => {
//   let newLoggedChurchDay = new churchDay(churchDate(new Date("2020-01-01")));
//   expect(newLoggedChurchDay).not.toBe(null);
// })

test('Church Day computes when pascha', () => {
  let testedPascha = new churchDay(churchDate(new Date("2020-04-19")));
  expect(testedPascha.weekday).toBe("Sunday");
  expect(testedPascha.isPascha).toBe(true);
})

test('Church Day computes when NOT pascha', () => {
  let particularChurchDay = new churchDay(churchDate(new Date("2020-04-20")));
  expect(particularChurchDay.weekday).toBe("Monday");
  expect(particularChurchDay.isPascha).toBe(false);
})

test('Church Day computes variable feast: Palm Sunday', () => {
  let particularChurchDay = new churchDay(churchDate(new Date("2020-04-12")));
  expect(particularChurchDay.variableFeast).toBe('Palm Sunday');
})

test('Church Year remains stable throughout year, from September to August', () => {
  for (let i = 0; i < 365; i++){
    let particularChurchDay = new churchDay(churchDate(addDays(new Date(`2020-09-14`), i)));
    expect(getYear(particularChurchDay.churchDate)).toBe(7529)
  }
})
