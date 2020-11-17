import moment from 'moment';
import { convertToObject } from 'typescript'; 
import { returnGreatFeastFromChurchMoment } from "./finishedModules/greatFeasts";
import { paschaCalculation, } from "./finishedModules/paschaCalculation"
import { churchMoment } from './finishedModules/churchMoment';
import { returnVariableFeastFromChurchMoment } from './finishedModules/variableFeasts'
import { returnCommemoratedSaintsFromChurchMoment } from './dataEntryNeeded/commemoratedSaints'

interface churchDayType {
    isPascha: boolean;
    greatFeast:string|undefined;
    variableFeast:string|undefined;
    commemoratedSaints:string[];
    churchDayMoment:moment.Moment; // will have date, month, year, etc
}

export class churchDay implements churchDayType {
    public churchDayMoment: moment.Moment;
    public isPascha: boolean;
    public variableFeast: string | undefined = undefined;

    public greatFeast: string | undefined = undefined;
    public commemoratedSaints: string[];


    constructor(normieDayMoment: moment.Moment) {
        this.churchDayMoment = churchMoment(normieDayMoment.clone());

        let thisYearsPascha = paschaCalculation(normieDayMoment.clone());
        this.isPascha = thisYearsPascha.isSame(this.churchDayMoment, 'day');

        this.variableFeast = returnVariableFeastFromChurchMoment(thisYearsPascha, this.churchDayMoment,);
        this.greatFeast = returnGreatFeastFromChurchMoment(this.churchDayMoment);
        this.commemoratedSaints = returnCommemoratedSaintsFromChurchMoment(this.churchDayMoment);
    }
}



interface churchMonth {
    name:string;
    numberOfDays:number;
    churchDays:churchDay[];
}

interface churchYear {
    numberOfYear:number;
    numberOfChurchYear:number;
    churchMonths:churchMonth[];
}