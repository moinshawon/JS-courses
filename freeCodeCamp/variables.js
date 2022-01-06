// class 1:
console.log("moin");

// ------------------------------------- END ---------------------------------------------

// class 2:
const prompt = require('prompt-sync')();

var fname = prompt("give f name");
var lname = prompt("give l name");

console.log("your name is: ", fname, lname);

// ------------------------------------- END ---------------------------------------------

// class 3:
var a;
var b = 90;

console.log(a);
console.log(b);

a = 34;
b = a;

console.log(a);
console.log("b now changed to: ",b);

// ------------------------------------- END ---------------------------------------------

// class 4:
var c = 10;
var d = 50;
var e = "moin";

c = c + d;
d = d + 50;
e += " shawon";

console.log(c);
console.log(d);
console.log(e);
console.log(e.length);
console.log(e[0], e[5]);
console.log(e[e.length - 1 ]);  // get the last letter
console.log(e[e.length - 4 ]);  // get whatever last letter 

e = 2 * "moin";              // can't multiply string and number
console.log(e);

doubleQuete = "I'm \"Moin\" and I'm the \"Boss\" ";
console.log(doubleQuete);

// ------------------------------------- END ---------------------------------------------

// class 5:
console.log(c*2);
console.log(c/2);
console.log(e*e);
console.log(11/3);

var f = 50;
console.log(f++);
console.log(f++);
console.log(f);
console.log(f);

var g = 99;
console.log(g--);
console.log(g--);
console.log(g);
console.log(g);
g--;
console.log(g)
// ------------------------------------- END ---------------------------------------------

// class 6:
var multiply = 2.0 * 2.5;
var multiply = 5.0 * 5.5;
console.log(multiply);

var reminder = 5.0 % 5.5;
console.log(reminder);

var short = 90;
short += 10;
console.log(short);

// ------------------------------------- END ---------------------------------------------

// class 7:
var str = "hey, it's Moin\nyoo\nhow are \byou?\t?\ni'm very \fgood.";
console.log(str);

