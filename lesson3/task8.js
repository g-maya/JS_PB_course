

function f(a) {
    if ( Array.isArray(a) == false ) {
        throw new Error("Error: parameter type should be an array");
    }
     if ( a.length == 0 ) {
        throw new Error("Error: parameter can't be an empty");
    }
	console.log(a[0]);
	a.splice(0, 1);
	if (a.length > 0) {
		f(a);
	}
}
