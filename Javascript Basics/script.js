//fundamentals of javascript
//arrays and objects
//functions return 
//async js coding


var sample = [1,2,3,4,"hey",{},true,function(){},[]]; //array can hold multiple data types in javascript
//topics to learn in arrays- foreach , map , filter , find , indexOf , reduce

var arr=[1,2,3,4,5];
//forEach
arr.forEach(function(val){
    console.log(val+" hello");
});


//map
var newarr = arr.map(function(val){
    return val+12;
});
console.log(newarr);


//filter (it returns a new array and filters based on boolean condition)
// var newarr2 = arr.filter(function(val){
//     if(val>3){
//         return true;
//     }
//     else return false;
// });
// console.log(newarr2);

var newarr2 = arr.filter(function(val){
    return val>3;
});
console.log("filtered array : "+newarr2);

//find (it returns the first matching element based on condition)
var newarr3 = arr.find(function(val){
    if(val==2) return val;
});
console.log(newarr3); //2


//indexOf (it returns the index of the element)
var index = arr.indexOf(4);
console.log(index); //3



//objects (curly braces ke andar key value pairs hote hain that are objects)
var obj={
    name:"Shreya",
    age:19,
    isStudent:true
}
Object.freeze(obj); //this will make the object immutable (you cannot change its properties)
console.log(obj.name); 
console.log(obj['age']); //another way to access object properties
obj.age=20;
console.log(obj.age); //20 (age will not change because object is frozen)

//length of array and function
var arr2 = [1,2,3,4,5];
console.log("length of an array: "+arr2.length);

function abcd(){

}
console.log("length of function without any parameters: "+abcd.length); //0 (number of parameters the function takes)

function abcd2(a,b,c){

}
console.log("length of function with parameters: "+abcd2.length); //3 (number of parameters the function takes)

//functions return
function add(a,b){
    return a+b;
}
var sum = add(5,10);
console.log("Sum is: "+sum);


//async js coding 
//what is synchronus - line by line execution of code
// asynchronus - jo bhi code async nature ka ho, usse side stack mei bhej do and agle code ko 
// chlao jo bhi sync nature ka ho,jab bhi sara sync code chal jaye tab check kro ki async code
// complete hua ya nhi and agar vo complete hua ho toh usse main stack mei lao or chla do.


//----------------------------
//Async Javascript - topics to be covered
//async js hai kya 
// js is not asynchronus
//async ki poori kahani
// single threading and multi threading
//callbacks
//promises
//then and catch
//try and catch
//async await
//5 use cases ek dm real world 
//[concept aside]
//concurrency vs parallelism
//throttling




