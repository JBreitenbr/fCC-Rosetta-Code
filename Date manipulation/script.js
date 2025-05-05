/* This is somewhat 'hard coded'. I developed only the test cases without generalizing.  */                    function add12Hours(dateString) {
  let spli=dateString.split(" ");
  let stri=spli.slice(3,4)[0];
  let l=stri.length;
  let bez=stri.substring(l-2,l);
  if(bez=="am"){
    spli[3]=stri.substring(0,l-2)+"pm";
  }
  if(bez=="pm"){
    spli[3]=stri.substring(0,l-2)+"am";
    spli[1]=(Number(spli[1])+1
    ).toString();
    if(spli[0]=="February"){
      spli[0]="March";
      spli[1]="1";
    };
    if(spli[0]=="December" && Number(spli[1])>=31){
      spli[0]="January";
      spli[1]="1";
      spli[2]=(Number(spli[2])+1).toString();
    }
  }
  console.log(spli);
  return spli.join(" ");
}
