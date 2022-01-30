

function myForEach(arr, callback) {

    if ( Array.isArray(arr) == false ) {
        throw new Error("Error: parameter type should be an array");
    }
    else if ( Array.isArray(arr) == true )  {
        for (let i = 0; i < arr.length; i++) { 
            callback(arr[i]);
        }
    }
}

function callback(element) {
    if ( typeof(callback) != 'function' ) {
        throw new Error("Error: parameter type should be an function");
    }
    else if ( typeof(callback) == 'function') {
    console.log(element); 
    }
}



const arr = [1,2,3];
myForEach(arr, callback); 