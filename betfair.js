
var asyncMaker=function () { 
        return async function () {
            await page.goto('https://www.betfair.es/sport/inplay');

            await page.waitForSelector('#ssc-liu');
            await page.click('#ssc-liu');
            await  page.keyboard.sendCharacter("a");


        };};


asyncMaker();



