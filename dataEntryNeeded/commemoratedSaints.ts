export function returnCommemoratedSaintsFromChurchMoment(inputChurchMoment:moment.Moment):string[]{
  let monthDictionary = saintCommemorationDictionary[inputChurchMoment.format("MMMM")];
  let dayIndex = inputChurchMoment.date();
  return monthDictionary[dayIndex];
}

export let saintCommemorationDictionary: Record<string, Record<number,string[]>> = {
  "September":{
      1: ['Martyrs Rufus and Rufianus', 'Martyr Severus', 'Martyr Artemidorus'],
      2: ['a'],
      3: ['a'],
      4: ['a'],
      5: ['a'],
      6: ['a'],
      7: ['a'],
      8: ['a'],
      9: ['a'],
      10: ['a'],
      11: ['a'],
      12: ['a'],
      13: ["a","b"],
      14: ['a'],
      15: ['a'],
      16: ['a'],
      17: ['a'],
      18: ['a'],
      19: ['a'],
      20: ['a'],
      21: ["a","b"],
      22: ['a'],
      23: ['a'],
      24: ['a'],
      25: ['a'],
      26: ['a'],
      27: ['a'],
      28: ['a'],
      29: ['a'],
      30: ['a'],
  },
  "October":{
      1: ["a","b"],
      2: ['a'],
      3: ['a'],
      4: ['a'],
      5: ['a'],
      6: ['a'],
      7: ['a'],
      8: ['a'],
      9: ['a'],
      10: ['a'],
      11: ['a'],
      12: ['a'],
      13: ["a","b"],
      14: ['a'],
      15: ['a'],
      16: ['a'],
      17: ['a'],
      18: ['a'],
      19: ['a'],
      20: ['a'],
      21: ["a","b"],
      22: ['a'],
      23: ['a'],
      24: ['a'],
      25: ['a'],
      26: ['a'],
      27: ['a'],
      28: ['a'],
      29: ['a'],
      30: ['a'],
      31: ['a'],
  },
  "November":{
    1: ["a","b"],
    2: ['a'],
    3: ['a'],
    4: ['a'],
    5: ['a'],
    6: ['a'],
    7: ['a'],
    8: ['a'],
    9: ['a'],
    10: ['a'],
    11: ['a'],
    12: ['a'],
    13: ["a","b"],
    14: ['a'],
    15: ['a'],
    16: ['a'],
    17: ['a'],
    18: ['a'],
    19: ['a'],
    20: ['a'],
    21: ["a","b"],
    22: ['a'],
    23: ['a'],
    24: ['a'],
    25: ['a'],
    26: ['a'],
    27: ['a'],
    28: ['a'],
    29: ['a'],
    30: ['a'],
},
"December":{
    1: ["a","b"],
    2: ['a'],
    3: ['a'],
    4: ['a'],
    5: ['a'],
    6: ['a'],
    7: ['a'],
    8: ['a'],
    9: ['a'],
    10: ['a'],
    11: ['a'],
    12: ['a'],
    13: ["a","b"],
    14: ['a'],
    15: ['a'],
    16: ['a'],
    17: ['a'],
    18: ['a'],
    19: ['a'],
    20: ['a'],
    21: ["a","b"],
    22: ['a'],
    23: ['a'],
    24: ['a'],
    25: ['a'],
    26: ['a'],
    27: ['a'],
    28: ['a'],
    29: ['a'],
    30: ['a'],
    31: ['a'],
},
"January":{
  1: ["a","b"],
  2: ['a'],
  3: ['a'],
  4: ['a'],
  5: ['a'],
  6: ['a'],
  7: ['a'],
  8: ['a'],
  9: ['a'],
  10: ['a'],
  11: ['a'],
  12: ['a'],
  13: ["a","b"],
  14: ['a'],
  15: ['a'],
  16: ['a'],
  17: ['a'],
  18: ['a'],
  19: ['a'],
  20: ['a'],
  21: ["a","b"],
  22: ['a'],
  23: ['a'],
  24: ['a'],
  25: ['a'],
  26: ['a'],
  27: ['a'],
  28: ['a'],
  29: ['a'],
  30: ['a'],
  31: ['a'],
},
"February":{
  1: ["a","b"],
  2: ['a'],
  3: ['a'],
  4: ['a'],
  5: ['a'],
  6: ['a'],
  7: ['a'],
  8: ['a'],
  9: ['a'],
  10: ['a'],
  11: ['a'],
  12: ['a'],
  13: ["a","b"],
  14: ['a'],
  15: ['a'],
  16: ['a'],
  17: ['a'],
  18: ['a'],
  19: ['a'],
  20: ['a'],
  21: ["a","b"],
  22: ['a'],
  23: ['a'],
  24: ['a'],
  25: ['a'],
  26: ['a'],
  27: ['a'],
  28: ['a'],
  29: ['a'],
},
"March":{
  1: ["a","b"],
  2: ['a'],
  3: ['a'],
  4: ['a'],
  5: ['a'],
  6: ['a'],
  7: ['a'],
  8: ['a'],
  9: ['a'],
  10: ['a'],
  11: ['a'],
  12: ['a'],
  13: ["a","b"],
  14: ['a'],
  15: ['a'],
  16: ['a'],
  17: ['a'],
  18: ['a'],
  19: ['a'],
  20: ['a'],
  21: ["a","b"],
  22: ['a'],
  23: ['a'],
  24: ['a'],
  25: ['a'],
  26: ['a'],
  27: ['a'],
  28: ['a'],
  29: ['a'],
  30: ['a'],
  31: ['a'],
},
"April":{
1: ["a","b"],
2: ['a'],
3: ['a'],
4: ['a'],
5: ['a'],
6: ['a'],
7: ['a'],
8: ['a'],
9: ['a'],
10: ['a'],
11: ['a'],
12: ['a'],
13: ["a","b"],
14: ['a'],
15: ['a'],
16: ['a'],
17: ['a'],
18: ['a'],
19: ['a'],
20: ['a'],
21: ["a","b"],
22: ['a'],
23: ['a'],
24: ['a'],
25: ['a'],
26: ['a'],
27: ['a'],
28: ['a'],
29: ['a'],
30: ['a'],
},
"May":{
1: ["a","b"],
2: ['a'],
3: ['a'],
4: ['a'],
5: ['a'],
6: ['a'],
7: ['a'],
8: ['a'],
9: ['a'],
10: ['a'],
11: ['a'],
12: ['a'],
13: ["a","b"],
14: ['a'],
15: ['a'],
16: ['a'],
17: ['a'],
18: ['a'],
19: ['a'],
20: ['a'],
21: ["a","b"],
22: ['a'],
23: ['a'],
24: ['a'],
25: ['a'],
26: ['a'],
27: ['a'],
28: ['a'],
29: ['a'],
30: ['a'],
31: ['a'],
},
"June":{
  1: ["a","b"],
  2: ['a'],
  3: ['a'],
  4: ['a'],
  5: ['a'],
  6: ['a'],
  7: ['a'],
  8: ['a'],
  9: ['a'],
  10: ['a'],
  11: ['a'],
  12: ['a'],
  13: ["a","b"],
  14: ['a'],
  15: ['a'],
  16: ['a'],
  17: ['a'],
  18: ['a'],
  19: ['a'],
  20: ['a'],
  21: ["a","b"],
  22: ['a'],
  23: ['a'],
  24: ['a'],
  25: ['a'],
  26: ['a'],
  27: ['a'],
  28: ['a'],
  29: ['a'],
  30: ['a'],
  },
  "July":{
  1: ["a","b"],
  2: ['a'],
  3: ['a'],
  4: ['a'],
  5: ['a'],
  6: ['a'],
  7: ['a'],
  8: ['a'],
  9: ['a'],
  10: ['a'],
  11: ['a'],
  12: ['a'],
  13: ["a","b"],
  14: ['a'],
  15: ['a'],
  16: ['a'],
  17: ['a'],
  18: ['a'],
  19: ['a'],
  20: ['a'],
  21: ["a","b"],
  22: ['a'],
  23: ['a'],
  24: ['a'],
  25: ['a'],
  26: ['a'],
  27: ['a'],
  28: ['a'],
  29: ['a'],
  30: ['a'],
  31: ['a'],
  },
  "August":{
    1: ["a","b"],
    2: ['a'],
    3: ['a'],
    4: ['a'],
    5: ['a'],
    6: ['a'],
    7: ['a'],
    8: ['a'],
    9: ['a'],
    10: ['a'],
    11: ['a'],
    12: ['a'],
    13: ["a","b"],
    14: ['a'],
    15: ['a'],
    16: ['a'],
    17: ['a'],
    18: ['a'],
    19: ['a'],
    20: ['a'],
    21: ["a","b"],
    22: ['a'],
    23: ['a'],
    24: ['a'],
    25: ['a'],
    26: ['a'],
    27: ['a'],
    28: ['a'],
    29: ['a'],
    30: ['a'],
    31: ['a'],
    },
}