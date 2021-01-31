
var asyncMaker=function () { 
        return async function () {
            await page.goto('https://www.betfair.es/sport/inplay');

            await page.waitForSelector('#onetrust-accept-btn-handler');
            await page.click('#onetrust-accept-btn-handler');
            await  page.keyboard.sendCharacter("a");


        };};


asyncMaker();



