/* CUSIP
A CUSIP is a nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades. The CUSIP was adopted as an American National Standard under Accredited Standards X9.6.

Write a function that takes a string as a parameter and checks if the string is valid CUSIP. */

function quer(num){
   let stri=num.toString();
   if(stri.length==2){
      return Number(stri[0])+Number(stri[1]);
   }
   else if(stri.length==1){
      return num;
   }
   else return "goa nix";
}
function isCusip(s) {
   let alph="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let v=[0,0,0,0,0,0,0,0];
   let p;
   let nums="0123456789".split("");
   for(let i=0;i<8;i++){
     if(nums.includes(s[i])){
        v[i]=Number(s[i]);
     }
     else if((alph.split("")).includes(s[i])){
        v[i]=alph.indexOf(s[i])+10;
     }
     else if(s[i]=="*"){
        v[i]=36;
     }
     else if(s[i]=="@"){
        v[i]=37;
     }
     else if(s[i]=="#"){
        v[i]=38;
     }
     if(i%2==1){
        v[i]*=2;
     }
     v[i]=quer(v[i]);
   }
   let sn=v.reduce((a,b)=>a+b,0);
   let c=(10-(sn % 10))%10;
   return Number(c)==s[8];
}
