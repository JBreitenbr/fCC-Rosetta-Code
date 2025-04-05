function genFizzBuzz(rules, num) {
   let stri="";
   for(let i=0;i<rules.length;i++){
      if(num%rules[i][0]==0){
         stri+=rules[i][1];
      }
   }
   if(stri.length==0){
      return num.toString();
   }
   else {
      return stri;
   }
}
