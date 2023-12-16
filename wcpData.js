
let q1Data = [
	['State','Age Group','Count','Percent'],
	['All', '18-29', 23, 2.01],
	['All', '30-39', 106, 9.26],
	['All', '40-49', 147, 12.84],
	['All', '50-59', 237, 20.7],
	['All', '60-69', 361, 31.53],
	['All', '>69', 271, 23.67],
	['CA', '18-29', 21, 3.38],
	['CA', '30-39', 70, 11.25],
	['CA', '40-49', 95, 15.27],
	['CA', '50-59', 136, 21.86],
	['CA', '60-69', 172, 27.65],
	['CA', '>69', 128, 20.58],
	['OR', '30-39', 10, 4.46],
	['OR', '40-49', 20, 8.93],
	['OR', '50-59', 46, 20.54],
	['OR', '60-69', 92, 41.07],
	['OR', '>69', 56, 25],
	['WA', '18-29', 2, 0.67],
	['WA', '30-39', 26, 8.7],
	['WA', '40-49', 32, 10.7],
	['WA', '50-59', 55, 18.39],
	['WA', '60-69', 97, 32.44],
	['WA', '>69', 87, 29.1]
]


let q2Data = [
	['State','Years Fishing','Count','Percent'],
	['All', 'Less than 5 years', 67, 5.68],
	['All', '5-9 years', 90, 7.63],
	['All', '10-14 years', 90, 7.63],
	['All', '15-19 years', 95, 8.05],
	['All', '20 or more years', 838, 71.02],
	['CA', 'Less than 5 years', 55, 8.57],
	['CA', '5-9 years', 73, 11.37],
	['CA', '10-14 years', 54, 8.41],
	['CA', '15-19 years', 59, 9.19],
	['CA', '20 or more years', 401, 62.46],
	['OR', 'Less than 5 years', 4, 1.72],
	['OR', '5-9 years', 11, 4.72],
	['OR', '10-14 years', 26, 11.16],
	['OR', '15-19 years', 15, 6.44],
	['OR', '20 or more years', 177, 75.97],
	['WA', 'Less than 5 years', 8, 2.62],
	['WA', '5-9 years', 6, 1.97],
	['WA', '10-14 years', 10, 3.28],
	['WA', '15-19 years', 21, 6.89],
	['WA', '20 or more years', 260, 85.25]
]

let q3Data = [
['State','Expected Years','Count','Percent'],
['All', 'Less than 5 years', 204, 17.3],
['All', '5-9 years', 167, 14.16],
['All', '10-14 years', 142, 12.04],
['All', '15-19 years', 52, 4.41],
['All', '20 or more years', 64, 5.43],
['All', 'As long as I can', 476, 40.37],
['All', 'No longer fishing', 74, 6.28],
['CA', 'Less than 5 years', 96, 14.98],
['CA', '5-9 years', 99, 15.44],
['CA', '10-14 years', 80, 12.48],
['CA', '15-19 years', 31, 4.84],
['CA', '20 or more years', 31, 4.84],
['CA', 'As long as I can', 288, 44.93],
['CA', 'No longer fishing', 16, 2.5],
['OR', 'Less than 5 years', 42, 18.03],
['OR', '5-9 years', 34, 14.59],
['OR', '10-14 years', 30, 12.88],
['OR', '15-19 years', 7, 3],
['OR', '20 or more years', 12, 5.15],
['OR', 'As long as I can', 82, 35.19],
['OR', 'No longer fishing', 26, 11.16],
['WA', 'Less than 5 years', 66, 21.64],
['WA', '5-9 years', 34, 11.15],
['WA', '10-14 years', 32, 10.49],
['WA', '15-19 years', 14, 4.59],
['WA', '20 or more years', 21, 6.89],
['WA', 'As long as I can', 106, 34.75],
['WA', 'No longer fishing', 32, 10.49]
]

let q4Data = [
['State','Captain Own Vessel','Count','Percent'],
['All', 'Always', 886, 75.08],
['All', 'Mostly', 193, 16.36],
['All', 'Sometimes', 66, 5.59],
['All', 'Never', 35, 2.97],
['CA', 'Always', 495, 77.1],
['CA', 'Mostly', 103, 16.04],
['CA', 'Sometimes', 31, 4.83],
['CA', 'Never', 13, 2.02],
['OR', 'Always', 164, 70.39],
['OR', 'Mostly', 34, 14.59],
['OR', 'Sometimes', 21, 9.01],
['OR', 'Never', 14, 6.01],
['WA', 'Always', 227, 74.43],
['WA', 'Mostly', 56, 18.36],
['WA', 'Sometimes', 14, 4.59],
['WA', 'Never', 8, 2.62]
]

