
var asyncMaker=function () { 
        return async function () {
            await this.page.goto('https://www.betfair.es/sport/inplay');

            await this.page.waitForSelector('#onetrust-accept-btn-handler');
            await this.page.click('#onetrust-accept-btn-handler');
            await  this.page.keyboard.sendCharacter("a");


        };};


asyncMaker();



