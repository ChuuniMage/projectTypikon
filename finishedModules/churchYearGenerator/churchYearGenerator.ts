import moment from 'moment';
import { churchMonth } from './churchMonthGenerator';

interface churchYearType {
    paschaMoment:moment.Moment;
    churchYearNumber:number;
    churchMonths:churchMonth[];
}

export class churchYear implements churchYearType {
    paschaMoment:moment.Moment;
    churchYearNumber:number;
    churchMonths:churchMonth[];
    constructor(inputPaschaMoment:moment.Moment){
        this.paschaMoment = inputPaschaMoment.clone();
        let monthList = [
            `September`,
            `October`,
            `November`,
            `December`,
            `January`,
            `February`,
            'March',
            `April`,
            `May`,
            `June`,
            `July`,
            `August`]
        this.churchYearNumber = inputPaschaMoment.year();
        let workingChurchMonthList:churchMonth[] = [];
        for (let i = 0; i < monthList.length; i++){
            let workedPaschaMoment = inputPaschaMoment.clone();
            let workingChurchMonth = new churchMonth(workedPaschaMoment, monthList[i]);
            workingChurchMonthList.push(workingChurchMonth);
        }
        this.churchMonths = workingChurchMonthList
    }
}