// This is Q7 on the 2023 survey
let q6Data = [
['State','Family Members','Count','Percent'],
['All', '0', 554, 47.51],
['All', '1', 280, 24.01],
['All', '2', 168, 14.41],
['All', '3', 85, 7.29],
['All', '4', 47, 4.03],
['All', '5', 12, 1.03],
['All', '6', 6, 0.51],
['All', '>6', 14, 1.2],
['CA', '0', 346, 54.4],
['CA', '1', 146, 22.96],
['CA', '2', 82, 12.89],
['CA', '3', 31, 4.87],
['CA', '4', 21, 3.3],
['CA', '5', 3, 0.47],
['CA', '6', 1, 0.16],
['CA', '>6', 6, 0.94],
['OR', '0', 104, 45.81],
['OR', '1', 54, 23.79],
['OR', '2', 32, 14.1],
['OR', '3', 21, 9.25],
['OR', '4', 10, 4.41],
['OR', '5', 1, 0.44],
['OR', '6', 2, 0.88],
['OR', '>6', 3, 1.32],
['WA', '0', 104, 34.32],
['WA', '1', 80, 26.4],
['WA', '2', 54, 17.82],
['WA', '3', 33, 10.89],
['WA', '4', 16, 5.28],
['WA', '5', 8, 2.64],
['WA', '6', 3, 0.99],
['WA', '>6', 5, 1.65]
]

// This is Q8 in the 2023 survey
let q7Data = [
['State','Family Members','Count','Percent'],
['All', '0', 692, 60.86],
['All', '1', 163, 14.34],
['All', '2', 101, 8.88],
['All', '3', 45, 3.96],
['All', '4', 45, 3.96],
['All', '5', 21, 1.85],
['All', '6', 18, 1.58],
['All', '7', 7, 0.62],
['All', '8', 8, 0.7],
['All', '9', 2, 0.18],
['All', '10', 19, 1.67],
['All', '>10', 16, 1.41],
['CA', '0', 429, 68.75],
['CA', '1', 92, 14.74],
['CA', '2', 38, 6.09],
['CA', '3', 21, 3.37],
['CA', '4', 13, 2.08],
['CA', '5', 11, 1.76],
['CA', '6', 3, 0.48],
['CA', '7', 3, 0.48],
['CA', '8', 4, 0.64],
['CA', '10', 4, 0.64],
['CA', '>10', 6, 0.96],
['OR', '0', 121, 55],
['OR', '1', 28, 12.73],
['OR', '2', 27, 12.27],
['OR', '3', 10, 4.55],
['OR', '4', 8, 3.64],
['OR', '5', 5, 2.27],
['OR', '6', 7, 3.18],
['OR', '7', 3, 1.36],
['OR', '8', 1, 0.45],
['OR', '10', 5, 2.27],
['OR', '>10', 5, 2.27],
['WA', '0', 142, 48.46],
['WA', '1', 43, 14.68],
['WA', '2', 36, 12.29],
['WA', '3', 14, 4.78],
['WA', '4', 24, 8.19],
['WA', '5', 5, 1.71],
['WA', '6', 8, 2.73],
['WA', '7', 1, 0.34],
['WA', '8', 3, 1.02],
['WA', '9', 2, 0.68],
['WA', '10', 10, 3.41],
['WA', '>10', 5, 1.71]
]

// This is Q9 in the 2023 survey
let q8Data = [
	['State','Proportion','Count','Percent'],
	['All', 'None', 36, 3.06],
	['All', 'Few', 456, 38.78],
	['All', 'Some', 481, 40.9],
	['All', 'Most', 185, 15.73],
	['All', 'All', 18, 1.53],
	['CA', 'None', 21, 3.29],
	['CA', 'Few', 226, 35.42],
	['CA', 'Some', 271, 42.48],
	['CA', 'Most', 110, 17.24],
	['CA', 'All', 10, 1.57],
	['OR', 'None', 6, 2.58],
	['OR', 'Few', 102, 43.78],
	['OR', 'Some', 91, 39.06],
	['OR', 'Most', 31, 13.3],
	['OR', 'All', 3, 1.29],
	['WA', 'None', 9, 2.95],
	['WA', 'Few', 128, 41.97],
	['WA', 'Some', 119, 39.02],
	['WA', 'Most', 44, 14.43],
	['WA', 'All', 5, 1.64]
]

// This is Q10 in the 2023 survey
let q9Data = [
['State','Generations','Count','Percent'],
['All', '0', 59, 5.05],
['All', '1', 471, 40.29],
['All', '2', 270, 23.1],
['All', '3', 208, 17.79],
['All', '4', 105, 8.98],
['All', '5', 39, 3.34],
['All', '>5', 17, 1.45],
['CA', '0', 45, 7.11],
['CA', '1', 322, 50.87],
['CA', '2', 135, 21.33],
['CA', '3', 78, 12.32],
['CA', '4', 35, 5.53],
['CA', '5', 9, 1.42],
['CA', '>5', 9, 1.42],
['OR', '0', 6, 2.59],
['OR', '1', 69, 29.74],
['OR', '2', 63, 27.16],
['OR', '3', 55, 23.71],
['OR', '4', 26, 11.21],
['OR', '5', 11, 4.74],
['OR', '>5', 2, 0.86],
['WA', '0', 8, 2.63],
['WA', '1', 80, 26.32],
['WA', '2', 72, 23.68],
['WA', '3', 75, 24.67],
['WA', '4', 44, 14.47],
['WA', '5', 19, 6.25],
['WA', '>5', 6, 1.97]
]

