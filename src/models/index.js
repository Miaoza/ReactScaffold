const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
console.log(context,'---',keys);
