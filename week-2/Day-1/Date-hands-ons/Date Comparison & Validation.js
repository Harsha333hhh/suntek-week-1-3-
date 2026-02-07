// create deadline date object
let dline = new Date("2026-01-22");

// get today's date
let today = new Date();
console.log("Current date and time:", today.toString());

// check enrollment status based on comparison
if (today < dline) {
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}

// ----- date validation logic -----

// default days count for each month (non-leap year)
let daysineachmonth = [31,28,31,30,31,30,31,31,30,31,30,31];

// user input date to validate
let date = new Date("2026-03-30");

let year = date.getFullYear();
let month = date.getMonth();   // 0 based month index
let day = date.getDate();

console.log(day, month, year);

// adjust February days in case of leap year
if (month == 2) {
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    daysineachmonth[1] = 29;
  }
}

// check if day exceeds allowed days of that month OR month is out of range
if (day > daysineachmonth[month] && (month < 0 || month > 12)) {
  console.log("Invalid Date");
} else {
  console.log("Valid Date");
}
