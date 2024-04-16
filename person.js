const prompt=require('prompt-sync')();
const person1 =(prompt("Name :"));
const mark1 =(prompt("Enter the marks here :"));
const mark2 =(prompt("Enter the marks here :"));
const mark3 =(prompt("Enter the mark here :"));

totalaverage = (mark1 + mark2 + mark3)/3;
let message;


if (totalaverage < 50){
    message = "Fail"
 }
 if(totalaverage >= 50 && totalaverage < 75){
     message="passed"
 }
 if(totalaverage >=75 && totalaverage<= 100){
    message="passed with dist"
 }
 else {
  message="Check if the input is correct"
 }

console.log("total marks: "+ totalaverage + person1 + message)






