// what do I want to do?
// 1) "momentValue09/25/2019".us_format.REGULAR_TIME
// result: tryFormat('lc', formatString)

const moment = require('moment');

function lowercaseTimeFromDate(){
  const date_val = this; // inherit from data prototype
  return date_val.replace("PM","pm").replace("AM","am");
}
function momentFormat ( formatString, case_val= uc ) {
  const date_val = this; // inherit from data prototype
  case_val == 'uc' ? date_val.format(formatString) 
  : case_val == 'lc' ? date_val.format(formatString).lowercaseTimeFromDate()
  : ( console.log('wrong parameters!'), date_val )
}
function Full_Format ( ) {
  date_val = this; // inherit from data prototype
}
Moment.prototype.Full_Format = lowercaseTimeFromDate;
Moment.prototype.Full_Format = Full_Format;

module.exports = String;
module.exports = { mtrim: mTrim };
const Full_Format = {
  us_format: {
    REGULAR_TIME_LC: "h:mm a",    /* 7:32 am */
    REGULAR_TIME_UC: "h:mm A",    /* 7:32 AM */

    Date_Calendar: "MM/DD/YYYY",  /* 04/27/2019 */
    Month_Day_Year: "MMMM D YYYY", /* May 7, 2019 */
    Month_Day_Year_Time: "MMMM Do YYYY, h:mm:ss a", /* May 7th 2019, 12:17:00 pm */
    Day_Of_Week_Month_Day_Year_Time: "dddd, MMMM Do YYYY hh:mm a" /* Friday, May 16th 2014 12:30 pm */
  },
  
  lc_format: {
    REGULAR_TIME_LC: momentFormat('LT', 'lc'),    /* 7:32 am */
    REGULAR_TIME_UC: momentFormat("LT"),    /* 7:32 AM */

    Date_Calendar: momentFormat("L", 'lc'),  /* 04/27/2019 */
    Month_Day_Year: momentFormat('LL', 'lc'), /* August 7, 2019 */
    Month_Day_Year_Time: momentFormat('LTS', 'lc'), /* August 7th 2019, 12:17:00 pm */
    Day_Of_Week_Month_Day_Year_Time: momentFormat('LLL', 'lc'), /* Friday, August 16th 2014 12:30 pm */
    Day_Of_Week_Month_Day_Year_Time_Shrunk: momentFormat('lll', 'lc') /* Fri, Aug 16th 2014 12:30 pm */
  },
  additional_format: {
    MILITARY_TIME: "h:mm"         /* 12:32 */ 
  },
}
function Time_LT_(date){ return date.format('LT');/* 12:43 pm | 'h:mm A' */ }
function Time_lt_(date){ /* 12:43 pm | 'h:mm a' */ return date.format('LT').toLowerCase(); }

function TimeIncludeSeconds_LTS_(date){ return moment().format('LTS') /* 12:43:33 pm | 'hh:mm:ss A' */}
function TimeIncludeSeconds_lts_(date){return moment().format('LTS').toLowerCase() /* 12:43:33 pm | 'hh:mm:ss a' */ }

function Date_L_(date){ return date.format('L');/* 05/07/2019 | 'MM/DD/YYYY' */ }

function MonthDayOfMonthYear_LL_(date){ return date.format('LL') /* May 7, 2019 | 'MMMM D YYYY' */}
function MonthDayOfMonthYear_ll_(date){ return lowercaseTimeFromDate(date.format('ll')) /* May 7, 2019 | 'MMMM D YYYY' */}

function MonthDayOfMonthYearTime_LLL_(date){
  /* May 7, 2019 12:43 PM | 'MMMM D YYYY hh:mm:ss A' */ return date.format('LLL') }
function MonthDayOfMonthYearTime_lll_(date){
  /* May 7, 2019 12:43 PM | 'MMMM D YYYY hh:mm:ss a' */ return lowercaseTimeFromDate(date.format('lll'))}

function DayOfWeekMonthDayOfMonthYearTime_LLLL_(date){
  /* Tuesday, August 7, 2019 12:43 PM | 'DD MMMM YYYY hh:mm:ss A' */ return date.format('LLLL') }
function DayOfWeekMonthDayOfMonthYearTime_llll_(date){
  /* Tuesday, August 7, 2019 12:43 PM | 'DD MMMM YYYY hh:mm:ss A' */ return lowercaseTimeFromDate(date.format('llll'))
}

console.log({
  Regular_Time: "12:43 pm |h:mm a",
  Time_With_Seconds: "12:43:33 PM | hh:mm:ss A",
  Date_Numeric: "05/07/2019 | MM/DD/YYYY",
  Month_Day_Year: "May 7, 2019 | MMMM D YYYY",
  Month_Day_Year_Time: "May 7, 2019 12:43 PM | MMMM D YYYY hh:mm:ss A",
  Day_Of_Week_Month_Day_Year_Time: "Tuesday, August 7, 2019 12:43 PM | DD MMMM YYYY hh:mm:ss A",
  us: Full_Format.us_format,
  ad: Full_Format.additional_format,
  lc: Full_Format.lc_format
})
console.log({
  Additional_Links: {
    url1: "https://devhints.io/moment",
    url2: "https://momentjs.com/docs/#/parsing/string-format/"
  }
})

