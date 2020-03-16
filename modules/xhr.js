const writer = require('fs');
const puppeteer = require('puppeteer');
const { initFixtureRouter } = require('puppeteer-request-intercepter');


var functions = {
    xhr: async function(url) {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        page.on('response', response => writer.writeFile("./results/console.txt", response.remoteAddress.ip, function(err){
            if(err){
                return console.log(err);
            }
            console.log('console saved succesfull')
        }));
        await page.goto(url);
        await browser.close();
        return 0;
    }
}

exports.functions = functions;
