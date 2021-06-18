let num = 50;

//ternary operator (if-else)
let result = num <= 50 ? "Pass" : "Fail";

//arrow function
const arrowShow = (num) => (num <= 50 ? "Pass" : "Fail");

const result2 = arrowShow(num);
console.log(result2);

let width = 5.5;
let height = 4;
const arrowShow2 = (width, height) => width * height;
const result3 = arrowShow2(width, height);
console.log(result3);

//javaScripts OOP
let student_oj = {
  id: 1,
  name: "parew",
  email: "parew@gmail.com",
  class_st: "ป.ตรี",
  room: "CED#5 RA",
};

console.log(student_oj);

//destructuring
const { name, class_st, room } = student_oj;
console.log("St_Name: " + name);
console.log("St_class: " + class_st);
console.log("St_room: " + room);
console.log("");
//strudnet_oj.phone = '789';

//spread and rest operator ...
const NewsetKey_Value = { ...student_oj, phone: "789" };
const { phone, ...other } = NewsetKey_Value;
console.log("St_phone: " + phone);
console.log(other);

let array_nums = [1, 2, 3];
const NewValue_nums = [...array_nums, 4, 5, "good"];
console.log(array_nums);
console.log(NewValue_nums);
console.log(NewValue_nums[5]);
console.log("");

//class in js
class create_studentList {
  constructor(st_id, st_name) {
    this.st_id = st_id;
    this.st_name = st_name;

    //sreturn console.log(st_id + ' - ' + st_name);
  }
}
const create_list = new create_studentList(10, "kuma");
console.log(create_list);
console.log(create_list.st_id);
console.log(create_list.st_name);
