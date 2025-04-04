function numFreq(num) {
    let arr=num.toString().split("").sort();
        let frObj={};
              arr.forEach((item)=>item in frObj?frObj[item]+=1:frObj[item]=1);
                      return frObj;
                      }
                      function isSelfDescribing(n) {
   let nStri=n.toString();
   let frObj=numFreq(n);
   for(let i=0;i<nStri.length;i++){
      if(!(i.toString() in frObj)){
         frObj[i.toString()]=0;
      }
      if(n.toString()[i]!=frObj[i.toString()]){
         return false;
      };
   }
   return true;
}

console.log(isSelfDescribing(2020));
