Factorial

let n = 5;
let result =n;
for (i=n-1;i>=1;i--){
    result=result*i;
}
console.log(result)















fizzbuzz

let numbers = [];
let n = 100;
for(i=1;i<=n;i++)
{
    numbers.push(i);
}
console.log(numbers)
for(i=1;i<numbers.length;i++){
  
    if(numbers[i]%3 ===0 & numbers[i]%5 ===0 ){
        numbers[i]="fizzbuzz"
    }
    else if(numbers[i]%3===0){
        numbers[i]="fizz"
    }
    else if(numbers[i]%5===0){
        numbers[i]="buzz"
    }

}
console.log(numbers)












Missing number

let n = 10;
let numbers = [];
for(i=0;i<=n;i++)
{
    if(i===7){

    }
    else{
    numbers.push(i);
    }
}

for(i=0;i<numbers.length;i++){
    if(numbers[i+1]===numbers[i]+1){

    }
    else{
       console.log(numbers[i]+1);
       break;
    }
}












// Missing Word
let str = "hello thoufiq wassup ?, how";
let length =[];
let max=0;
let lngwrd = ""
let strarr = str.split(" ");
console.log(strarr);
for(i=0;i<strarr.length;i++){
  
  if(max<strarr[i].length){
    max=strarr[i].length
    lngwrd=strarr[i]
  }
}
console.log(lngwrd);



Two Sum

function Twosum (numbers,target){
    
    for(i=0;i<numbers.length;i++){
        for(j=i+1;j<numbers.length;j++){
            if(numbers[i]+numbers[j]===target){
                
                return [numbers[i] ,numbers[j]];
                
            }
            else{
               
            }
        }
    }
    return "Not Found"

}
 let result = []
 result = Twosum([5,7,9,4,3,1,5,2,6,1],13);
 console.log(result)







Duplicate ELements
function CheckDupe(number){

    for(i=0;i<number.length;i++){
        for(j=i+1;j<number.length;j++){
            if(number[i]===number[j]){
                return number[i]
            }
        }
    }
    return "no DUplicate"
}
console.log(CheckDupe([1,2,3,4,5,4]));









Array Sum

function GetTotal(number){
    let sum=0;
    for(i=0;i<number.length;i++){
         sum += number[i];
    }
    return sum
}
console.log(GetTotal([1,5,9]));



prime

function PrintPrime (min,max){
    let prime=[];
    let flag = 1;
    for(j=min;j<=max;j++){
        flag=1;
    for(i=2;i<=Math.sqrt(j);i++){
        if(j%i===0){
            flag = 0;
            break;
        }
        
        }
        if(flag===1){
            prime.push(j)
        }
      
    }
    return prime
}


console.log(PrintPrime(2,30));


Second Largest Number in an array

let max;
let k=4;
let element=0;
let arr =[1,2,300,4,56,7,9,44]

function largest(nums){
    max = 0;
    for (let i = 0; i < nums.length; i++) {
        if(max<nums[i]){
           max = nums[i];  
        }  
    }
    return max
} 
if(k===1){
    element=largest(arr)
}
else{
for(i = 1;i<k;i++){   
largest(arr)
arr.indexOf(max)
arr.splice(arr.indexOf(max),1)
element=largest(arr);
    }
}

console.log(element)





Fibo
function fibo(n){
    let first = 0;
    let second = 1;
    let arr = []
    for (let i = 0; i <= n; i++) {
        if(i===0){
            arr.push(first,second)
        }
        temp = second;
        second=first+second;
        first = temp;
        arr.push(second)
        
    }
    return arr
}
console.log(fibo(5))





Count
function count(arr){
    
    return arr.reduce((acc,elem)=>{
        if(elem in acc){
            acc[elem]++
        }
        else{
            acc[elem]=1;
        }
        return acc
    },{})
 
}
console.log(count([12,3,4,5,6]))



let I = 1;
let V = 5;
let X = 10;
let L = 50;
let C = 100;
let result = 0;
let str = "XX";
let arr = str.split("")
console.log(arr)
for(let i=0;i<arr.length;i++){
  
    if(arr[i]==="I" & arr[i+1]==="V"){
    result += V-I;
    i++
   }
   else if(arr[i]==="I" & arr[i+1]==="X"){
    result += X-I;
    i++
   }
   else if(arr[i]==="I"){
    result++
   }
   else if(arr [i]==="V"){
    result +=V;
 }
 else if(arr [i]==="X"){
    result +=X;
 }
   else{
    console.log("NAN")
   }
}
console.log(result)



Converting first Letter of a String to Uppercase

function FirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  let String = "hello world";
  console.log(FirstLetter(String));


  Reverse a string

let str = "hello thoufiq wassup ?, how";
let strarr = str.split("");
let rev=[]


