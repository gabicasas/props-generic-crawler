
var asyncMaker=function () { 
        return async function () {
            await page.goto('https://www.google.es');

        };};


return asyncMaker;



