/*
function fizzBuzz() {
  for(i=0;i<100;i++){
    if(i%3 === 0 && i%5  === 0 ){
      console.log("FizzBuzz");
    }else  if(i%3 === 0 ){
      console.log("Fizz");
    }else  if(i%5 === 0 ){
      console.log("Buzz");
    }else{
      console.log(i);
    }
  }
}
fizzBuzz();
*/

var express = require('express');

var app=express();

app.get('/',function(req,res){
  res.send('Hello World! I\'m Joengrae');
});

app.listen(3000,function (){
  console.log('Server On!');
});