for(i=strarr.length-1;i>=0;i--){
    rev.push(strarr[i]);
   
}
str = rev.join("")
console.log(str)

concnating two strings

function Concatenate(str1, str2) {
    return str1.concat(str2);
  }
  
  const str1 = "THoufiq";
  const str2 = "Ahamed";
  console.log(Concatenate(str1, str2));

Converting first Letter of a String to Lowercase


function FirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  
  let String = "Hello world";
  console.log(FirstLetter(String));

  Palindrome

let str = "Malayalam";
let strlow = str.toLowerCase()
let strarr = strlow.split("");
let rev=[]


for(i=strarr.length-1;i>=0;i--){
    rev.push(strarr[i]);
   
}
let revstr = rev.join("")
if(strlow === revstr){
console.log("palindrome")
}
else{
    console.log("not")
}

Substring

function Substring(str, start, end) {
    return str.substring(start, end);
  }
  
  const String = "hello world";
  console.log(Substring(String, 0, 7));



to Replace a particular word in a String

let str = "Hello, HI HOW ARE You ?"

str = str.replace("HI","Hello")

console.log(str)


Trim
let str = "   HEllo THOUFIQ          "

str=str.trim()

console.log(str)


/ Sclicing using Negative

let Str = "Hello THoufoq AHamed"

let str2=Str.slice(-11,-1)
console.log(str2)


to find length of String

let str = "Welcome COmrade"

let len = str.length
console.log(len)


TO GET a element from specified index

let str = "cj JOnes"

console.log(str.charAt(7))



Multiply Each element by two

let aarr= [1,3,5,7,8]

function eachElement(arr){
   arr.forEach((element,i) => {
    arr[i]=element*2

   });
   return arr
}
console.log(eachElement(aarr))



To give total of an array
let arr= [3,7,88,56,85]
let sum = arr.reduce((total,value)=>{
    total += value;
    return total
})
console.log(sum)



Concatenating two arrays

let first = [4, 10, 7];
let second = [8, 7, 9];

let combined = first.concat(second);

console.log("Combined:", combined);


sort
let arr=[22,4,5,1,66,45,78]
arr.sort((a,b)=>{return a-b})
console.log(arr)



MAX element

let arr=[22,4,5,1,66,45,78]
let arr2=0;
arr2=Math.max(...arr)
console.log(arr2)



MIn
let arr=[22,4,5,1,66,45,78]
let arr2=0;
arr2=Math.min(...arr)
console.log(arr2)




To remove ELements From arr


let arr = [1,2,3,4,9,5,6,7]
arr.splice(0,1)
console.log(arr)



To convert array to String

let arr = ["gjdsj","hjghhga","gjgka"]
let str = arr.join("")
console.log(str)



TO ADD and remove elements

let arr = [1,2,3,4,5,6,7,8,9]
let a = arr.pop()
console.log(arr)
console.log(a)
arr.push(a)
console.log(arr)


To Check if person is eligible to vote

let age = [8,56,12,76,22,19]

age.filter((e,i)=>{
   if(e>=18) console.log("person "+(i+1)+ " is eligible")
   else console.log("not Elligible")
});




TO CHech THe number of days difference between two days

let date = new Date()

let msec  = Date.parse("2020-11-30")
let msec2 = Date.parse(date.toDateString())

let days = Math.floor((msec2 - msec)/ (60*60*24*1000))
console.log(days)




Program to print The current Date

let date = new Date();

date = date.toDateString();

console.log(date);




Program to print a specific Date 

let date = new Date("2023-12-31");

date = date.toDateString();

console.log(date)




Get Month

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();

let monthIndex = date.getMonth()

console.log(months[monthIndex])




Get Day of the WEek

let days = ["Sun","Mon","Tue","Wed","Thu","Sat"]

let date = new Date()

let dateIndex = date.getDay()

console.log(days[dateIndex])




Set year in Date Obj

let date =  new Date()

date.setFullYear(2022,3,24);

console.log(date.toDateString());


PROGRAM to compare two Date 

let Today = new Date();
 
let Yesterday = new Date(Today-(24*60*60*1000))


if(Today<Yesterday){
  console.log(Today.toDateString() +" is before " + Yesterday.toDateString())
}
else{
  console.log(Today.toDateString()+" is after "+ Yesterday.toDateString())
}



TO CHech THe number of months difference between two days

let date = new Date()
let date2 = new Date("2020-11-30")
let mili  = date2.getTime()
let mil2 = date.getTime()

let months = Math.floor((mil2- mili)/ (30*24*60*60*1000))
console.log(months)


Program to generate a Random Date

let Ryear = Math.floor(Math.random()*(2051-2000)+2000)
let Rmonth = Math.floor(Math.random()*12)
let Rday = Math.floor(Math.random()*30);

let date = new Date(Ryear,Rmonth,Rday)

console.log(date.toDateString())
