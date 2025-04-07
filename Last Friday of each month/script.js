function lastFriday(year, month) {
  for(let i=0;i>-7;i--){
  let dt=new Date(year,month,i);
  if(dt.getDay()==5){
    return dt.getDate();
    }
  }
}
console.log(lastFriday(2018,1));
