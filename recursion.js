function sum(arr, n) {
    // Only change code below this line
    if(n<=0){
      return 0;
    }else{
      return sum(arr,n-1) +arr[n-1];
    }
  
    // Only change code above this line
  }
  sum1= sum([1], 0);
  sum2= sum([2, 3, 4], 1) ;
  sum3 =sum([2, 3, 4, 5], 3);

  console.log(sum1);
  console.log(sum2);
  console.log(sum3);