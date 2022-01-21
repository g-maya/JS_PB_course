

function getDivisors(a) {
    var newArr = [];

    if (a > 0) {
        for (var i = 1; i<=a; i++) {
            if(a % i === 0) {
                newArr.push(i);
            }
        }
    }
    else if (typeof a != 'number') {
        throw new Error("Error: parameter type is not a Number");
    }
    else if (a == 0) {
        throw new Error("Error: parameter can't be a 0");
    }
    return newArr;
}



console.log(getDivisors(4))