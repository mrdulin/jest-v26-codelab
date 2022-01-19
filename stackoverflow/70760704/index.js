const fs = require('fs');
const htmlString = fs.readFileSync('../utils/htmlString.html').toString();
console.log('htmlString: ', htmlString);
