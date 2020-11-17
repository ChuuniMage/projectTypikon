import moment from 'moment';
import { convertToObject } from 'typescript';
import { churchDay } from './churchDayGenerator';

test('Church Day computes when pascha', () => {
  let particularChurchDay = new churchDay(moment("2020-04-19"));
  expect(particularChurchDay.isPascha).toBe(true);
})

test('Church Day computes when NOT pascha', () => {
  let particularChurchDay = new churchDay(moment("2020-04-20"));
  expect(particularChurchDay.isPascha).toBe(false);
})

// test('Church Day computes variable feast', () => {
//   let particularChurchDay = new churchDay(moment("2020-04-12"));
//   expect(particularChurchDay.variableFeast?.name).toBe('Palm Sunday');
// })