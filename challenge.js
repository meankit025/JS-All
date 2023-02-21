"use strict";

// =========SECTION 2 CODING CHALLENGE 1 & CODING CHALLENGE 2 =============

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const markBMI = massMark/(heightMark * heightMark)
// const johnBMI = massJohn / (heightJohn * heightJohn)
// console.log(markBMI, johnBMI)

// if(markBMI > johnBMI) {
//   console.log(`mark BMI (${markBMI}) is higher than john BMI (${johnBMI})`)
// }
// else {
//   console.log(`john BMI (${johnBMI}) is higher than mark BMI (${markBMI})`)
// }

// //      CODING CHALLENGE 3

// const avgDolphins = (96 + 108 + 89)/3;
// const avgKoalas = (88 + 91 + 110)/3;
// console.log(avgDolphins, avgKoalas)

// if(avgDolphins >=100 && avgDolphins > avgKoalas) {
//   console.log(`avgerage of Dolphins (${avgDolphins}) wins the trophy`)
// }
// else if(avgKoalas >=100 && avgKoalas > avgDolphins) {
//   console.log(`average of koalas (${avgKoalas}) wins the trophy`)
// }
// else if(avgDolphins === avgKoalas) {
//   console.log(`Both team wins the trophy`)
// }
// else {
//   console.log(`No team wins the trophy`)
// }

// //      CODING CHALLENGE 4

// const bill = 40;
// const tip = bill > 50 && bill <=300 ? bill * .15 : bill * .20;
// console.log(`the bill value is ${bill}, the tip value is ${tip} and the total value is ${bill + tip}`)

//  ===========SECTION 3 CODING CHALLENGE 1 ============

// const calcAverage = (a,b,c) => (a+b+c)/3
// const scoreKoalas = calcAverage(65,54,49)
// const scoreDolphins = calcAverage(44,23,71)
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if(avgDolphins >= avgKoalas) {
//         console.log(`DOlphins wins the trophy of score ${avgDolphins}`)
//     }
//     else if(avgKoalas >= avgDolphins) {
//         console.log(`Koalas wins the trophy of score ${avgKoalas}`)
//     }
//     else {
//         console.log(`No one wins the trophy`)
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)

// const years = [1991, 1996, 2000];
// console.log(typeof years)   // type of array is object
// for(let i = 0; i < years.length; i++) {
//     let finalAges = [];
//     const ages = 2023 - years[i]
//     finalAges.push(ages)
//     // console.log(years[i],ages)
//     console.log(finalAges)
// }

// ======== CODING CHAALLENGE 2 ==========

// const calcTip = (bill) => {
//     if(bill >= 50 && bill <=300) {
//         const tip = .15 * bill;
//         return `the bill value is ${bill}, the tip is ${tip} and the total is ${bill + tip} acc to .15`
//     } else {
//         const tip = .20 * bill;
//         return `the bill value is ${bill}, the tip is ${tip} and the total is ${bill + tip} acc to .2`
//     }
// }
// console.log(calcTip(10));
// const bills = [125,555,44];
// let arr = []
// arr.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]))
// console.log(arr)
// console.log(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]))

// ======= CODING CHALLENGE 3 =============

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.markBMI = this.mass / this.height ** 2
//         return this.markBMI
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.johnBMI = this.mass / this.height ** 2
//         return this.johnBMI
//     }
// }

// console.log(mark['calcBMI'](), john.calcBMI())

// if(mark['calcBMI']() > john['calcBMI']()) {
//     console.log(`${mark['fullName']} BMI (${mark['calcBMI']()} is higher than ${john['fullName']}) BMI (${john['calcBMI']()})`)
// } else {
//     console.log(`${john['fullName']} BMI (${john['calcBMI']()} is higher than ${mark['fullName']}) BMI (${mark['calcBMI']()})`)
// }

// ======= CODING CHALLENGE 4=======

// const calcTip = (bills) => {
//     return bills >=50 && bills <=300 ? bills * .15: bills * .2
// }
// const billsArr = [22,295,176, 440, 37, 105, 10, 1100, 86, 52];
// const tipsArr = [];
// const totalArr = [];

// for(let i =0; i < billsArr.length; i++) {
//     const tips = calcTip(billsArr[i]);
//     const total = billsArr[i] + tips;
//     tipsArr.push(tips)
//     totalArr.push(total)
// }
// console.log(billsArr, tipsArr,totalArr);

// ====BONUS CHALLENGE=====

// let sum =0;

// for(let i=0; i< billsArr.length; i++) {
//     // console.log(billsArr[i])
//     sum = sum + billsArr[i];
// }
// console.log(sum)
// const avg = sum / billsArr.length;
// console.log(avg)

// const calcAverage = (arr) => {
//     let sum = 0;
//     for(let i =0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     console.log(sum)
//     return sum / arr.length
// }

// // console.log(calcAverage([2,3,7]))
// console.log(calcAverage(billsArr))

//  =================== EXECUTION CONTEXT =============
// const name = "Ankit";

// function a() {
//   var fa = "1st function o/p1";
//   console.log(fa);
//   b();
//   console.log(`let see when i will be on console.`);
//   console.log(name);
// }

// function b() {
//   console.log(`2nd function 0/p2`);
//   c();
// }

// function c() {
//   console.log(`3rd function o/p3`);
// }

// console.log(name);
// a();
