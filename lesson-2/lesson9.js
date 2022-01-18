var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]

console.log(arr)  

for (var i = 0; i < arr.length; i++) 
{
    var min = arr[i];
    var min_i = i; 
    for (var k = i+1; k < arr.length; k++) 
    {
        if (arr[k] > min) 
        {
            min = arr[k];
            min_i = k;
        }
    }
        if (i != min_i)
        {
            var tmp = arr[i];
            arr[i] = arr[min_i];
            arr[min_i] = tmp;
        }
 }


console.log(arr)  








// for (var i = 0; i < arr.length; i++)
// {
//     if (arr[i] > arr[i-1])
//     {
//         console.log(arr)  
//     }
// }





// if (i > ii)
// return -1;
// else if (i < ii)
// return 1;
// else
// return 0;