// Q11 in 2023 survey
let q10Data = [
['State','Definition of Fishing Community','Count','Percent'],
['All', 'As a collection of people', 166, 14.2],
['All', 'As a place', 191, 16.34],
['All', 'Both place and people', 760, 65.01],
['All', `I'm not part of the fishing community`, 52, 4.45],
['CA', 'As a collection of people', 108, 16.98],
['CA', 'As a place', 86, 13.52],
['CA', 'Both place and people', 411, 64.62],
['CA', `I'm not part of the fishing community`, 31, 4.87],
['OR', 'As a collection of people', 17, 7.36],
['OR', 'As a place', 54, 23.38],
['OR', 'Both place and people', 154, 66.67],
['OR', `I'm not part of the fishing community`, 6, 2.6],
['WA', 'As a collection of people', 41, 13.58],
['WA', 'As a place', 51, 16.89],
['WA', 'Both place and people', 195, 64.57],
['WA', `I'm not part of the fishing community`, 15, 4.97]
]



let q11Data = [
['State','Statement','Strongly Disagree','Somewhat Disagree','Neutral','Somewhat Agree','Strongly Agree'],
	['All','Being a fisherman is important to me.',1.65,0.55,4.41,14.19,79.2],
['All','Continuing a family tradition of fishing is important to me. ',4.73,2.92,32.55,19.33,40.47],
['All','My fishing community is important to me.',2.01,1.11,9.55,26.3,61.04],
['All','Continuing a community tradition of fishing is important to me.',2.42,1.24,13.55,22.53,60.26],
['All','Fishing is a respected occupation where I live.',4.07,8.08,12.02,29.42,46.41],
['All','Fishing is more respected where I live now than it was 15 years ago.',14.65,20.56,36.32,17.64,10.83],
['OR','Being a fisherman is important to me.',2.27,0.65,4.21,14.56,78.32],
['OR','Continuing a family tradition of fishing is important to me. ',3.91,3.91,31.92,19.22,41.04],
['OR','My fishing community is important to me.',2.27,1.95,6.82,26.62,62.34],
['OR','Continuing a community tradition of fishing is important to me.',3.58,1.3,10.75,21.5,62.87],
['OR','Fishing is a respected occupation where I live.',3.92,4.25,9.48,25.82,56.54],
['OR','Fishing is more respected where I live now than it was 15 years ago.',14.14,26.32,32.57,16.45,10.53],
['WA','Being a fisherman is important to me.',0.57,0.57,4.3,13.18,81.38],
['WA','Continuing a family tradition of fishing is important to me. ',3.46,1.73,23.05,24.21,47.55],
['WA','My fishing community is important to me.',0.86,1.44,8.33,31.61,57.76],
['WA','Continuing a community tradition of fishing is important to me.',0.86,1.72,12.61,25.21,59.6],
['WA','Fishing is a respected occupation where I live.',3.15,9.74,10.32,28.08,48.71],
['WA','Fishing is more respected where I live now than it was 15 years ago.',16.23,19.13,41.74,14.78,8.12],
['CA','Being a fisherman is important to me.',1.84,0.53,4.6,14.32,78.71],
['CA','Continuing a family tradition of fishing is important to me. ',5.19,3.2,38.08,16.64,36.88],
['CA','My fishing community is important to me.',2.38,0.66,11.24,23.68,62.04],
['CA','Continuing a community tradition of fishing is important to me.',2.64,1.06,15.04,21.11,60.16],
['CA','Fishing is a respected occupation where I live.',4.61,8.95,13.82,31.71,40.92],
['CA','Fishing is more respected where I live now than it was 15 years ago.',14.12,19.13,34.83,19.39,12.53]
]

