/* Element-wise operations
Implement basic element-wise matrix-matrix and scalar-matrix operations.

Implement:

addition
subtraction
multiplication
division
exponentiation
The first parameter will be the operation to be performed, for example, "m_add" for matrix addition and "s_add" for scalar addition. The second and third parameters will be the matrices on which the operations are to be performed.*/

function operation(op, arr1, arr2) {
  let res=[];
  let f1=arr1.flat();
  let f2;
  if(op!="s_add"){f2=arr2.flat();} else {f2=new Array(arr1[0].length*2).fill(arr2);
  }
    for(let i=0;i<f1.length;i++){
      if(op=="m_add" || op=="s_add")
      res.push(f1[i]+f2[i]);
      if(op=="m_sub")
      res.push(f1[i]-f2[i]);
      if(op=="m_mult")
      res.push(f1[i]*f2[i]);
      if(op=="m_div")
      res.push(f1[i]/f2[i]);
      if(op=="m_exp")
      res.push(Math.pow(f1[i],f2[i]))
    }
  let erg=res.reduce((r,e,i)=>(i%arr1[0].length?r[r.length-1].push(e):r.push([e]))&&r,[]);
    return erg;
}
