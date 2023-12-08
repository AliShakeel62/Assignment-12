//Capter 1 Alerts


alert("Hey java");
alert("Hey");


//Capter 2 Variables for Strings


var name = ("ALi");
var age = ("15")
console.log("name")
console.log("Age")


//Capter 3 Variables for Numbers


var wieght = 50;
console.log(wieght + 2);
var newNum = (wieght + 2);
console.log(newNum);


//Capter 4 Variable Names Legal and Illegal


//Illegal name

//var var = (illegal); 
//var 1num = (illegal);

//Legal name

//var anyname = (Legal);     
//var nam1e = (legal);



//Capter 5 Math expressions: Familiar operators


var popularNumber = 4;
var popularNumber2 = 2 + 2;
alert(2 + 2);
var popularNum = 12 - 24;
console.log(popularNum);
var famousnum = 10;
console.log(famousnum + 250);
console.log(popularNum + famousnum);
var famousnum2 = 5 * 15;
console.log(famousnum2);
var famousnum3 = 10 % 6;
console.log(famousnum3);

//Capter 6 Math expressions:Unfamiliar operators 


var Num3 = 2;
console.log(++Num3);
var Num4 = (23);
var Num5 = (Num4++);
console.log(Num4);
console.log(Num5);
var Num6 = (54);
var Num7 = (++Num6)
console.log(Num6);
console.log(Num7);

//Capter 7 Math expressions:Eliminating ambiguity

var total = 1 + 3 * 4;
console.log(total);
var againtotal = 1 + (6 - 4);
console.log(againtotal);
var Newnum2 = (2 + 7) - (5 + 2);
console.log(Newnum2);
//Capter 8 Concatenating text strings

var message = "Thanks, ";
var banger = "!";
alert(message + "userName" + banger);

//Capter 9 Prompts


var ch1 = prompt("Your species?", "human")
var ch2 = "Your species?";
var ch3 = "human";
var ch4 = prompt(ch2, ch3);
var ch5 = prompt("How many cats ?");
var ch6 = ch5 + 1;
console.log(ch6);


//Capter 10 if statements

var ab = prompt("Do you have cnic")
if (ab == "yes") { console.log("Correct") };

////Capter 11 Comparison operators

alert("we are allow only 18 to 20")
var ac = prompt("what is your age");
if (ac >= 18) { console.log("allow") };

var ad = prompt("Are you student")
var ae = prompt("Do you have student card")
if (ad == "yes" || ae == "yes") { console.log("allow") };

//Capter 12 if...else and else if statements

var af = 30;
if (af >= "18") {
    alert("Correct!");
}
else {
    alert("Incoorect");
};



var ag = "60";
 if (ag == "61") {

 alert("Correct!");
 }
 else if (ag >= "60") {
 alert("Incorrect but close");
 }
 else {
 alert("Incorrect");
 }



//Capter 13 Testing sets of conditions

var ah = prompt("please give student card");
var ai = prompt("please give you cnic");
if (ah == "yes" || ai == "yes") { console.log("Congratulations") }
else if (ah == "no" || ai == "no") { console.log("Sorry") }

var aj = prompt("Do you eat food ?");
var ak = prompt("are you robot ?")
if ( aj == "yes" && ak == "yes" ) {console.log ("Congratulations")}
else { console.log("Sorry you give both answer in yes")}

//Capter 14 if statements nested

var one =prompt("Are you human");
var two =prompt("Are you student");
var three =prompt("2+2");
if((one == "yes" || two == "no") && three == "4" )
{console.log ("Thanks")}
else {console.log("sorry")}



//Capter 15 Arrays

var a1 = 1;
var a2 = 2;
var a3 = 3;
var a4 = 4;
var arr =["a1","a2","a3","a4"] ;
alert("welcome"+a3);

//Capter 16 Alerts

var b1 = "Am";
var b2 = "Tr";
var b3 = "Pa";
var b4 = "Ar";
var app =[b1,b2,b3,b4];
console.log( app );
app.pop();
console.log( app );

console.log( app );
app.push();
console.log( app );

// Capter 17 Arrays: Removing, inserting, and extracting elements


var c1 = "Dog" ;
var c2 = "Cat";
var c3 = "Lion";
var c4 = "pigeon";
var brr =[ "c1","c2","c3","c4", ]
console.log( brr );
brr.shift();
console.log( brr );
brr.unshift(4);
console.log( brr );
brr.splice(3,1 ,"89");
console.log( brr );