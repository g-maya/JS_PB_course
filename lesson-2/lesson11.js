var arr = [2, 5, 9, 15, 0, 4];

//console.log(arr);

for (var i = 0; i < arr.length; i++)
{
  if (arr[i] < 3) //|| arr[i] > 10)
  {  
    var arrmin = arr[i];
    console.log(arrmin);
  }
  if (arr[i] > 10)
  {
    var arrmax = arr[i];
    console.log(arrmax);
  }
}