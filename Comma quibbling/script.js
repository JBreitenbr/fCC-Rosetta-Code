function quibble(words) {
  if(words=="" || words==[]){
    return "{}";
  }
  else if(words.length==1){
    return "{"+words[0]+"}";
  }
  else if(words.length==2){
    return "{"+words[0]+" and "+words[1]+"}";
  }
  else {
    let expr1=words.slice(0,words.length-1).join(", ");
    let expr2=words.slice(words.length-1,words.length); 
    return "{"+expr1+" and "+expr2+"}";
    }
}

