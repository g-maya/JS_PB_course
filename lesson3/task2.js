function f() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] == 'number') {
            result += arguments[i];
        }
        else {
            throw new Error("all parameters type should be a Number");
        }
}
    return result;
}

var a = f(1,1,1,1,1,1,1,1);

console.log(a);