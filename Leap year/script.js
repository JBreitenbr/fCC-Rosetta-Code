function addDayToDate(year){
   let dt = new Date(year,1,28);
   dt.setDate(dt.getDate() + 1);
   return dt.getDate();
}

function isLeapYear(year) {
   if(addDayToDate(year)==29){
      return true;
   }
   else return false;
}
