const moment = require('moment');
//  Comments are in US formatting.

function lowercaseTimeFromDate(date){
  return date.replace("PM","pm").replace("AM","am");
}

function LT_Time(date){ 
  /* 12:43 pm | 'h:mm A' */ return date.format('LT'); }
function lt_Time(date){ 
  /* 12:43 pm | 'h:mm a' */ return date.format('LT').toLowerCase(); }

function LTS_TimeIncludeSeconds(date){ 
  /* 12:43:33 pm | 'hh:mm:ss A' */ return moment().format('LTS') }
function lts_TimeIncludeSeconds(date){ 
  /* 12:43:33 pm | 'hh:mm:ss a' */ return moment().format('LTS').toLowerCase() }

function L_Date(date){ 
  /* 05/07/2019 | 'MM/DD/YYYY' */ return date.format('L'); }

function LL_MonthDayOfMonthYear(date){ 
  /* May 7, 2019 | 'MMMM D YYYY' */ return date.format('LL') }
function ll_MonthDayOfMonthYear(date){ 
  /* May 7, 2019 | 'MMMM D YYYY' */ return lowercaseTimeFromDate(date.format('ll')) }

function LLL_MonthDayOfMonthYearTime(date){ 
  /* May 7, 2019 12:43 PM | 'MMMM D YYYY hh:mm:ss A' */ return date.format('LLL') }
function lll_MonthDayOfMonthYearTime(date){ 
  /* May 7, 2019 12:43 PM | 'MMMM D YYYY hh:mm:ss a' */ return lowercaseTimeFromDate(date.format('lll'))}

function LLLL_DayOfWeekMonthDayOfMonthYearTime(date){ 
  /* Tuesday, August 7, 2019 12:43 PM | 'DD MMMM YYYY hh:mm:ss A' */ return date.format('LLLL') }
function llll_DayOfWeekMonthDayOfMonthYearTime(date){
  /* Tuesday, August 7, 2019 12:43 PM | 'DD MMMM YYYY hh:mm:ss A' */ return lowercaseTimeFromDate(date.format('llll'))
}
