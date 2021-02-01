import { getYear } from 'date-fns'
import { churchMonth } from './churchMonthGenerator';

interface churchYearType {
    paschaDate:Date;
    churchYearNumber:number;
    churchMonths:churchMonth[];
}

export class churchYear implements churchYearType {
    paschaDate:Date;
    churchYearNumber:number;
    churchMonths:churchMonth[];
    constructor(inputPaschaDate:Date){
        this.paschaDate = inputPaschaDate;
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
        this.churchYearNumber = getYear(inputPaschaDate);
        let workingChurchMonthList:churchMonth[] = [];
        for (let i = 0; i < monthList.length; i++){
            let workingChurchMonth = new churchMonth(this.paschaDate, monthList[i]);
            workingChurchMonthList.push(workingChurchMonth);
        }
        this.churchMonths = workingChurchMonthList
    }
}