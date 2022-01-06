// class 8:

var array = ["moin", "raihan", "rifat", "arnob", "zarif"];                   // array creation
console.log(array[1]);

array[1] = "joy";
console.log(array);

var array2 = [["moin", "qa"], ["rifat", "waiter"]];
console.log(array2[1][0]);
array2[1] = "joy";                                                           // changing data of array
console.log(array2); 

array2.push(["sabuj", "intern"]);                                            // add data to an array
console.log(array2);

array2.pop();                                                                // pop element from an array
console.log(array2);

array2.shift();                                                              // remove the first element
console.log(array2);

array2.unshift(["shovon", "dev"]);
console.log(array2);