let q12Data = [
['State','Attribute of Fishing','Very Dissatisfied','Somewhat Dissatisfied','Neutral','Satisfied','Very Satisfied'],
	['All','Adventure of job',0.35,0.97,6.09,35.89,56.71],
['All','Challenge of job',0.41,1.38,5.95,37.21,55.05],
['All','Working outdoors',0.21,0.07,3.25,24.48,71.92],
['All','Camaraderie with crew',0.35,1.18,23.24,34.92,38.45],
['All','Being on the water',0.28,0.21,5.12,24.83,69.57],
['All','Competing with others',1.66,2.84,29.81,31.54,33.96],
['All','Doing something worthwhile',0.28,0.14,6.78,36.65,56.09],
['All','Producing healthy food',0.21,0.14,4.08,21.23,74.27],
['All','Pitting skill against nature',0.35,0.48,16.18,33.54,49.24],
['All','Being my own boss',0.21,0.07,3.73,18.81,77.04],
['All','Working on my own schedule',0.41,0.41,5.67,21.58,71.65],
['All','Earnings from fishing',3.6,12.86,21.3,33.13,28.7],
['All','Predictability of earnings',12.59,25.31,39,14.8,8.09],
['All','Job safety',2.28,6.02,32.85,38.17,20.47],
['OR','Adventure of job',0,1.97,9.84,33.44,54.75],
['OR','Challenge of job',0.33,2.3,8.85,38.03,51.15],
['OR','Working outdoors',0,0.33,3.93,28.2,67.87],
['OR','Camaraderie with crew',0,0.98,27.21,35.74,35.08],
['OR','Being on the water',0,0,7.21,29.18,64.26],
['OR','Competing with others',1.64,1.64,27.54,37.05,32.46],
['OR','Doing something worthwhile',0,0,7.54,34.75,58.03],
['OR','Producing healthy food',0,0.33,5.25,23.28,71.8],
['OR','Pitting skill against nature',0.33,0.33,18.03,36.39,45.57],
['OR','Being my own boss',0,0,5.25,20.98,74.1],
['OR','Working on my own schedule',0,0,7.21,23.61,69.18],
['OR','Earnings from fishing',5.25,12.13,22.95,31.15,27.54],
['OR','Predictability of earnings',13.77,28.52,37.05,12.13,8.52],
['OR','Job safety',2.62,6.56,30.82,38.69,20.98],
['WA','Adventure of job',0.29,1.44,5.75,39.37,53.16],
['WA','Challenge of job',1.15,0.57,5.75,38.22,54.02],
['WA','Working outdoors',0.57,0,4.31,25.57,69.25],
['WA','Camaraderie with crew',0.57,1.72,17.53,40.52,39.08],
['WA','Being on the water',0.86,0,5.17,30.75,63.22],
['WA','Competing with others',0.86,2.01,21.84,34.2,41.09],
['WA','Doing something worthwhile',0.57,0.29,7.18,38.79,52.87],
['WA','Producing healthy food',0.57,0,4.02,24.14,70.98],
['WA','Pitting skill against nature',0.57,1.15,14.37,37.64,45.4],
['WA','Being my own boss',0.57,0,2.87,17.53,78.74],
['WA','Working on my own schedule',1.15,0.29,6.32,19.83,72.13],
['WA','Earnings from fishing',5.17,10.63,15.8,38.22,29.89],
['WA','Predictability of earnings',13.79,24.43,38.79,14.66,8.05],
['WA','Job safety',1.44,3.74,30.75,42.53,21.55],
['CA','Adventure of job',0.53,0.39,4.61,35.79,58.68],
['CA','Challenge of job',0.13,1.45,5,36.58,56.71],
['CA','Working outdoors',0.13,0,2.5,22.63,74.61],
['CA','Camaraderie with crew',0.39,0.92,24.34,31.71,39.74],
['CA','Being on the water',0.13,0.39,4.47,20.39,74.34],
['CA','Competing with others',1.97,3.68,34.34,28.42,31.05],
['CA','Doing something worthwhile',0.26,0.13,6.32,35.66,57.5],
['CA','Producing healthy food',0.13,0,3.68,18.68,77.24],
['CA','Pitting skill against nature',0.13,0.26,16.05,30.39,52.89],
['CA','Being my own boss',0.13,0.13,3.42,18.55,77.5],
['CA','Working on my own schedule',0.26,0.66,4.47,21.45,72.76],
['CA','Earnings from fishing',2.11,13.55,23.68,31.84,28.55],
['CA','Predictability of earnings',11.45,23.95,40.66,16.05,7.63],
['CA','Job safety',2.5,6.84,34.21,36.45,19.74]
]

let q13Data = [
['State','Reason','Not Important','Somewhat Important','Very Important'],
	['All','Variation in prices for fish',1.31,16.43,82.26],
['All','Costs of inputs such as fuel, supplies or maintenance',0.62,17.94,81.44],
['All','Ability to access permits, licenses or quota to fish',3.19,16.86,79.94],
['All','Regulations that restrict when, where, or how I can fish',1.52,11.26,87.22],
['All','Natural variation in the population of fish available to catch',2.08,24.9,73.02],
['OR','Variation in prices for fish',0.65,16.83,82.52],
['OR','Costs of inputs such as fuel, supplies or maintenance',0.65,18.89,80.46],
['OR','Ability to access permits, licenses or quota to fish',2.92,17.21,79.87],
['OR','Regulations that restrict when, where, or how I can fish',0.65,12.99,86.36],
['OR','Natural variation in the population of fish available to catch',1.31,24.84,73.86],
['WA','Variation in prices for fish',0.29,12.32,87.39],
['WA','Costs of inputs such as fuel, supplies or maintenance',0.58,19.36,80.06],
['WA','Ability to access permits, licenses or quota to fish',3.18,19.65,77.17],
['WA','Regulations that restrict when, where, or how I can fish',1.72,11.78,86.49],
['WA','Natural variation in the population of fish available to catch',0.58,21.61,77.81],
['CA','Variation in prices for fish',2.11,18.6,79.29],
['CA','Costs of inputs such as fuel, supplies or maintenance',0.66,17.15,82.19],
['CA','Ability to access permits, licenses or quota to fish',3.32,15.38,81.3],
['CA','Regulations that restrict when, where, or how I can fish',1.71,10.28,88.01],
['CA','Natural variation in the population of fish available to catch',3.04,26.46,70.5]
]

