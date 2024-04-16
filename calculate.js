const prompt=require('prompt-sync')();
const mark1 =parseInt(prompt("enter mark 1 :"));
const mark2 =parseInt(prompt("enter mark 2 :"));
const mark3 =parseInt(prompt("enter mark 3 :"));
let averageNum =0;
averageNum=(mark1 + mark2 + mark3)/3;



let totalaverage=(mark1 + mark2 + mark3)/3;
console.log("person1")

if (averageNum <50){
   console.log("Fail")
}
if(averageNum >= 50 && averageNum < 75){
    console.log("passed")
}
if(averageNum >=75 && averageNum <= 100){
    console.log("passed with dist")
}
else {


 console.log("Check if the input is correct")
}





