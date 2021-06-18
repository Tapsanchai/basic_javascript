
const fetch = require("node-fetch");
const nums = [4,5,6];

//Map
const SetNewnums = (nums.map( (v_nums, index) => (v_nums += index)));

console.log("Default nums: " + nums); 
console.log(SetNewnums);
console.log(SetNewnums[0]);

//every
const Everynums = nums.every((item) => item > 5);
console.log(Everynums);

//some
const Somenums = nums.some((item) => item < 5);
console.log(Somenums);

//filter
const SetFilternums = (nums.filter( v_nums => (v_nums != 5)));
console.log(SetFilternums);

//find
const SetFindnums = (nums.find( v_nums => (v_nums === 5)));
console.log(SetFindnums);

//findIndex
const SetFinIndexdnums = (nums.findIndex( v_nums => (v_nums === 5)));
console.log(SetFinIndexdnums);

//reduce
const SetReducenums = (nums.reduce((acc, v_nums) => (acc += v_nums), 0));
console.log(SetReducenums);


//async await (Read JSON Data)
const requestcovid = async () =>  {
    const result = await fetch('https://covid19.th-stat.com/api/open/today');
    const data = await result.json();

    console.log(data);
    console.log("Confirmed: " + data.Confirmed);
    return data;
}
const func_main = requestcovid();



