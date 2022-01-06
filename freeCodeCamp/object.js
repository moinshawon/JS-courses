// class 20:
// var obj = {
//     "name" : "Moin",
//     "height": 6,
//     "role": ["QA", "RA"],
//     "favourite drinks": "beer"
// };
// console.log(obj.height);               // accessing values of objects
// console.log(obj.name);
// console.log(obj.role[0]);
// console.log(obj["favourite drinks"]);  // when we need to access a key which has space in the middle  
// obj.height = 5.11;                     // manipulating values of object
// console.log(obj.height);

// class 21:
// var testObj = {
//     10 : "hey",
//     11 : "hi"
// };
// var a = 10;
// var word = testObj[a];                // accessing key of object with variable
// console.log(word);

// class 22:
// var o = {
//     "name" : "dihan",
//     "role" : "meku biral",
//     "ex" : "rifat"
// };
// o.vg = "no";                         // adding keys to the object
// console.log(o);
// delete o.vg;                         // deleting keys from object
// console.log(o)

// class 23:
// function a(val){
//     var location = {
//         "moin" : "ctg",
//         "joy" : "ctg",
//         "raihan" : "dhaka",
//         "rifat" : "london"
//     };
//     return location[val];
// }
// console.log(a('rifat'));

//class 24:
// var a = {
//     "job" : "qa",
//     "company" : "enosis",
//     "member" : 321
// };

// function checkObj(property){
//     if (a.hasOwnProperty(property)){
//         return a[property];
//     }
//     else{
//         return "not found";
//     }
// }
// console.log(checkObj('job'));

// class 25:

var a = [
    {
        "artist": "JB",
        "album": "purpose",
        "song": "love yourself",
        "release date": "2015",
        "world tour": [
            "LA",
            "NYC",
            "FL",
            {"a":"miami"}
        ],
        "fund": "500$ Million"
    }
]
console.log(a[0]["world tour"][3].a); // when there is space, put that into [ bracket ]. access list with [0], access object with .a

