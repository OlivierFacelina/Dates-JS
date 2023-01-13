// nb de jours
/* 
24 : nb d'heures en une journée
3600 : nb de secondes dans une heure
1000 : passer de milisecondes en seconde
*/

let nextHoliday = new Date('February 20, 2023 16:00:00');
console.log(nextHoliday);

const today = new Date();

// nb de mois
let monthDiffGlob = Math.floor((nextHoliday - today)/30/24/60/60/1000);

// nb de jours
let dayDiffGlob = Math.floor((nextHoliday - today)/24/60/60/1000);

// nb d'heures
let hourDiffGlob = Math.floor((nextHoliday - today)/60/60/1000);

// nb de minutes
let minDiffGlob = Math.floor((nextHoliday - today)/60/1000);

// Exo 7
let dateDiff = nextHoliday - today
console.log(dateDiff)

console.log(`Nous serons en vacances dans ${monthDiff} mois ${dayDiff} jours ${hourDiff} h ${minDiff} min`)