let q14_1Data = [
['State','Agreement Level','Count','Percent'],
	['All','Strongly Disagree',62,4.3],
['All','Somewhat Disagree',81,5.62],
['All','Neutral',308,21.36],
['All','Somewhat Agree',554,38.42],
['All','Strongly Agree',437,30.31],
['OR','Strongly Disagree',13,4.22],
['OR','Somewhat Disagree',14,4.55],
['OR','Neutral',75,24.35],
['OR','Somewhat Agree',123,39.94],
['OR','Strongly Agree',83,26.95],
['WA','Strongly Disagree',14,4.03],
['WA','Somewhat Disagree',33,9.51],
['WA','Neutral',71,20.46],
['WA','Somewhat Agree',141,40.63],
['WA','Strongly Agree',88,25.36],
['CA','Strongly Disagree',34,4.51],
['CA','Somewhat Disagree',34,4.51],
['CA','Neutral',155,20.56],
['CA','Somewhat Agree',272,36.07],
['CA','Strongly Agree',259,34.35]
]

let q14_2Data = [
	['State','Agreement Level','Count','Percent'],
	['All','Strongly Disagree',234,16.18],
['All','Somewhat Disagree',250,17.29],
['All','Neutral',413,28.56],
['All','Somewhat Agree',403,27.87],
['All','Strongly Agree',146,10.1],
['OR','Strongly Disagree',45,14.61],
['OR','Somewhat Disagree',60,19.48],
['OR','Neutral',89,28.9],
['OR','Somewhat Agree',80,25.97],
['OR','Strongly Agree',34,11.04],
['WA','Strongly Disagree',70,20.11],
['WA','Somewhat Disagree',62,17.82],
['WA','Neutral',76,21.84],
['WA','Somewhat Agree',113,32.47],
['WA','Strongly Agree',27,7.76],
['CA','Strongly Disagree',111,14.66],
['CA','Somewhat Disagree',121,15.98],
['CA','Neutral',243,32.1],
['CA','Somewhat Agree',199,26.29],
['CA','Strongly Agree',83,10.96]
]

let q14_3Data = [
	['State','Agreement Level','Count','Percent'],
	['All','Strongly Disagree',259,17.91],
['All','Somewhat Disagree',287,19.85],
['All','Neutral',329,22.75],
['All','Somewhat Agree',353,24.41],
['All','Strongly Agree',218,15.08],
['OR','Strongly Disagree',51,16.56],
['OR','Somewhat Disagree',63,20.45],
['OR','Neutral',69,22.4],
['OR','Somewhat Agree',93,30.19],
['OR','Strongly Agree',32,10.39],
['WA','Strongly Disagree',67,19.25],
['WA','Somewhat Disagree',70,20.11],
['WA','Neutral',77,22.13],
['WA','Somewhat Agree',80,22.99],
['WA','Strongly Agree',54,15.52],
['CA','Strongly Disagree',134,17.7],
['CA','Somewhat Disagree',149,19.68],
['CA','Neutral',178,23.51],
['CA','Somewhat Agree',170,22.46],
['CA','Strongly Agree',126,16.64]
]

let q15Data = [
['State','Affected By Closures','Count','Percent'],
	['All','Yes',932,64.77],
['All','No',507,35.23],
['OR','Yes',208,67.97],
['OR','No',98,32.03],
['WA','Yes',223,65.01],
['WA','No',120,34.99],
['CA','Yes',482,63.59],
['CA','No',276,36.41]
]

let q16Data = [
['State','Response to Closure','Count','Percent'],
	['All','Fished in another fishery',298,31.14],
['All','Worked in a job or business other than commercial fishing',264,27.59],
['All','Did not work in either fishery or non-fishery employment during the closure',395,41.27],
['OR','Fished in another fishery',73,33.95],
['OR','Worked in a job or business other than commercial fishing',52,24.19],
['OR','Did not work in either fishery or non-fishery employment during the closure',90,41.86],
['WA','Fished in another fishery',63,28.64],
['WA','Worked in a job or business other than commercial fishing',58,26.36],
['WA','Did not work in either fishery or non-fishery employment during the closure',99,45],
['CA','Fished in another fishery',152,30.22],
['CA','Worked in a job or business other than commercial fishing',151,30.02],
['CA','Did not work in either fishery or non-fishery employment during the closure',200,39.76]
]

let q17Data = [
	['State','Employment Choice','Count','Percent'],
	['All','Fishing',1357,94.56],
['All','Alternative work',78,5.44],
['OR','Fishing',289,95.7],
['OR','Alternative work',13,4.3],
['WA','Fishing',330,95.65],
['WA','Alternative work',15,4.35],
['CA','Fishing',707,93.64],
['CA','Alternative work',48,6.36]
]

