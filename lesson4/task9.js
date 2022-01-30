

function arrayFill(value, length) { 
	var arr = [];
    if ( value.length == 0 ) {
        throw new Error("Error: parameter can't be an empty");
    }
    else if (typeof length != 'number') {
        throw new Error("Error: parameter type is not a Number");
    }
    else
    {	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;}
}


console.log(arrayFill('x', 5));