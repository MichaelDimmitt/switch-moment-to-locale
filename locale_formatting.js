const moment = require('moment');
//  Comments are in US formatting.

function lowercaseTimeFromDate(date){
  return date.replace("PM","pm").replace("AM","am");
}

function Time_LT_(date){
  /* 12:43 pm | 'h:mm A' */ return date.format('LT'); }
function Time_lt_(date){
  /* 12:43 pm | 'h:mm a' */ return date.format('LT').toLowerCase(); }

function TimeIncludeSeconds_LTS_(date){
  /* 12:43:33 pm | 'hh:mm:ss A' */ return moment().format('LTS') }
function TimeIncludeSeconds_lts_(date){
  /* 12:43:33 pm | 'hh:mm:ss a' */ return moment().format('LTS').toLowerCase() }

function Date_L_(date){
  /* 05/07/2019 | 'MM/DD/YYYY' */ return date.format('L'); }

function MonthDayOfMonthYear_LL_(date){
  /* May 7, 2019 | 'MMMM D YYYY' */ return date.format('LL') }
function MonthDayOfMonthYear_ll_(date){
  /* May 7, 2019 | 'MMMM D YYYY' */ return lowercaseTimeFromDate(date.format('ll')) }

function MonthDayOfMonthYearTime_LLL_(date){
  /* May 7, 2019 12:43 PM | 'MMMM D YYYY hh:mm:ss A' */ return date.format('LLL') }
function MonthDayOfMonthYearTime_lll_(date){
  /* May 7, 2019 12:43 PM | 'MMMM D YYYY hh:mm:ss a' */ return lowercaseTimeFromDate(date.format('lll'))}

function DayOfWeekMonthDayOfMonthYearTime_LLLL_(date){
  /* Tuesday, August 7, 2019 12:43 PM | 'DD MMMM YYYY hh:mm:ss A' */ return date.format('LLLL') }
function DayOfWeekMonthDayOfMonthYearTime_llll_(date){
  /* Tuesday, August 7, 2019 12:43 PM | 'DD MMMM YYYY hh:mm:ss A' */ return lowercaseTimeFromDate(date.format('llll'))
}
