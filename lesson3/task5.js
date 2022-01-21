

var arr = [1, 2, -4, 3, -9, -1, 7];



function isPositive(a) {
    if (typeof a != 'number') {
        throw new Error("Error: parameter type is not a Number");
    }
	else if (a >= 0) {
		return true;
	} else {
		return false;
	}
}

//console.log(isPositive(-5))


  var newArr = [];

for (var i = 0; i < arr.length; i++) {
	if (isPositive(arr[i])) {
		newArr.push(arr[i]);
	}
}

console.log(newArr);