let q18Data = [
['State','Percent Higher','Count','Percent'],
	['All','1 – 10% more',26,2.08],
['All','11 – 25% more',79,6.31],
['All','26 – 50% more',216,17.25],
['All','50 – 100% more',280,22.36],
['All','Greater than 100% more',208,16.61],
['All','Never choose another job',443,35.38],
['OR','1 – 10% more',7,2.61],
['OR','11 – 25% more',21,7.84],
['OR','26 – 50% more',41,15.3],
['OR','50 – 100% more',52,19.4],
['OR','Greater than 100% more',40,14.93],
['OR','Never choose another job',107,39.93],
['WA','1 – 10% more',6,1.99],
['WA','11 – 25% more',17,5.63],
['WA','26 – 50% more',48,15.89],
['WA','50 – 100% more',71,23.51],
['WA','Greater than 100% more',47,15.56],
['WA','Never choose another job',113,37.42],
['CA','1 – 10% more',13,2],
['CA','11 – 25% more',39,5.99],
['CA','26 – 50% more',119,18.28],
['CA','50 – 100% more',150,23.04],
['CA','Greater than 100% more',117,17.97],
['CA','Never choose another job',213,32.72]
]

let q19Data = [
['State','Maximum Crew','Count','Percent'],
	['All','0',164,11.94],
['All','1',346,25.2],
['All','2',397,28.91],
['All','3',249,18.14],
['All','4',122,8.89],
['All','5',52,3.79],
['All','6',24,1.75],
['All','>6',19,1.38],
['OR','0',31,10.33],
['OR','1',77,25.67],
['OR','2',84,28],
['OR','3',52,17.33],
['OR','4',38,12.67],
['OR','5',9,3],
['OR','6',4,1.33],
['OR','>6',5,1.67],
['WA','0',14,4.23],
['WA','1',57,17.22],
['WA','2',93,28.1],
['WA','3',79,23.87],
['WA','4',51,15.41],
['WA','5',22,6.65],
['WA','6',8,2.42],
['WA','>6',7,2.11],
['CA','0',118,16.62],
['CA','1',206,29.01],
['CA','2',217,30.56],
['CA','3',111,15.63],
['CA','4',23,3.24],
['CA','5',18,2.54],
['CA','6',10,1.41],
['CA','>6',7,0.99]
]

let q20Data = [
	['State','Agreement Level','Count','Percent'],
	['All','Strongly Disagree',265,19.51],
['All','Somewhat Disagree',350,25.77],
['All','Neutral',352,25.92],
['All','Somewhat Agree',294,21.65],
['All','Strongly Agree',97,7.14],
['OR','Strongly Disagree',56,19.11],
['OR','Somewhat Disagree',79,26.96],
['OR','Neutral',76,25.94],
['OR','Somewhat Agree',60,20.48],
['OR','Strongly Agree',22,7.51],
['WA','Strongly Disagree',53,15.92],
['WA','Somewhat Disagree',83,24.92],
['WA','Neutral',80,24.02],
['WA','Somewhat Agree',94,28.23],
['WA','Strongly Agree',23,6.91],
['CA','Strongly Disagree',152,21.71],
['CA','Somewhat Disagree',176,25.14],
['CA','Neutral',189,27],
['CA','Somewhat Agree',134,19.14],
['CA','Strongly Agree',49,7]
]

let q21Data = [
['State','Distance','Count','Percent'],
	['All','0-25 Miles',202,15.76],
['All','26-50 Miles',262,20.44],
['All','51-75 Miles',96,7.49],
['All','76-100 Miles',219,17.08],
['All','>100 Miles',503,39.24],
['OR','0-25 Miles',40,15.04],
['OR','26-50 Miles',45,16.92],
['OR','51-75 Miles',12,4.51],
['OR','76-100 Miles',50,18.8],
['OR','>100 Miles',119,44.74],
['WA','0-25 Miles',28,9.66],
['WA','26-50 Miles',49,16.9],
['WA','51-75 Miles',15,5.17],
['WA','76-100 Miles',36,12.41],
['WA','>100 Miles',162,55.86],
['CA','0-25 Miles',131,18.79],
['CA','26-50 Miles',167,23.96],
['CA','51-75 Miles',68,9.76],
['CA','76-100 Miles',130,18.65],
['CA','>100 Miles',201,28.84]
]

let q22Data = [
['State','Belong to Industry Association','Count','Percent'],
	['All','Yes',739,51.53],
['All','No',695,48.47],
['OR','Yes',142,46.86],
['OR','No',161,53.14],
['WA','Yes',219,63.48],
['WA','No',126,36.52],
['CA','Yes',360,47.81],
['CA','No',393,52.19]
]

