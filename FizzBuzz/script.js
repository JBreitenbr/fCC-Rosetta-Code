function fizzBuzz() {
  let tArr=[];
  let arr=Array.from(Array(101).keys()).slice(1,101);
  for(let i=0;i<100;i++){
    if((i+1)%3==0 && (i+1)%5!=0){
      tArr.push("Fizz");
    }
    else if((i+1)%3!=0 && (i+1)%5==0){
      tArr.push("Buzz");
    }
    else if((i+1)%3==0 && (i+1)%5==0){
      tArr.push("FizzBuzz");
    }
    else {
      tArr.push(i+1);
    }
  }
  return tArr;
}
