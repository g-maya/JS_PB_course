


const arr = [-1,4,1,2,3];


function myfilter (arr, callback) {
    if ( Array.isArray(arr) == false ) {
        throw new Error("Error: parameter type should be an array");
    }
    else if (Array.isArray(arr) == true) {
        for (let i = 0; i < arr.length; i++) { 
            if (arr[i] > 0) {
                callback(arr[i])
            }
        }
    }
}


function callback(element) {
    var newArr = [];
    if ( typeof(callback) != 'function' ) {
        throw new Error("Error: parameter type should be an function");
    }
    else if ( typeof(callback) == 'function') {
    newArr.push(element); 
    }
    console.log(newArr) 
}


myfilter(arr, callback); 



