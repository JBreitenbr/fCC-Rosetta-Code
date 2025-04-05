function IBeforeExceptC(word) {
  let ind1=word.indexOf("ei");
  let ind2=word.indexOf("ie");
  if(ind1 > -1 && word[ind1-1]=="c"){
    return true;
  }
  else if(ind2 > -1 && word[ind2-1]=="c"){
    return false;
  }
}
