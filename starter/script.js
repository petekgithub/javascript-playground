// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
// data2 = [12,5,-5,0,4];

// const _printForecast = (arr) => {
//   for (let i = 0, day = 1; i < arr.length; i++, day++) {
//     console.log(`${arr[i]}C in ${day} days`);
//   }
// };
//console.log(_printForecast([17, 21, 23]));

console.log(`...${data1[0]}C......${data1[1]}C......${data1[2]}C...`);

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days...`;
  }
  console.log(str);
};

console.log(printForecast(data1));
