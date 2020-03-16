const screenshoot = require('./modules/responsive.js');
const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question('ingrese la URL: ', (answer) => {
    input.close();
    screenshoot.functions.screenshot_window(answer);
    screenshoot.functions.screenshot_tablet(answer);
    screenshoot.functions.screenshot_phone(answer);
});