import moment from 'moment';
import { convertToObject } from 'typescript'; 
import { returnVariableFeastFromChurchMoment } from '../../finishedModules/feastCalculations/variableFeasts';
import { paschaMoment } from '../../finishedModules/feastCalculations/paschaCalculation'
import { churchMoment } from '../../finishedModules/churchMoment/churchMoment'

// test('Normie 2020 pascha April 19th is, 6th of April, 7528', () => {
//     expect(pascha2020.name).toEqual('Pascha');
//     expect(pascha2020.paschaMoment.format("MMMM")).toEqual("April");
//     expect(pascha2020.paschaMoment.date()).toEqual(6);
// });
let pascha2020 = paschaMoment(moment("2020"));

test('Normie 2020 Pascha is April 19. Expect Palm Sunday for 7528 to be March 30', () => { 
    let inputMoment = churchMoment(moment("2020-04-12"));
    expect(inputMoment.date()).toEqual(30);
    expect(inputMoment.format("MMMM")).toEqual('March');
    expect(returnVariableFeastFromChurchMoment(pascha2020,inputMoment)).toEqual('Palm Sunday');
})

test('Normie 2020 Pascha is April 19. Expect Great Saturday for 7528 to be April 5th', () => {
    let inputMoment = churchMoment(moment("2020-04-18"));
    expect(inputMoment.date()).toEqual(5);
    expect(inputMoment.format("MMMM")).toEqual('April');
    expect(returnVariableFeastFromChurchMoment(pascha2020,inputMoment)).toEqual('Great and Holy Saturday');
})

test('Normie 2020 Pascha is April 19. Expect Bright Monday for 7528 to be April 7th', () => {
    let inputMoment = churchMoment(moment("2020-04-20"));
    expect(inputMoment.date()).toEqual(7);
    expect(inputMoment.format("MMMM")).toEqual('April');
    expect(returnVariableFeastFromChurchMoment(pascha2020,inputMoment)).toEqual('Bright Monday');
})


test('Normie 2020 Pascha is April 19. Expect Thomas Sunday for 7528 to be April 13', () => { 
    let inputMoment = churchMoment(moment("2020-04-26"));
    expect(inputMoment.date()).toEqual(13);
    expect(inputMoment.format("MMMM")).toEqual('April');
    expect(returnVariableFeastFromChurchMoment(pascha2020,inputMoment)).toEqual('Thomas Sunday');
})

test('Normie 2020 Pascha is April 19. Expect Bright Tuesday for 7528 to be April 8', () => { 
    let inputMoment = churchMoment(moment("2020-04-21"));
    expect(inputMoment.date()).toEqual(8);
    expect(inputMoment.format("MMMM")).toEqual('April');
    expect(returnVariableFeastFromChurchMoment(pascha2020,inputMoment)).toEqual('Bright Tuesday');
})