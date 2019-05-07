const moment = require('moment');
console.log({
b: moment().format('LT').toLowerCase(),                                             // 12:43 pm                         // 'h:mm a'
c: moment().format('LT'),                                                           // 12:43 PM                         // 'h:mm A'
d: moment().format('LTS').toLowerCase(),                                            // 12:43:33 pm                      // 'hh:mm:ss A'
e: moment().format('LTS'),                                                          // 12:43:33 PM                      // 'hh:mm:ss A'
f: moment().format('L'),                                                            // 05/07/2019                       // 'MM/DD/YYYY'
g: moment().format('l'),                                                            // 5/7/2019                         // 'M/D/YYYY'
h: moment().format('LL'),                                                           // May 7, 2019                      // 'MMMM D YYYY'
i: moment().format('ll'),                                                           // May 7, 2019                      // 'MMM D YYYY'
j: moment().format('LLL'),                                                          // May 7, 2019 12:43 PM             // 'MMMM D YYYY hh:mm:ss A'
k: moment().add(3, 'months').format('lll').replace("PM","pm").replace("AM","am"),   // Aug 7, 2019 12:43 PM             // 'MMM D YYYY hh:mm:ss a'
l: moment().add(3, 'months').format('LLLL'),                                        // Tuesday, August 7, 2019 12:43 PM // 'DD MMMM YYYY hh:mm:ss A'
m: moment().format('llll').replace("PM","pm").replace("AM","am"),                   // Tue, Aug 7, 2019 12:43 PM        // 'D MMM YYYY hh:mm:ss A'
n: moment.locale() /* en */
})
