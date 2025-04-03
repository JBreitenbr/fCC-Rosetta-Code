function letterFrequency(txt) {
  let arr=txt.split("").sort();
    let frObj={};
      arr.forEach((item)=>item in frObj?frObj[item]+=1:frObj[item]=1);
        return Object.entries(frObj);
}
