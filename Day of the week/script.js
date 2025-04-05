function isXmasSunday(year){
  let xDate=new Date(year,11,25);
  return xDate.getDay()==0;
}

function findXmasSunday(start, end) {
  let tArr=[];
  for(let y=start;y<end;y++){
    if(isXmasSunday(y)){
      tArr.push(y);
    }
  }
  return tArr;
}
