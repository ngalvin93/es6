// Here we have a handful of ES5 functions.
// Spice them up by converting them to arrow functions!


let introduction = function(name, otherName) {
    let introduction = name + ", let me introduce you to " + otherName;
    return introduction;
}

// es6
let introduction = (name, otherName) => {
    return name + ", let me introduce you to " + otherName;
}

// This one only has one parameter! 
let boringFunction = function (topic) {
    let complain = topic + " is so boooooring!!!";
    return complain;
}

// es6
let boringFunction = topic => topic + " is so boooooring!!!";

// This one has a single return statement!
let shout = function() {
    return "AAAHHHH!!"
}

// es6
let shout = () => "AAAHHHH!!";