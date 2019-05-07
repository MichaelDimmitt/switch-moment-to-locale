const US_Format = {
  FULL_LINE: "MMMM Do YYYY, h:mm:ss a", /* May 7th 2019, 12:17:00 pm */
  CALENDAR_DATE: "MM/DD/YYYY", /* 04/27/2019 */
  MONTH_DAY_YEAR: "MMM Do YY", /* May 7th 19 */
  REGULAR_TIME_UPPERCASE: "h:mm A", /* 7:32 AM */
  REGULAR_TIME_LOWERCASE: "h:mm a", /* 7:32 AM */
  MILITARY_TIME: "h:mm"             /* 07:32 */ 
}

// // Format Dates
// moment().format("MMMM Do YYYY, h:mm:ss a"); /* May 7th 2019, 12:17:00 pm */
// moment().format("dddd");                    // Tuesday
// moment().format("MM/DD/YYYY");              // 04/27/2019
// moment().format("MMM Do YY");               // May 7th 19
// moment().format();                          // 2019-05-07T12:17:00-04:00
//                                             // undefined
// // Relative Time
// moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 7 years ago
// moment().startOf('day').fromNow();        // 12 hours ago
// moment().endOf('day').fromNow();          // in 12 hours
// moment().startOf('hour').fromNow();       // 18 minutes ago
                         
// // Calendar Time
// moment().subtract(10, 'days').calendar().format("MM/DD/YYYY"); // 04/17/2019

// moment().subtract(6, 'days').calendar();  // Last Wednesday at 12:18 PM
