
const arr = [3,2,1];




function reverse (arr) {
    if ( arr.length == 0 ) {
        throw new Error("Error: parameter can't be an empty");
    }
    else {
    console.log(arr.sort((a,b) => a - b));
    }
}


reverse(arr); // [1,2,3]

