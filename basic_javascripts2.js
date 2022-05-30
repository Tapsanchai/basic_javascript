
// const fetch = require("node-fetch");
const nums = [1,7,7,6,'re auto'];
const txt = ['test1','test2'];
console.log(txt.map(tag => 
    console.log("test ="+tag)    
));
let show_txt = txt.map(tag => { return tag += '__gg'});
console.log('show_txt =', show_txt);
//Map
const SetNewnums = (nums.map( (v_nums, index) => (v_nums += index)));

console.log("Default nums: " + nums); 
console.log(SetNewnums);
console.log(SetNewnums[0]);

//every
const Everynums = nums.every((item) => item > 5);
console.log(Everynums);

//some
const Somenums = nums.some((item) => item === 'auto' );
console.log('some = ', Somenums);

// //filter
// const SetFilternums = (nums.filter( v_nums => (v_nums === 1)));
// console.log('filter', SetFilternums);

// //find
// const SetFindnums = (nums.find( v_nums => (v_nums === 1)));
// console.log('find', SetFindnums);

// //findIndex
const SetFinIndexdnums = (nums.findIndex( v_nums => (v_nums === 7)));
console.log('fildIndex = ', SetFinIndexdnums);

// let chk = ['a','b',2].findIndex(value => value === 3);
// if ((chk) > -2) {
//     console.log('chk = ',chk);
// }

//reduce
const SetReducenums = (nums.reduce((acc, v_nums) => (acc += v_nums), 0));
console.log('SetReducenums =', SetReducenums);


// // async await (Read JSON Data)
// const requestcovid = async () =>  {
//     const result = await fetch('https://covid19.th-stat.com/api/open/today');
//     const data = await result.json();

//     console.log(data);
//     console.log("Confirmed: " + data.Confirmed);
//     return data;
// }
// const func_main = requestcovid();
// func_main.then((item) => { 
//     console.log(item);
// }).catch((err) => {
//     console.log(err)
// })

