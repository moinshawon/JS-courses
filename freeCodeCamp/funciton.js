// class 9:

function reuse(){
    console.log("moin");
}
reuse();
reuse();

function sub(a, b){
    console.log(a-b);
}
sub(5, 7);

function sentence(noun, adjective, verb, adverd){
    var total;
    total = "The " + adjective + " " + noun + " " + verb + " " + adverd;
    return total;
}
console.log(sentence("moin", "big", "run", "well"));

// class 10:
var outsideFunction = 10;                                           // as usual its global variable

function insideVar(){
    insideFunction = 5;                                             // as i set no var here, it becomes global variable
}

function varCheck(){
    var output = "";                                                // need to define it otherwise it will work but will show undefined
    if (typeof outsideFunction != "undefined"){
        output += "outside function: " + outsideFunction + "\n";    // it was global variable. so, it will work
    }

    if (typeof insideFunction != "undefined"){
        output += "inside function: " + insideFunction + "\n";      // as i did not set var before insideFunction, it is global var and work here
    }
    console.log(output);
}

insideVar();                                                        // need to call first function bcz the var used in next function
varCheck();

// class 11:
function variableCheack(){
    var localVar = 5;                                                  // we set var so, it will be local variable now
}
variableCheack();
console.log(localVar);                                                 // get an error bcz local variable cant be acceseed outside of function

// class 12:
var var1 = "moin";

function variableCheack(){
    var var1 = "raihan"                                                   // can be same name as global variable. we set var so, it is loacl var
    return var1;
}
console.log(variableCheack());                                            // print the local var
console.log(var1);                                                        // print the global var

var var1 = "moin";

function variableCheack(){
    var1 = "raihan";                                            // it is now a global var. so, the outside var will be chnaged
    return var1;
}
console.log(variableCheack());                                  // print the inside changed var
console.log(var1);                                              // the global var is now changed

// class 13:
function add(num){
    return num + 5;
}
console.log(add(5));

var c = 0;

function change(num){
    return num / 2;
}

c = change(5);
console.log(c);

// class 14:

var a = [3,43,23,221,5,4];

function queue(arr, item){
    arr.push(item);                           // push an item at the last of array 
    return arr.shift();                       // remove the first item from the list. both cases as no var is set the main array will change
}

console.log("before: " + JSON.stringify(a));  // make the array to a object
console.log(typeof(a));
console.log(queue(a, 99));
console.log("after: " + JSON.stringify(a));

