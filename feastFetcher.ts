import moment from 'moment';
//
import { FeastType } from './finishedModules/feastType';
import { variableFeastList, variableFeast, returnVariableFeastMoment } from './variableFeasts';
import { greatFeastList, greatFeast } from '../dataEntryNeeded/greatFeasts';
import { paschaFeast, pascha2020 } from './finishedModules/paschaCalculation'

type feastFetchable = paschaFeast | variableFeast | greatFeast;

export const whichVariableFeastIsOnThisDay = (feastDayMoment: moment.Moment, feastList:variableFeast[]) => {
    for(var feast in feastList){
        let doesFeastDateMatch = (feastDayMoment.date() == returnVariableFeastMoment(pascha2020, feastList[feast]).date()) 
        && (feastDayMoment.format("MMMM") == returnVariableFeastMoment(pascha2020, feastList[feast]).format("MMMM"));
            if (doesFeastDateMatch){
                return feastList[feast];
    }
}
    return null;
}