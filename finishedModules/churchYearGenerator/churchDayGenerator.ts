import moment from 'moment';
import { convertToObject } from 'typescript'; 
import { returnGreatFeastFromChurchMoment } from "../feastCalculations/greatFeasts";
import { paschaMoment, paschaFromChurchDay } from "../feastCalculations/paschaCalculation"
import { churchMoment } from '../churchMoment/churchMoment';
import { returnVariableFeastFromChurchMoment } from '../feastCalculations/variableFeasts'
import { returnCommemoratedSaintsFromChurchMoment } from '../feastCalculations/commemoratedSaints'

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


    constructor(inputChurchDayMoment: moment.Moment) {
        this.churchDayMoment = inputChurchDayMoment.clone();

        let thisYearsPascha = paschaFromChurchDay(inputChurchDayMoment).clone();
        this.isPascha = thisYearsPascha.isSame(this.churchDayMoment, 'day');

        this.variableFeast = returnVariableFeastFromChurchMoment(thisYearsPascha, this.churchDayMoment);
        this.greatFeast = returnGreatFeastFromChurchMoment(this.churchDayMoment);
        this.commemoratedSaints = returnCommemoratedSaintsFromChurchMoment(this.churchDayMoment);
    }
}