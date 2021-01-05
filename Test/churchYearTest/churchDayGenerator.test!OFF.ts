import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchDay } from '../../finishedModules/churchYearGenerator/churchDayGenerator';
import { churchMoment } from '../../finishedModules/churchMoment/churchMoment'

test('Console log the church moment', () => {
  let newLoggedChurchDay = new churchDay(moment());
  expect(newLoggedChurchDay).not.toBe(null);
})

test('Church Day computes when pascha', () => {
  let particularChurchDay = new churchDay(churchMoment(moment("2020-04-19")));
  expect(particularChurchDay.isPascha).toBe(true);
})

test('Church Day computes when NOT pascha', () => {
  let particularChurchDay = new churchDay(churchMoment(moment("2020-04-20")));
  expect(particularChurchDay.isPascha).toBe(false);
})

test('Church Day computes variable feast: Palm Sunday', () => {
  let particularChurchDay = new churchDay(churchMoment(moment("2020-04-12")));
  expect(particularChurchDay.variableFeast).toBe('Palm Sunday');
})

test('Church Year remains stable throughout year, from September to August', () => {
  for (let i = 0; i < 365; i++){
    let particularChurchDay = new churchDay(churchMoment(moment(`2020-09-14`).add(i, 'days')));
    expect(particularChurchDay.churchDayMoment.year()).toBe(7529)
  }
})



