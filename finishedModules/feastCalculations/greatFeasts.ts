import {format, getDate} from 'date-fns';

export let greatFeastDictionary: Record<string, Record<number, string>> = {
    "September": {
        8: 'Nativity of the Theotokos',
        14: 'Elevation of the Holy Cross'
    },
    "November": {
        21: "Presentation of the Theotokos"
    },
    "December": {
        25: "Nativity of the Lord"
    },
    "January": {
        6: "Theophany"
    },
    "February": {
        2: "Presentation of the Lord"
    },
    "March": {
        25: "Annunciation"
    },
    "August":{
        6: "Transfiguration",
        15: "Dormition of the Theotokos"
    },
}

export function returnGreatFeastFromChurchDate(inputChurchDate:Date):string|undefined{
    let monthDictionary = greatFeastDictionary[format(inputChurchDate,"MMMM")];
    if (monthDictionary == undefined){
        return undefined
    }
    let dayIndex = getDate(inputChurchDate);
    return monthDictionary[dayIndex];
}
