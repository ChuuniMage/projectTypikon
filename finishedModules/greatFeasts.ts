import moment from 'moment';
//

let greatFeastDictionary: Record<string, Record<number, string>> = {
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

export function returnGreatFeastFromChurchMoment(inputChurchMoment:moment.Moment):string|undefined{
    let monthDictionary = greatFeastDictionary[inputChurchMoment.format("MMMM")];
    let dayIndex = inputChurchMoment.date();
    return monthDictionary[dayIndex];
}
