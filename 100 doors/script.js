function getFinalOpenedDoors(numDoors) {
  let doors = new Array(100).fill(0);
  for(let i=0;i<100;i++)
  {
    for(let j=1;j<101;j++){
    if((i+1)%j==0){
      doors[i]=Number(!doors[i]);
    }
   }
  }
  return doors.map((item,index)=>item===1?index+1:undefined).filter(x=>x);
}
