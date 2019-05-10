function us_format ( str ) {
  const us_format = {
    REGULAR_TIME_LC: "h:mm a",    /* 7:32 am */
    REGULAR_TIME_UC: "h:mm A",    /* 7:32 AM */

    Date_Calendar: "MM/DD/YYYY",  /* 04/27/2019 */
    Month_Day_Year: "MMMM D YYYY", /* May 7, 2019 */
    Month_Day_Year_Time: "MMMM Do YYYY, h:mm:ss a", /* May 7th 2019, 12:17:00 pm */
    Day_Of_Week_Month_Day_Year_Time: "dddd, MMMM Do YYYY hh:mm a" /* Friday, May 16th 2014 12:30 pm */
  };
  // console.log({str, self: this, foo: lc_format[str]})
  return us_format[str]
}

function lc_format ( str ) {
  const lc_format = {
    REGULAR_TIME: this.format('LT'),    /* 7:32 AM */
    REGULAR_TIME_SECONDS: this.format("LTS"),    /* 7:32:05 AM */

    Date_Calendar: this.format("L"),  /* 04/27/2019 */
    Month_Day_Year: this.format('LL'), /* August 7, 2019 */
    Month_Day_Year_Time: this.format('LLL'), /* August 7th 2019, 12:17:00 pm */
    Day_Of_Week_Month_Day_Year_Time: this.format('LLLL'), /* Friday, August 16th 2014 12:30 pm */
    Day_Of_Week_Month_Day_Year_Time_Shrunk: this.format('llll') /* Fri, Aug 16th 2014 12:30 pm */
  };
  // console.log({str, self: this, foo: lc_format[str]})
  return lc_format[str]
}
function handleCaps (date, caps) {
  function lowercaseTimeFromDate(date){
    return date.replace("PM","pm").replace("AM","am");
  }
  function uppercaseTimeFromDate(date){
    return date.replace("pm","PM").replace("am","AM");
  }
  return caps == 'lc' ? lowercaseTimeFromDate(date) : uppercaseTimeFromDate(date)
}
function mformat ( str, region='us', caps='lc' ) {
  const mformat = {
    us : {
      REGULAR_TIME: this.format("h:mm a"),    /* 7:32 am */

      Date_Calendar: this.format("MM/DD/YYYY"),  /* 04/27/2019 */
      Month_Day_Year: this.format("MMMM D YYYY"), /* May 7, 2019 */
      Month_Day_Year_Time: this.format("MMMM Do YYYY, h:mm:ss a"), /* May 7th 2019, 12:17:00 pm */
      Day_Of_Week_Month_Day_Year_Time: this.format("dddd, MMMM Do YYYY hh:mm a") /* Friday, May 16th 2014 12:30 pm */
    },
    lc : {
      REGULAR_TIME: this.format('LT'),    /* 7:32 am */
      REGULAR_TIME_SEC: this.format("LT"),    /* 7:32 AM */

      Date_Calendar: this.format("L"),  /* 04/27/2019 */
      Month_Day_Year: this.format('LL'), /* August 7, 2019 */
      Month_Day_Year_Time: this.format('LLL'), /* August 7th 2019, 12:17:00 pm */
      Day_Of_Week_Month_Day_Year_Time: this.format('LLLL'), /* Friday, August 16th 2014 12:30 pm */
      Day_Of_Week_Month_Day_Year_Time_Shrunk: this.format('llll') /* Fri, Aug 16th 2014 12:30 pm */
    }
  };
  return str ? handleCaps(mformat[region][str], caps) : (
    console.log('no option provided, function returned', this, "\n")
    , console.log("example of correct usage: mformat('us', 'Month_Day_Year')")
    , console.log('here are the possible formats: ', "\n\n", {mformat}, "\n" )
    , this
  )
}


Object.prototype.mformat = mformat;
Object.prototype.lc_format = lc_format;
Object.prototype.us_format = us_format;
const moment = require('moment');
const us = moment().mformat('Month_Day_Year_Time')
const lol = moment().mformat('Month_Day_Year_Time')
const lc = moment().lc_format('Month_Day_Year_Time')
console.log(`
  us: ${us}, 
  lol: ${lol}
  lc: ${lc}
  ${moment().mformat()}
  lc ${moment(lc.toDate).lc_format('Day_Of_Week_Month_Day_Year_Time_Shrunk')}`
)