let q23Data = [
	['State','Have Adequate Fishing Season Projection Information','Count','Percent'],
	['All','Yes',839,59.93],
['All','No',561,40.07],
['OR','Yes',199,67.46],
['OR','No',96,32.54],
['WA','Yes',215,64.37],
['WA','No',119,35.63],
['CA','Yes',403,54.46],
['CA','No',337,45.54]
]

let q24Data =[
	['State','Percentage of Time','Count','Percent'],
	['All','None',633,43.87],
['All','1-10%',334,23.15],
['All','11-25%',203,14.07],
['All','26-50%',134,9.29],
['All','51-100%',139,9.63],
['OR','None',150,49.18],
['OR','1-10%',75,24.59],
['OR','11-25%',42,13.77],
['OR','26-50%',18,5.9],
['OR','51-100%',20,6.56],
['WA','None',168,48.41],
['WA','1-10%',72,20.75],
['WA','11-25%',49,14.12],
['WA','26-50%',30,8.65],
['WA','51-100%',28,8.07],
['CA','None',300,39.58],
['CA','1-10%',180,23.75],
['CA','11-25%',109,14.38],
['CA','26-50%',80,10.55],
['CA','51-100%',89,11.74]
]

let q25Data = [
['State','Have Adequate Access to Processors','Count','Percent'],
	['All','Yes',1162,81.03],
['All','No',272,18.97],
['OR','Yes',235,77.81],
['OR','No',67,22.19],
['WA','Yes',296,86.05],
['WA','No',48,13.95],
['CA','Yes',603,79.87],
['CA','No',152,20.13]
]

let q26Data = [
	['State','Fish to Employ Crew','Count','Percent'],
	['All','Yes',861,60.34],
['All','No',566,39.66],
['OR','Yes',184,61.13],
['OR','No',117,38.87],
['WA','Yes',224,65.31],
['WA','No',119,34.69],
['CA','Yes',431,57.39],
['CA','No',320,42.61]
]

let q27aData = [
	['State','Keep Some Catch for Personal Use','Count','Percent'],
	['All','Yes',933,65.15],
['All','No',499,34.85],
['OR','Yes',178,58.55],
['OR','No',126,41.45],
['WA','Yes',234,67.24],
['WA','No',114,32.76],
['CA','Yes',498,66.67],
['CA','No',249,33.33]
]

let q27bData = [
	['State','Pounds Kept for Personal Use','Count','Percent'],
	['All','0',500,37.59],
['All','1-100',535,40.23],
['All','101-200',155,11.65],
['All','201-300',49,3.68],
['All','301-400',16,1.2],
['All','>400',75,5.64],
['OR','0',127,45.85],
['OR','1-100',85,30.69],
['OR','101-200',28,10.11],
['OR','201-300',15,5.42],
['OR','301-400',7,2.53],
['OR','>400',15,5.42],
['WA','0',114,35.29],
['WA','1-100',122,37.77],
['WA','101-200',51,15.79],
['WA','201-300',10,3.1],
['WA','301-400',1,0.31],
['WA','>400',25,7.74],
['CA','0',249,35.52],
['CA','1-100',314,44.79],
['CA','101-200',74,10.56],
['CA','201-300',24,3.42],
['CA','301-400',7,1],
['CA','>400',33,4.71]
]

let q28Data = [
	['State','Percent Household Income from Fishing','Count','Percent'],
	['All','0%',76,5.48],
['All','1-24%',267,19.25],
['All','25-49%',142,10.24],
['All','50-74%',211,15.21],
['All','75-99%',246,17.74],
['All','100%',445,32.08],
['OR','0%',19,6.46],
['OR','1-24%',54,18.37],
['OR','25-49%',29,9.86],
['OR','50-74%',43,14.63],
['OR','75-99%',49,16.67],
['OR','100%',100,34.01],
['WA','0%',25,7.35],
['WA','1-24%',47,13.82],
['WA','25-49%',21,6.18],
['WA','50-74%',44,12.94],
['WA','75-99%',72,21.18],
['WA','100%',131,38.53],
['CA','0%',28,3.89],
['CA','1-24%',164,22.78],
['CA','25-49%',88,12.22],
['CA','50-74%',124,17.22],
['CA','75-99%',113,15.69],
['CA','100%',203,28.19]
]

let q29Data = [
	['State','Percent of Personal Income Not from Fishing','Count','Percent'],
	['All','0%',649,47.2],
['All','1-24%',162,11.78],
['All','25-49%',95,6.91],
['All','50-74%',147,10.69],
['All','75-99%',244,17.75],
['All','100%',78,5.67],
['OR','0%',137,47.08],
['OR','1-24%',42,14.43],
['OR','25-49%',13,4.47],
['OR','50-74%',34,11.68],
['OR','75-99%',45,15.46],
['OR','100%',20,6.87],
['WA','0%',188,57.67],
['WA','1-24%',41,12.58],
['WA','25-49%',18,5.52],
['WA','50-74%',19,5.83],
['WA','75-99%',39,11.96],
['WA','100%',21,6.44],
['CA','0%',303,41.68],
['CA','1-24%',75,10.32],
['CA','25-49%',62,8.53],
['CA','50-74%',94,12.93],
['CA','75-99%',158,21.73],
['CA','100%',35,4.81]
]

