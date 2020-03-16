const puppeteer = require('puppeteer');

var functions = {
    screenshot_window: async function(url) {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.setViewport({ width: 1280, height: 800 })
            await page.goto(url)
            await page.screenshot({ path: './results/responsive-pc size.png', fullPage: true })
            await browser.close()
            return 0;
        },
    screenshot_tablet: async function(url) {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setViewport({ width: 960, height: 600 })
        await page.goto(url)
        await page.screenshot({ path: './results/responsive-tablet size.png', fullPage: true })
        await browser.close()
        return 0;
    },
    screenshot_phone: async function(url) {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setViewport({ width: 360, height: 740 })
        await page.goto(url)
        await page.screenshot({ path: './results/responsive-phone size.png', fullPage: true })
        await browser.close()
        return 0;
    }

}

exports.functions = functions;