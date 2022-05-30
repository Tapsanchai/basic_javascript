var obj = {
}

console.log('obj.a :>> ', obj.a, '| flag = ', obj.hasOwnProperty('a') ? true : false);
// console.log('obj.b :>> ', obj.b, '| flag = ', obj.b ? true : false);

var txt1 = 'dsr_c-assd'
var lt1 = ['dsr_a', 'dsr_b']
var lt2 = [4, 5, 6]
console.log('has value :>> ', lt1.includes(txt1.split('-')[0]));

// var txt2 = txt1.split('-')
// console.log('txt2 :>> ', txt2);


console.log(lt2.every(val => val > 4));
console.log(lt2.some(val => val > 4));
// console.log(lt2.reduce((p_val, c_val) => p_val + c_val, 0));

let obj_lt = [
    {'No.': 1, 'Name': 'A', 'Status': true},
    {'No.': 2, 'Name': 'B', 'Status': false},
    {'No.': 3, 'Name': 'C', 'Status': false},
    {'No.': 4, 'Name': 'D', 'Status': true},
    {'No.': 5, 'Name': 'E', 'Status': false},
    {'No.': 6, 'Name': 'F', 'Status': false},
    {'No.': 7, 'Name': 'G', 'Status': true},
]
let num_lt = [1,3,5,1,1,5]
let data_lt = [
    ['No.', 456],
    ['Name.', 'Parew'],
    ['Status.', true],
]



// Create new data list by check obj status
let new_obj_lt = obj_lt.reduce((new_lt, item) => {
    item.Status ? new_lt.push(item) : new_lt;
    return new_lt;
}, []);
console.log('new_obj_lt :>> ', new_obj_lt);

// Count data by group status
let new_obj_count_status = obj_lt.reduce((new_obj, item) => {
    item.Status ? new_obj.St_T += 1 : new_obj.St_F += 1;
    return new_obj;
}, {'St_T': 0, 'St_F': 0});
console.log('new_obj_count_status :>> ', new_obj_count_status);

let new_obj_by_status = obj_lt.reduce((new_obj, item) => {
    item.Status ? new_obj.St_T.push(item): new_obj.St_F.push(item);
    return new_obj;
}, {'St_T': [], 'St_F': []});
console.log('new_obj_by_status :>> ', new_obj_by_status);

// Count data pairs some number
let total_pair = num_lt.reduce((total, p_num, index) => {
    let len_of_somenum =  num_lt.slice(index+1,).filter(c_num => c_num === p_num).length;
    // console.log(`p_num = ${p_num} | len_of_somenum = ${len_of_somenum}`);
    return total += len_of_somenum;
}, 0);
console.log('total_pair :>> ', total_pair);

// Create new data list unique value
let new_unique_num_lt = num_lt.reduce((new_lt, p_num) => {
    ! new_lt.includes(p_num) ? new_lt.push(p_num) : null;
    return new_lt;
}, []);
console.log(`old_num_lt = ${num_lt} | new_unique_num_lt = ${new_unique_num_lt}`);

// Create new obj pair key:value from data list
let new_obj_pair = data_lt.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
}, {});
console.log('new_obj_pair :>> ', new_obj_pair);

console.log('obj :>> ', Object.keys({'a':1}).length ? true : false);
console.log('array :>> ', [1].length ? true : false);
// console.log(''.split('-')[0]);

let main_lt = [21, 45, 67, 76]
let other_lt = [34, 45, 56]
let con_lt = main_lt.concat(other_lt)
let spread_lt = [...main_lt, ...other_lt]

console.log('con_lt :>> ', con_lt);
console.log('spread_lt :>> ', spread_lt);

