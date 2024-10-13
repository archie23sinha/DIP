const csv = require('csvtojson');
const fs = require('fs');

csv()
  .fromFile('./hotel_bookings_1000.csv')
  .then((jsonObj) => {
    fs.writeFileSync('hotel_bookings_1000.json', JSON.stringify(jsonObj, null, 2));
    console.log('CSV file has been converted to JSON');
  })
  .catch((error) => {
    console.error('Error converting CSV to JSON:', error);
  });
