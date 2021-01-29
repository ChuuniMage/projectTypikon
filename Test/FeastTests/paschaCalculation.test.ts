import moment from 'moment';
import { convertToObject } from 'typescript'; 
//^ what exactly does this
import { paschaMoment, paschaFromChurchDay } from '../../finishedModules/feastCalculations/paschaCalculation'
import { churchMoment } from '../../finishedModules/churchMoment/churchMoment'

let pascha2020 = paschaMoment(moment().month("March").year(2020))
let pascha2021 = paschaMoment(moment().month("December").year(2020))

let paschaList = [pascha2020,pascha2021]

test('Return 2020 pascha, 6th of April, 7528', () => {
 
  console.log(paschaList[0]);
    expect(paschaList[0].date()).toEqual(6);
    expect(paschaList[0].date()).toEqual(6);
    expect(paschaList[0].date()).toEqual(6);
    expect(paschaList[0].format("MMMM")).toEqual("April");
    expect(paschaList[0].year()).toEqual(7528);
    //
});

test('Return 2020 pascha, 6th of April, 7528, from a Church Day', () => {
  let unChurchMoment = churchMoment(moment().month("March").year(2020));
  let testedDay = paschaFromChurchDay(unChurchMoment);
    expect(testedDay.date()).toEqual(6);
    expect(testedDay.format("MMMM")).toEqual("April");
    expect(testedDay.year()).toEqual(7528);
    //
});

test('Return 2016 pascha, 18th of April, 7524', () => {
  let testedMoment = paschaMoment(moment().year(2016).month("July"))
    expect(testedMoment.date()).toEqual(18);
    expect(testedMoment.format("MMMM")).toEqual("April");
    expect(testedMoment.year()).toEqual(7524);
    //
});

// test('Return 2021 pascha, 19th of April, 7529', () => {
//   console.log(paschaList[1]);
//     expect(paschaList[1].date()).toEqual(19);
//     expect(paschaList[1].date()).toEqual(19);
//     expect(paschaList[1].date()).toEqual(19);
//     expect(paschaList[1].format("MMMM")).toEqual("April");
//     expect(paschaList[1].year()).toEqual(7529);
//     //
// });

// test('Return 2021 pascha,19th of April, 7529, from a Church Day', () => {
//   let unChurchMoment = churchMoment(moment().month("December"));
//   let testedDay = paschaFromChurchDay(unChurchMoment);
//     expect(testedDay.date()).toEqual(19);
//     expect(testedDay.date()).toEqual(19);
//     expect(testedDay.date()).toEqual(19);
//     expect(testedDay.format("MMMM")).toEqual("April");
//     expect(testedDay.year()).toEqual(7529);
//     //
// });

// test('For church day of this year,')



// test('return 2000 pascha (April 23) ', () => {
//     expect(gaussPascha(moment('2000').year())).toEqual([4,23]);//[Month,Day]
//     //

// });

