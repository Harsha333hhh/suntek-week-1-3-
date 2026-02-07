// create Date object for current date and time
let d1 = new Date();
console.log("Current date and time:", d1.toString());

// extract individual parts from date object
let year = d1.getFullYear();
let month = d1.getMonth() + 1;     // month is 0 based so adding 1
let date = d1.getDate();
let day = d1.getDay();             // day of week (0 = Sunday)
let hours = d1.getHours();
let minutes = d1.getMinutes();
let seconds = d1.getSeconds();

// array to convert numeric month to human readable name
let months = ["January","February","March","April","May","June",
              "July","August","September","October","November","December"];

console.log("year", year);
console.log("month", months[month - 1]);
console.log("date", date);
console.log("day of week", day);
console.log("hours", hours,
            "minutes", minutes,
            "seconds", seconds);

// display date in custom format DD-MM-YYYY HH:mm:ss
console.log(`${date} - ${month} - ${year} ${hours} : ${minutes} : ${seconds}`);
