'use strict'

// ============ JS FUNDAMENTAL PART-1 ==================

const country = 'India';
const continent = 'Asia';
let population = 1.3
// console.log(`country ${country} is comes in ${continent} continent and its poluation is ${population} billion population`)

const isIsland = true;
let language;
language = 'hindi'
console.log(`country ${country} is comes in ${continent} continent and its poluation is ${population} billion population, and the island value is ${isIsland} and language value is ${language}`)

population = population/2;
console.log(`the population value is ${population}, ${population + 1 }`)

console.log('9' - '5');   // 4 as number
console.log('19' - '13' + '17');   // 617 as string
console.log('19' - '13' + 17);    // 23 as number
console.log('123' < 57);   // false and its takes a boolean
console.log(5 + 6 + '4' + 9 - 4 - 2);    // 1149 -6 = 1143 as number


//  =========== JS FUNDAMENTAL PART 2 =============

const describeCountry = (country, population, capitalCity) => {
    const str =  `The country ${country} has ${population} billion people and its capital city is ${capitalCity}`
    return str;
}
console.log(describeCountry('India', 1.3, 'Delhi'))


const worldPopulation = 7900
function percentageOfWorld1(population, country) {
    const value = (population/worldPopulation) * 100
    return `${country} has ${population} million people, so its about ${Math.trunc(value)}% of the world population`
}
console.log(percentageOfWorld1(1441, 'China'));


// ======= FUNCTION CALING OTHER FUNCTION =========

const percentageOfWorld2 = (population) => {
    return (population/worldPopulation) * 100
}

const describePopulation = (country, population) => {
    const chinaPopulation = percentageOfWorld2(population)
    const str = `${country} has ${population} million people which is about ${Math.trunc(chinaPopulation)}% of the world`
    return str
}
console.log(describePopulation('china', 1441))


// ====== ARRAY OPERATIONS ==========

const neighbours = ['china', 'bhutan', 'nepal', 'pakistan', 'srilanka', 'bangladesh']
neighbours.push('utopia');
console.log(neighbours);
neighbours.pop()
console.log(neighbours);

if(!neighbours.includes('germany')) {
    console.log(`probably not added the country`)
}

neighbours[neighbours.indexOf('china')] = 'sweden'
console.log(neighbours)