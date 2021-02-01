import {returnVariableFeastFromChurchDate } from '../../finishedModules/feastCalculations/variableFeasts';
import {churchDate } from '../../finishedModules/churchDate/churchDate'
import {format, getDate } from 'date-fns'

test('Normie 2020 Pascha is April 19. Expect Palm Sunday for 7528 to be March 30', () => { 
    let testedDate = churchDate(new Date("2020-04-12"));
    expect(getDate(testedDate)).toEqual(30);
    expect(format(testedDate, "MMMM")).toEqual('March');
    expect(returnVariableFeastFromChurchDate(testedDate)).toEqual('Palm Sunday');
})

test('Normie 2020 Pascha is April 19. Expect Great Saturday for 7528 to be April 5th', () => {
    let testedDate = churchDate(new Date("2020-04-18"));
    expect(getDate(testedDate)).toEqual(5);
    expect(format(testedDate, "MMMM")).toEqual('April');
    expect(returnVariableFeastFromChurchDate(testedDate)).toEqual('Great and Holy Saturday');
})

test('Normie 2020 Pascha is April 19. Expect Bright Monday for 7528 to be April 7th', () => {
    let testedDate = churchDate(new Date("2020-04-20"));
    expect(getDate(testedDate)).toEqual(7);
    expect(format(testedDate, "MMMM")).toEqual('April');
    expect(returnVariableFeastFromChurchDate(testedDate)).toEqual('Bright Monday');
})


test('Normie 2020 Pascha is April 19. Expect Thomas Sunday for 7528 to be April 13', () => { 
    let testedDate = churchDate(new Date("2020-04-26"));
    expect(getDate(testedDate)).toEqual(13);
    expect(format(testedDate, "MMMM")).toEqual('April');
    expect(returnVariableFeastFromChurchDate(testedDate)).toEqual('Thomas Sunday');
})

test('Normie 2020 Pascha is April 19. Expect Bright Tuesday for 7528 to be April 8', () => { 
    let testedDate = churchDate(new Date("2020-04-21"));
    expect(getDate(testedDate)).toEqual(8);
    expect(format(testedDate, "MMMM")).toEqual('April');
    expect(returnVariableFeastFromChurchDate(testedDate)).toEqual('Bright Tuesday');
})