let q31Data = [
	['State','Quarter','Count','Percent'],
	['All','January-March',527,79.01],
['All','April-June',468,70.16],
['All','July-September',453,67.92],
['All','October-December',483,72.41],
['OR','January-March',114,81.43],
['OR','April-June',107,76.43],
['OR','July-September',101,72.14],
['OR','October-December',108,77.14],
['WA','January-March',113,84.96],
['WA','April-June',96,72.18],
['WA','July-September',85,63.91],
['WA','October-December',97,72.93],
['CA','January-March',292,76.44],
['CA','April-June',256,67.02],
['CA','July-September',258,67.54],
['CA','October-December',268,70.16]
]

let q32Data = [
	['State','Household Income','Count','Percent'],
	['All','Less than $25,000',119,8.93],
['All','$25,000 to $49,999',230,17.27],
['All','$50,000 to $74,999',239,17.94],
['All','$75,000 to $99,999',206,15.47],
['All','$100,000 to $124,999',162,12.16],
['All','$125,000 to $149,999',112,8.41],
['All','$150,000 or more',264,19.82],
['OR','Less than $25,000',34,11.89],
['OR','$25,000 to $49,999',59,20.63],
['OR','$50,000 to $74,999',55,19.23],
['OR','$75,000 to $99,999',41,14.34],
['OR','$100,000 to $124,999',25,8.74],
['OR','$125,000 to $149,999',24,8.39],
['OR','$150,000 or more',48,16.78],
['WA','Less than $25,000',25,7.6],
['WA','$25,000 to $49,999',48,14.59],
['WA','$50,000 to $74,999',57,17.33],
['WA','$75,000 to $99,999',46,13.98],
['WA','$100,000 to $124,999',50,15.2],
['WA','$125,000 to $149,999',28,8.51],
['WA','$150,000 or more',75,22.8],
['CA','Less than $25,000',59,8.59],
['CA','$25,000 to $49,999',120,17.47],
['CA','$50,000 to $74,999',121,17.61],
['CA','$75,000 to $99,999',116,16.89],
['CA','$100,000 to $124,999',80,11.64],
['CA','$125,000 to $149,999',56,8.15],
['CA','$150,000 or more',135,19.65]
]

let q33Data = [
	['State','Household Members','Count','Percent'],
	['All','1',216,15.18],
['All','2',712,50.04],
['All','3',232,16.3],
['All','4',164,11.52],
['All','5',75,5.27],
['All','6',17,1.19],
['All','>6',7,0.49],
['OR','1',35,11.71],
['OR','2',173,57.86],
['OR','3',49,16.39],
['OR','4',28,9.36],
['OR','5',9,3.01],
['OR','6',5,1.67],
['OR','>6',0,0],
['WA','1',54,15.56],
['WA','2',177,51.01],
['WA','3',57,16.43],
['WA','4',38,10.95],
['WA','5',19,5.48],
['WA','6',2,0.58],
['WA','>6',0,0],
['CA','1',122,16.38],
['CA','2',353,47.38],
['CA','3',119,15.97],
['CA','4',90,12.08],
['CA','5',46,6.17],
['CA','6',9,1.21],
['CA','>6',6,0.81]
]

let q34Data = [
	['State','Health Insurance Source','Count','Percent'],
	['All','No health insurance',152,10.61],
['All','Purchased independently',491,34.26],
['All','Provided through your fishery related job',36,2.51],
['All','Provided through your own employment',165,11.51],
['All','Provided by another  household member',186,12.98],
['All','Provided through Medicare or Medicaid',381,26.59],
['All','Veterans Administration',12,0.84],
['All','Other',10,0.7],
['OR','No health insurance',38,12.5],
['OR','Purchased independently',117,38.49],
['OR','Provided through your fishery related job',2,0.66],
['OR','Provided through your own employment',23,7.57],
['OR','Provided by another  household member',36,11.84],
['OR','Provided through Medicare or Medicaid',80,26.32],
['OR','Veterans Administration',4,1.32],
['OR','Other',4,1.32],
['WA','No health insurance',34,9.74],
['WA','Purchased independently',131,37.54],
['WA','Provided through your fishery related job',23,6.59],
['WA','Provided through your own employment',30,8.6],
['WA','Provided by another  household member',38,10.89],
['WA','Provided through Medicare or Medicaid',89,25.5],
['WA','Veterans Administration',1,0.29],
['WA','Other',3,0.86],
['CA','No health insurance',77,10.29],
['CA','Purchased independently',234,31.28],
['CA','Provided through your fishery related job',5,0.67],
['CA','Provided through your own employment',112,14.97],
['CA','Provided by another  household member',106,14.17],
['CA','Provided through Medicare or Medicaid',204,27.27],
['CA','Veterans Administration',7,0.94],
['CA','Other',3,0.4]
]