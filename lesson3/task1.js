function f(a) {
    var result = 0;

    if (typeof a == 'number') {
        result = a * a * a;
    }
    else {
        throw new Error("Error: parameter type is not a Number")
    }
    return result;
}

var two = f(2);
//var text = f('hi');

console.log(two);
//console.log(text);