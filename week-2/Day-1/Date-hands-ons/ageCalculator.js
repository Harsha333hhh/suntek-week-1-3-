// create date object from given date of birth
let dob = new Date("2000-05-15");

// get current date
let today = new Date();

// calculate initial age difference by year
let age = today.getFullYear() - dob.getFullYear();

// calculate month difference to adjust age if birthday not passed
let month = today.getMonth() - dob.getMonth();

console.log(age, month);
