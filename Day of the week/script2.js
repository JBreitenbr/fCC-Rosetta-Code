function findXmasSunday(start, end) {
  return Array.from(Array(end-start+1).keys()).map((item)=>item+start).filter ((item)=>new Date(item.toString()+"-12-25").getDay()==0);
}
findXmasSunday(2000, 2100)
