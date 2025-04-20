let mObj={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};
let wObj={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
function getDateFormats() {
  let rArr=[];
  let date=new Date();
  let year=date.getFullYear().toString();
  let month=(date.getMonth()+1).toString();
  let day=(date.getDate().toString());
  let stri1=year+"-"+month+"-"+day;
  let wday=date.getDay();
  let stri2=wObj[wday]+", "+mObj[Number(month-1)]+" "+day+", "+year;
  rArr.push(stri1);
  rArr.push(stri2);
  return rArr;
}
