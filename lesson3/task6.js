

function isEven(a) {
    if (typeof a != 'number') {
        throw new Error("Error: parameter type is not a Number");
    }
	else if ((a % 2) === 0) {
		return true;
	} else {
		return false;
	}
}