
debugger;
var executor= function(){
   
page.goto('https://www.google.es').then(response => console.log(response));
 };

/* function a(){
(async() =>{await executor();}) 
 };*/

 executor();
