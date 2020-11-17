import moment from 'moment';
import { convertToObject } from 'typescript'; 
//^ what exactly does this
import { paschaList } from './paschaCalculation'

test('Return 2020 pascha, 6th of April, 7528', () => {
  //  expect(gaussPascha(moment().year())).toEqual([4,19]);
  console.log(paschaList[0].paschaMoment);
    expect(paschaList[0].paschaMoment.date()).toEqual(6);
    expect(paschaList[0].paschaMoment.date()).toEqual(6);
    expect(paschaList[0].paschaMoment.date()).toEqual(6);
    expect(paschaList[0].paschaMoment.format("MMMM")).toEqual("April");
    expect(paschaList[0].paschaMoment.year()).toEqual(7528);
    expect(paschaList[0].name).toEqual('Pascha');
    //
});

// test('Return 2016 pascha, 18th of April, 7524', () => {
//   //  expect(gaussPascha(moment().year())).toEqual([4,19]);
//     expect(paschaList[1].feastMoment.date()).toEqual(18);
//     expect(paschaList[1].feastMoment.format("MMMM")).toEqual("April");
//     expect(paschaList[1].feastMoment.year()).toEqual(7524);
//     expect(paschaList[1].name).toEqual('Pascha');
//     //
// });

// test('return 2000 pascha (April 23) ', () => {
//     expect(gaussPascha(moment('2000').year())).toEqual([4,23]);//[Month,Day]
//     //

// });

