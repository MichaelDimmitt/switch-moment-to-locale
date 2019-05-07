const moment = require('moment');

const US_Format = {
  REGULAR_TIME_LC: "h:mm a",    /* 7:32 am */
  REGULAR_TIME_UC: "h:mm A",    /* 7:32 AM */
  
  Date_Calendar: "MM/DD/YYYY",  /* 04/27/2019 */
  Month_Day_Year: "MMMM D YYYY", /* May 7, 2019 */
  Month_Day_Year_Time: "MMMM Do YYYY, h:mm:ss a", /* May 7th 2019, 12:17:00 pm */
  Day_Of_Week_Month_Day_Year_Time: "dddd, MMMM Do YYYY hh:mm a" /* Friday, May 16th 2014 12:30 pm */
}
const Additional_Format = {
  MILITARY_TIME: "h:mm"         /* 12:32 */ 
}

console.log({
  Regular_Time: "12:43 pm |h:mm a",
  Time_With_Seconds: "12:43:33 PM | hh:mm:ss A",
  Date_Numeric: "05/07/2019 | MM/DD/YYYY",
  Month_Day_Year: "May 7, 2019 | MMMM D YYYY",
  Month_Day_Year_Time: "May 7, 2019 12:43 PM | MMMM D YYYY hh:mm:ss A",
  Day_Of_Week_Month_Day_Year_Time: "Tuesday, August 7, 2019 12:43 PM | DD MMMM YYYY hh:mm:ss A",
  US_Format,
  Additional_Format
})
console.log({
Additional_Links: {
url1: "https://devhints.io/moment",
url2: "https://momentjs.com/docs/#/parsing/string-format/"
}
})
