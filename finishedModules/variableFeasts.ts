import moment from 'moment';
//52 Sundays of the church year

let prePaschaVariableSundays: Record<number, string> = {
    7: 'Palm Sunday', // 1st Sunday Before Pascha
    14: 'Sunday of St. Mary of Egypt', // 2nd Sunday Before Pascha
    21: 'Sunday of St. John Climacus', // 3rd Sunday Before Pascha
    28: 'Sunday of the Holy Cross', // 4th Sunday Before Pascha
    35: 'Sunday of St Gregory Palamas', // 5th Sunday Before Pascha, 2nd Sunday of Lent
    42: 'Feast of Orthodoxy', // 6th Sunday Before Pascha, 1st Sunday of Lent
    49: 'Sunday of Forgiveness (Cheese-Fare Sunday)', // 7th Sunday Before Pascha
    56: 'Sunday of Last Judgement (Meat-Fare Sunday)', // 8th Sunday Before Pascha
    63: 'Sunday of the Prodigal Son', // 9th Sunday Before Pascha
    70: 'Publican & Pharisee Sunday', // 10th Sunday Before Pascha
    77: 'Zacchaeus Sunday' // 11th Sunday Before Pascha
} 

let prePaschaVariableOtherDays: Record<number, string> = {
    1: 'Great and Holy Saturday',
    2: 'Great and Holy Friday',
    3: 'Great and Holy Thursday',
    4: 'Great and Holy Wednesday',
    5: 'Great and Holy Tuesday',
    6: 'Great and Holy Monday',
    8: 'Lazarus Saturday',
    22: 'Saturday of the Akathist',
    29: 'Saturday of Souls', // Holy Cross Saturday
    36: 'Saturday of Souls', // Gregory Palamas Saturday
    43: 'St. Theodore Saturday',
    48: 'Clean Monday',
    57: 'Saturday of Souls',
};

//Complete
let postPaschaVariableSundays: Record<number, string> = {
    7: 'Thomas Sunday', //2nd Sunday of Pascha
    14: 'Sunday of the Myrrh-Bearing Women', //3rd Sunday of Pascha
    21: 'Sunday of the Paralytic', //4th Sunday of Pascha
    28: 'Sunday of the Samaritan Woman', //5th Sunday of Pascha
    35: 'Sunday of the Blind Man', // 6th Sunday of Pascha
    42: 'Sunday of the Holy Fathers of the First Ecumenical Council', // 7th Sunday of Pascha,
    49: 'Pentecost (Trinity Sunday)', // Major
    56: 'Sunday of All Saints', // 1st Sunday After Pentecost
    63: '2nd Sunday after Pentecost', //2nd Sunday After Pentecost, All Saints of Russia etc
    70: '3rd Sunday after Pentecost', //3rd Sunday After Pentecist, All Saints of Poland
    77: '4th Sunday after Pentecost', //4th
    84: '5th Sunday after Pentecost', //5th..
    91: '6th Sunday after Pentecost',
    98: '7th Sunday after Pentecost',
    105: '8th Sunday after Pentecost',
    112: '9th Sunday after Pentecost',
    119: '10th Sunday after Pentecost',
    126: '11th Sunday after Pentecost',
    133: '12th Sunday after Pentecost',
    140: '13th Sunday after Pentecost',
    147: '14th Sunday after Pentecost',
    154: '15th Sunday after Pentecost',
    161: '16th Sunday after Pentecost',
    168: '17th Sunday after Pentecost',
    175: '18th Sunday after Pentecost',
    182: '19th Sunday after Pentecost',
    189: '20th Sunday after Pentecost',
    196: '21st Sunday after Pentecost',
    203: '22nd Sunday after Pentecost',
    210: '23rd Sunday after Pentecost',
    217: '24th Sunday after Pentecost',
    224: '25th Sunday after Pentecost',
    231: '26th Sunday after Pentecost',
    238: '27th Sunday after Pentecost',
    245: '28th Sunday after Pentecost',
    252: '29th Sunday after Pentecost',
    259: '30th Sunday after Pentecost',
    266: '31st Sunday after Pentecost',
    273: '32nd Sunday after Pentecost',
    280: '33rd Sunday after Pentecost'
}

let postPaschaVariableOtherDays: Record<number, string> = {
    1: 'Bright Monday',
    2: 'Bright Tuesday',
    3: 'Bright Wednesday',
    4: 'Bright Thursday',
    5: 'Bright Friday',
    6: 'Bright Saturday',
    7: 'Thomas Sunday',
    9: 'Radonitsa',
    24: 'Mid-Pentecost',
    39: 'The Ascension of Our Lord', // Major
    41: 'Saturday of the Dead',
    50: 'Monday of the Holy Spirit',
    51: 'Third Day of the Trinity',
};

// 
//Saturday closest to September 23: Conception of St John the Forerunner
//Saturday closest to October 26: Demetrius of Thessaloniki

//Can this be made generic, to accept (Index, dictionary1, dictionary2 ...dictioneryN)?
function returnSecondDictionaryIfFirstIsNull(dictionary1:Record<number, string>, dictionary2:Record<number, string>, index:number):string{
    if (dictionary1[index] != undefined){
        return dictionary1[index];
    } else {
        return dictionary2[index];
    }
};

function returnPreOrPostPaschaVariableFeast(dictionaryIndex:number){
    if (dictionaryIndex < 0){ 
        dictionaryIndex = (dictionaryIndex * -1)
        return returnSecondDictionaryIfFirstIsNull
        (prePaschaVariableSundays, prePaschaVariableOtherDays, dictionaryIndex)
    } else {
        return returnSecondDictionaryIfFirstIsNull
        (postPaschaVariableSundays, postPaschaVariableOtherDays, dictionaryIndex)
 } 
};

export function returnVariableFeastFromChurchMoment(inputPaschaMoment:moment.Moment, inputMoment:moment.Moment):string|undefined{
    let isThisDayPascha = inputPaschaMoment.isSame(inputMoment, 'day');
    if(!isThisDayPascha){ 
        // moment(testedDay).diff(compareDay) returns negative if tested day is before, not after
        let dictionaryIndex = inputMoment.diff(inputPaschaMoment, 'days');
        return returnPreOrPostPaschaVariableFeast(dictionaryIndex);
            }
};
