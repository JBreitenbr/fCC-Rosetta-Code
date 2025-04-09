function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);    
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = 
          [array[randomIndex], array[currentIndex]];
           }
     return array;
}
                                    
function  checkSort(arr) {
   let sorted=arr.sort((a,b)=>a-b);
   for(let i=0;i<arr.length;i++){
     if(arr[i]!=sorted[i]){
       return false;
     }
   }
   return true;
}    

function bogosort(v) {
  do {
    shuffle(v);
  }
  while(!checkSort(v));
  return v;
}
